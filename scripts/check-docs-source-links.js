const fs = require('fs')
const path = require('path')

const docsDir = path.join(__dirname, '..', 'docs')
const example = path.join(docsDir, 'classes', 'Resources.Addresses.html')
const linkedSource = /Defined in <a href="https:\/\/github\.com\/ordercloud-api\/ordercloud-javascript-sdk\//g
const unlinkedSource = /Defined in (?!<a href="https:\/\/github\.com\/ordercloud-api\/ordercloud-javascript-sdk\/)/g

function walk(dir, files) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(fullPath, files)
    } else if (entry.name.endsWith('.html')) {
      files.push(fullPath)
    }
  }
  return files
}

if (!fs.existsSync(example)) {
  console.error(
    `Missing ${path.relative(process.cwd(), example)}. Docs must be generated before checking source links.`
  )
  process.exit(1)
}

const failures = []
let linkedCount = 0

for (const file of walk(docsDir, [])) {
  const html = fs.readFileSync(file, 'utf8')
  const bad = html.match(unlinkedSource)
  if (bad) {
    failures.push(`${path.relative(docsDir, file)} (${bad.length})`)
  }
  const good = html.match(linkedSource)
  if (good) {
    linkedCount += good.length
  }
}

if (linkedCount === 0) {
  console.error('Docs contain no GitHub source links.')
  process.exit(1)
}

if (failures.length) {
  console.error('Docs source links were not generated:')
  for (const failure of failures) {
    console.error(`  ${failure}`)
  }
  process.exit(1)
}

console.log(`Docs source links ok (${linkedCount} GitHub links).`)
