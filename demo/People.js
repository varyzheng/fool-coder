const User = {
  data: 'user',
  basicPath: '/basic/path',
  create: { api: '/v1/user/create', router: 'userCreate' },
  list: { api: '/v1/user/list', router: 'userList' },
  detail: { api: '/v1/user/detail', router: 'userDetail' },
  update: { api: '/v1/user/update', router: 'userUpdate' },
  fields: {
    id: {
      type: 'number', title: '编号', primary: true, inDetail: { cannotEdit: true },
    },
    name: {
      title: '姓名', inTable: {}, inDetail: {}, filter: { source: '/v1/user/suggest', value: 'id', text: 'name' },
    },
    city: {
      type: 'number', key: 'city_code', title: '城市', inDetail: {}, selector: { value: 'city_code', text: 'city_name', source: '/v1/city/suggest' }, filter: {},
    },
    cityDisplay: { key: 'city_display', title: '城市', inTable: {} },
    createAt: {
      type: 'date', key: 'create_at', title: '注册时间', inTable: {}, inDetail: { cannotEdit: true }, selector: {},
    },
    operation: { key: 'operation', title: '操作', inTable: { needRender: true } },
  },
}

module.exports = User
