const { LOG_LINE, LOG_SPACE } = require('./Constants')

const log = (operator, content = '') => {
  const time = new Date().toLocaleString()
  if (content) {
    console.log(`${time}${LOG_SPACE}${operator}${LOG_LINE}\n`, content)
  } else {
    console.log(`${time}${LOG_SPACE}${operator}:`)
  }
}

const error = (operator, content = '') => {
  const time = new Date().toLocaleString()
  if (content) {
    console.error(`${time}${LOG_SPACE}${operator}${LOG_LINE}\n`, content)
  } else {
    console.error(`${time}${LOG_SPACE}${operator}:`)
  }
}

module.exports = { log, error }
