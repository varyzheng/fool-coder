const { write } = require('./writer/CodeWriter')
const { log } = require('./common/Logger')
const { parse } = require('./parser/ObjectParser')

module.exports = (obj, path) => {
  const config = obj
  log('main thread start')
  log('start parsing data')
  // parse source obj to generate data what used in template
  parse(config)
  log('finish parsing data')
  // read template and generate file
  const rootPath = path.substring(0, path.lastIndexOf('/'))
  log('start writing code, the rootPath is', rootPath)
  const writeFile = (name) => {
    write(`${rootPath}/template/${name}.ejs`, `${rootPath}/build/${config.data}${name}.${config.file || 'code'}`, config)
  }
  log('config', config)
  // write create
  if (config.create) {
    writeFile('Create')
  }
  // write list
  if (config.list) {
    writeFile('List')
  }
  // write detail
  if (config.detail) {
    writeFile('Detail')
  }
  // write update
  if (config.update) {
    writeFile('Update')
  }
  log('Done!')
}
