const fs = require('fs')
const ejs = require('ejs')
const { log, error } = require('../common/Logger')

const write = (template, target, data) => {
  ejs.renderFile(template, data, {}, (err, str) => {
    if (err) {
      error('render template failed', err)
    }
    log('render template finished, start writing file to', target)
    fs.writeFileSync(target, str)
    log('write success')
  })
}

module.exports = { write }
