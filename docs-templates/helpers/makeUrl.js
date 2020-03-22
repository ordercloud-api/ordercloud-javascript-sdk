module.exports = {
  makeUrl: function(item) {
    // type aliases weren't correctly linking to the homepage
    // probably because of other customizations I don't remember but this fixes those links

    if (item.reflection) {
      if (item.reflection.kindString === 'Type alias') {
        return 'index.html#' + item.reflection.name.toLowerCase()
      }
      return item.reflection.url
    } else {
      if (item.cssClasses && item.cssClasses.includes('tsd-kind-type-alias')) {
        return 'index.html#' + (item.name || item.title).toLowerCase()
      }
      return item.url
    }
  },
}
