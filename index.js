const { log } = require('./src/common/Logger')
const start = require('./src/main.js')

log('fool-coder start running')
const path = process.argv[2]
log('load the data source', path)
const obj = require(path)

if (obj) {
  start(obj, path)
}
