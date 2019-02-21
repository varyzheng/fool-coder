const { log } = require('./common/Logger')
const { parse } = require('./parser/ObjectParser')

module.exports = (obj) => {
  const config = obj
  log('main thread start')
  log('start parsing data')
  // parse source obj to generate data what used in template
  parse(config)
  log('finish parsing data', config)
  // read template and generate file
}
