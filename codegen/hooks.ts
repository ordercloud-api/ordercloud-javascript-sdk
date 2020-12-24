// https://github.com/ordercloud-api/oc-codegen#hooks-
import {
  Model,
  Param,
  PostFormatModelHook,
  PostFormatOperationHook,
  PostFormatTemplateDataHook,
  Operation,
} from '@ordercloud/oc-codegen'

const postFormatModel: PostFormatModelHook = function(model, models) {
  // add model.typeParams and prop.typeParams
  inspectModelForTypeParams(models, model, model)

  // add model.hasTypeParams and prop.hasTypeParams
  model['hasTypeParams'] = Boolean(model['typeParams'].length)
  model.properties.forEach(prop => {
    prop['hasTypeParams'] = Boolean(prop['typeParams'].length)
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

  const typeParams = prop['hasTypeParams']
    ? `<${prop['typeParams'].join(',')}>`
    : ''
  const jsType = javascriptTypes[prop.type] || prop.type

  if (prop.isArray) {
    return prop.isCustomType ? `${prop.type + typeParams}[]` : `${jsType}[]`
  }

  if (!prop.hasRequiredFields && prop.isCustomType) {
    return prop.type + typeParams
  }

  return jsType
}

function inspectModelForTypeParams(
  allModels: Model[],
  rootModel: Model,
  inspectModel: Model,
  rootProp?: Param,
  parentProp?: Param
) {
  if (!inspectModel['typeParams']) {
    inspectModel['typeParams'] = []
  }
  inspectModel.properties.forEach(prop => {
    if (!prop['typeParams']) {
      prop['typeParams'] = []
    }
    if (prop.isXp) {
      if (!rootProp) {
        const typeParam = `T${inspectModel.name}Xp`
        rootModel['typeParams'].unshift(typeParam)
        prop['typeParams'].unshift(typeParam)
      } else {
        let typeParam = parentProp
          ? `T${parentProp.name}Xp`
          : `T${rootProp.name}Xp`
        if (typeParam === 'TItemsXp') {
          typeParam = `T${rootProp.type}Xp`
          rootModel['typeParams'].unshift(typeParam)
          rootProp['typeParams'].unshift(typeParam)
        } else {
          rootModel['typeParams'].push(typeParam)
          rootProp['typeParams'].push(typeParam)
        }
      }
    }
    if (prop.isCustomType) {
      const toInspect = allModels.find(model => {
        return model.name === prop.type || model.type === prop.type
      })
      if (!toInspect) {
        throw new Error(`Unable to find next model to inspect for ${prop.type}`)
      }
      if (!rootProp && !parentProp) {
        inspectModelForTypeParams(allModels, rootModel, toInspect, prop)
      } else if (rootProp && !parentProp) {
        inspectModelForTypeParams(
          allModels,
          rootModel,
          toInspect,
          rootProp,
          prop
        )
      }
    }
  })
}
