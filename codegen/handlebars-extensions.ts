function handlebarsExt(Handlebars) {
  // converts /buyers/{buyerID} to /buyers/${buyerID} so template literal take in parameters
  Handlebars.registerHelper('parameterizePath', (path?: string) => {
    if (!path) {
      return ''
    }
    return path.replace(/{/g, '${')
  })

  Handlebars.registerHelper('commaSeparate', (fields: string[]) => {
    return fields.join(', ')
  })

  Handlebars.registerHelper('kebabCase', (text: string) => {
    return text
      .replace(/([a-z])([A-Z])/g, '$1-$2') // get all lowercase letters that are near to uppercase ones
      .replace(/[\s_]+/g, '-') // replace all spaces and low dash
      .toLowerCase() // convert to lower case
  })

  Handlebars.registerHelper(
    'commaSeparateWithDefaultAny',
    (types: string[]) => {
      return types.map(t => `${t} = any`).join(', ')
    }
  )
}

module.exports = handlebarsExt
