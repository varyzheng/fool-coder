# fool-coder
vue，react代码生成器，基于node和ejs模板引擎，根据领域对象和一套通用模板生成通用的CRUD代码，减少重复的复制粘贴。

## 字段说明
```js
const User = {
  file: 'vue',
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
    birthday: {
      type: 'date', key: 'birthday', title: '出生日期', inTable: {}, inDetail: {}, selector: {},
    },
    operation: { key: 'operation', title: '操作', inTable: { needRender: true } },
  },
}
```
### 类的描述字段
* data: 对应的结构体名称，或表名简称
* basicPath: 基础路由
* create: 新增的api地址以及页面路由名称，对应api和router，下同
* list: 列表的api地址以及页面路由名称
* detail: 详情的api地址以及页面路由名称
* update: 更新的api地址以及页面路由名称
* fields: 对象的属性列表

### 属性的描述字段

* key: 对应后端接口的字段名，默认值与属性名相同，可省略。
* type: 数据类型，默认为字符串，可省略。
* title: 在列表中或详情页中的Label名称，字段的含义，默认值为''。
* inTable: 在列表中展示此项，inTable.needRender表示此项的值需要复杂操作，渲染成一个空的render函数，附加TODO标识。
* inDetail: 在详情中展示此项，inDetail.cannotEdit设置此项是否可以新增和修改，默认inDetail的项都可以新增和修改。
* selector: 表示该字段不是文本输入，而是选择框，source表示各选项的数据源，即api地址，value表示每一个选项的值，text表示每一个选项的展示文字，自动识别date类型，渲染日期选择器。
* filter: 表示该字段可以在列表中作为查询条件，参数与selector相同且公用。

***重点：另外还有primary，是主键字段，inTable会自动变成超链接，跳转到对应的详情页面，并且inDetail.cannotEdit自动设为true***
