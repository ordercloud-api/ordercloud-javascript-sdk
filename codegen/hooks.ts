// https://github.com/ordercloud-api/oc-codegen#hooks-
import {
  Model,
  Param,
  PostFormatModelHook,
  PostFormatOperationHook,
  PostFormatTemplateDataHook,
  Operation,
  FilterResourcesHook,
} from '@ordercloud/oc-codegen'

const filterResources: FilterResourcesHook = function(resource) {
  // we want to manually remove Certs from the resource array so that we can add custom logic in the codegen template
  return resource.name !== 'Certs'
}

const postFormatModel: PostFormatModelHook = function(model, models) {
  // add model.typeParams and prop.typeParams
  inspectModelForTypeParams(models, model)

  // add model.hasTypeParams and prop.hasTypeParams
  model['hasTypeParams'] = Boolean(model['typeParams'].length)
  model.properties.forEach(prop => {
    prop['hasTypeParams'] = Boolean(prop['modelTypeParam'])
  })

  // add prop.typescriptType to props on model
  model.properties.forEach(prop => {
    prop['typescriptType'] = findTypeForModelProps(prop, model)
  })

  // RETURN MODIFIED MODEL - THIS IS IMPORTANT
  return model
}

const postFormatOperation: PostFormatOperationHook = function(operation) {
  // add prop.typescriptType to props on operations
  operation.allParams.forEach(param => {
    param['typescriptType'] = findTypeForOperationProps(param, operation)
  })

  operation.queryParams.forEach(param => {
    param['typescriptType'] = findTypeForOperationProps(param, operation)
  })

  if (operation.isList) {
    // add list models to file imports
    operation.fileImports = [
      operation.isFacetList ? 'ListPageWithFacets' : 'ListPage',
      'Searchable',
      'Sortable',
      'Filters',
      ...operation.fileImports,
    ]
  }

  // RETURN MODIFIED OPERATION - THIS IS IMPORTANT
  return operation
}

const postFormatTemplateData: PostFormatTemplateDataHook = function(
  templateData
) {
  const sortByModels = templateData.operations
    .filter(o => o.queryParams?.some(p => p.name === 'sortBy'))
    .map(op => {
      const prop = op.queryParams.find(p => p.name === 'sortBy')
      const enumVals = prop?.enumValues

      let enumString
      if (op.isFacetList || !enumVals) {
        // enhanced search lets you searchOn by any xp value
        // so we have to use string[] which unfortunately destroys type inference
        enumString = 'string[]'
      } else {
        enumString = `(${enumVals.map(v => `'${v}'`).join(' | ')})[]`
      }
      // List Shipment Items, for example, has zero sortable properties
      if (enumVals?.length === 0) {
        // sortBy should always be any empty array
        enumString = '[]'
      }

      return {
        id: op.id,
        type: enumString,
      }
    })
  templateData['sortByModels'] = sortByModels

  const searchOnModels = templateData.operations
    .filter(o => o.queryParams?.some(p => p.name === 'searchOn'))
    .map(op => {
      const prop = op.queryParams.find(p => p.name === 'searchOn')
      const enumVals = prop?.enumValues

      let enumString
      if (op.isFacetList || !enumVals) {
        // enhanced search lets you searchOn by any xp value
        // so we have to use string[] which unfortunately destroys type inference
        enumString = 'string[]'
      } else {
        enumString = `(${enumVals.map(v => `'${v}'`).join(' | ')})[]`
      }
      // List Shipment Items, for example, has zero searchable properties
      if (enumVals?.length === 0) {
        // searchOn should always be any empty array
        enumString = '[]'
      }

      return {
        id: op.id,
        type: enumString,
      }
    })
  templateData['searchOnModels'] = searchOnModels

  // RETURN MODIFIED TEMPLATE DATA - THIS IS IMPORTANT
  return templateData
}

module.exports = {
  postFormatModel,
  postFormatOperation,
  postFormatTemplateData,
  filterResources,
}

/******************
 * BEGIN HELPER METHODS *
 * ****************
 */

const javascriptTypes = {
  'integer': 'number',
  'object': 'any',
  'string': 'string',
  'boolean': 'boolean',
}

function findTypeForOperationProps(prop: Param, operation: Operation) {
  if (!prop) {
    return 'void'
  }

  if (prop.name === 'filters') {
    return `Filters`
  }

  if (prop.isEnum && !prop.isCustomType) {
    if (prop.name === 'searchOn') {
      return `Searchable<'${operation.id}'>`
    }
    if (prop.name === 'sortBy') {
      return `Sortable<'${operation.id}'>`
    }

    const enumVals = prop.enumValues
    const enumString = enumVals.map(v => `'${v}'`).join(' | ')
    if (prop.isArray) {
      return `(${enumString})[]`
    }
    return enumString
  }

  const jsType = javascriptTypes[prop.type] || prop.type

  if (prop.isArray) {
    return prop.isCustomType ? `${prop.type}[]` : `${jsType}[]`
  }

  if (!prop.hasRequiredFields && prop.isCustomType) {
    return prop.type
  }

  return jsType
}

function findTypeForModelProps(prop: Param, model: Model) {
  if (!prop) {
    return 'void'
  }

  if (prop.name === 'xp') {
    return `T${model.name}Xp`
  }

  if (model.isList && prop.name === 'Items') {
    return `T${model.type}[]`
  }

  if (prop.isEnum && !prop.isCustomType) {
    const enumVals = prop.enumValues
    const enumString = enumVals.map(v => `'${v}'`).join(' | ')
    if (prop.isArray) {
      return `(${enumString})[]`
    }
    return enumString
  }

  if (prop['modelTypeParam']) {
    return prop.isArray ? `${prop['modelTypeParam']}[]` : prop['modelTypeParam']
  }

  const jsType = javascriptTypes[prop.type] || prop.type

  if (prop.isArray) {
    return prop.isCustomType ? `${prop.type}[]` : `${jsType}[]`
  }

  if (!prop.hasRequiredFields && prop.isCustomType) {
    return prop.type
  }

  return jsType
}

/**
 * Own xp stays the first parameter and defaults to any.
 * Each direct custom-type property that today contributes nested xp
 * becomes one parameter constrained to that model. Nested xp names
 * are not hoisted onto the parent.
 */
function inspectModelForTypeParams(allModels: Model[], model: Model) {
  const typeParams: { name: string; constraint?: string }[] = []
  const usedNames = new Set<string>()

  if (model.properties.some(prop => prop.isXp)) {
    const ownXpName = `T${model.name}Xp`
    typeParams.push({ name: ownXpName })
    usedNames.add(ownXpName)
  }

  model.properties.forEach(prop => {
    prop['modelTypeParam'] = undefined
    if (!prop.isCustomType || prop.isXp) {
      return
    }
    if (!customTypeContributesXp(allModels, prop.type)) {
      return
    }
    const name = modelTypeParamName(prop, usedNames)
    usedNames.add(name)
    typeParams.push({ name, constraint: prop.type })
    prop['modelTypeParam'] = name
  })

  model['typeParams'] = typeParams
}

function modelTypeParamName(prop: Param, usedNames: Set<string>): string {
  // Arrays take the element type name (LineItems -> TLineItem).
  // Other properties take the property name (FromUser -> TFromUser)
  // so two Address fields stay distinct.
  const preferred = prop.isArray ? `T${prop.type}` : `T${prop.name}`
  if (!usedNames.has(preferred)) {
    return preferred
  }
  const byProperty = `T${prop.name}`
  if (!usedNames.has(byProperty)) {
    return byProperty
  }
  return `T${prop.name}_${prop.type}`
}

function customTypeContributesXp(
  allModels: Model[],
  typeName: string,
  depth = 0
): boolean {
  const model = allModels.find(
    candidate => candidate.name === typeName || candidate.type === typeName
  )
  if (!model) {
    throw new Error(`Unable to find next model to inspect for ${typeName}`)
  }
  for (const prop of model.properties) {
    if (prop.isXp) {
      return true
    }
    // Match the previous hoist depth: xp on this model, and xp on its
    // direct custom-type children. Do not walk further.
    if (
      depth < 1 &&
      prop.isCustomType &&
      customTypeContributesXp(allModels, prop.type, depth + 1)
    ) {
      return true
    }
  }
  return false
}
