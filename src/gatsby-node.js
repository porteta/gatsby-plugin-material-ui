const fs = require('fs')
const path = require('path')
const os = require('os')

// Write out a theme module to .cache.

exports.sourceNodes = ({ store }, pluginOptions) => {
  const program = store.getState().program

  let module
  if (pluginOptions.pathToTheme) {
    module = `module.exports = require("${path.join(
      program.directory,
      pluginOptions.pathToTheme
    )}")`
    if (os.platform() === 'win32') {
      module = module.split('\\').join('\\\\')
    }
  } else {
    module = `const styles = require('material-ui/styles')
const theme = styles.createMuiTheme()
module.exports = theme`
  }

  const dir = `${__dirname}/.cache`

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }

  fs.writeFileSync(`${dir}/theme.js`, module)
}
