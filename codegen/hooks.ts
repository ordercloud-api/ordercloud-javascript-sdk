// https://github.com/ordercloud-api/oc-codegen#hooks-
import {
  Model,
  Param,
  PostFormatModelHook,
  PostFormatOperationHook,
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

  // RETURN MODEL - THIS IS IMPORTANT
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
    // add ListPage and ListPageWithFacets to fileImports
    operation.fileImports = [
      operation.isFacetList ? 'ListPageWithFacets' : 'ListPage',
      ...operation.fileImports,
    ]
  }

  // RETURN OPERATION - THIS IS IMPORTANT
  return operation
}

module.exports = {
  postFormatModel,
  postFormatOperation,
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
    // we're updating the behavior of filters so that we get better type inference
    // instead of accepting dot-referenced xp values such as { 'xp.color': 'red' }
    // we will now expect { xp: { color: 'red' } }
    prop.description =
      'An object whose keys match the model, and the values are the values to filter by'
    return `Filters<Required<T${operation.returnType}>>`
  }

  if (prop.isEnum && !prop.isCustomType) {
    let enumVals = prop.enumValues

    // each sort field (ascending) can inverse sort (descending) by adding !
    if (prop.name === 'sortBy') {
      enumVals = [...enumVals, ...prop.enumValues.map(v => `!${v}`)]
    }

    // build enumString
    let enumString = enumVals.map(v => `'${v}'`).join(' | ')

    // enhanced search lets you search/sort by xp values
    if (
      operation.isFacetList &&
      (prop.name === 'searchOn' || prop.name === 'sortBy')
    ) {
      // unfortunately adding type string to the union type
      // widens type to simply type string which destroys type-inference
      // at this time there is nothing in the language that can help us out
      // might be worth keeping an eye on regex-validated string types:
      // https://github.com/microsoft/TypeScript/issues/6579
      enumString = `${enumString} | string`
    }

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
