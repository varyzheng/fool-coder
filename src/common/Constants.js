const project = require('../../package.json')

const Constants = {
  LOG_SPACE: '    ',
  LOG_LINE: '--------------------->>',
  CODE_PRE_DES: `/* Created by ${project.name}_${project.version} at ${new Date().toLocaleString()}, and now it's your turn. */\n`,
}
module.exports = Constants
