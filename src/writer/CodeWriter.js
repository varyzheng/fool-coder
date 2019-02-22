const fs = require('fs')
const ejs = require('ejs')
const { log, error } = require('../common/Logger')
const { CODE_PRE_DES } = require('../common/Constants')

const write = (template, target, data) => {
  log('start rendering template', template)
  ejs.renderFile(template, data, {}, (err, str) => {
    if (err) {
      error('render template failed', err)
    }
    log('finish rendering template, and start writing file to', target)
    const dir = target.substring(0, target.lastIndexOf('/'))
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }
    // str = str.replace(/&#39;/g, '\'')
    str = str.replace(/fool-coder-script/g, 'script')
    str = CODE_PRE_DES + str
    fs.writeFileSync(target, str)
    log('write success')
  })
}

module.exports = { write }
