const parseClass = (config) => {
  config.basic = config.data
  config.basicPath = config.basicPath
  if (config.create) {
    config.createAPI = config.create.api
    config.createRouter = config.create.router
  }
  if (config.list) {
    config.listAPI = config.list.api
    config.listRouter = config.list.router
  }
  if (config.detail) {
    config.detailAPI = config.detail.api
    config.detailRouter = config.detail.router
  }
  if (config.update) {
    config.updateAPI = config.update.api
    config.updateRouter = config.update.router
  }
}

const parseField = (config) => {
  const { fields } = config
  Object.keys(fields).forEach((key) => {
    const field = fields[key]
    if (field.selector) {
      field.selectValue = field.selector.value
      field.selectText = field.selector.text
      field.selectSource = field.selector.source
    }
    if (field.filter) {
      if (!field.selectValue) {
        field.selectValue = field.filter.value
      }
      if (!field.selectText) {
        field.selectText = field.filter.text
      }
      if (!field.selectSource) {
        field.selectSource = field.filter.source
      }
    }
  })
}

const parse = (config) => {
  parseClass(config)
  parseField(config)
}

module.exports = { parse }
