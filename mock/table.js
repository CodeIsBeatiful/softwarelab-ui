import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    'author|1': ['black', 'star'],
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

export default [
  {
    url: '/softwarelab-ui/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
