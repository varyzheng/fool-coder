const log = require('./src/common/Logger')

log('fool-coder start running')
const path = process.argv[2]
log('load the data source', path)
const obj = require(path)
log('loaded, the data source is', obj)
