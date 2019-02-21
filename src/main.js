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
  // write create
  if (config.create) {
    write(`${rootPath}/${config.data}Create.ejs`, `${rootPath}/build/${config.data}Create.fcode`, config)
  }
  // write list
  if (config.list) {
    write(`${rootPath}/${config.data}List.ejs`, `${rootPath}/build/${config.data}List.fcode`, config)
  }
  // write detail
  if (config.detail) {
    write(`${rootPath}/${config.data}Detail.ejs`, `${rootPath}/build/${config.data}Detail.fcode`, config)
  }
  // write update
  if (config.update) {
    write(`${rootPath}/${config.data}Update.ejs`, `${rootPath}/build/${config.data}Update.fcode`, config)
  }
  log('Done!')
}
