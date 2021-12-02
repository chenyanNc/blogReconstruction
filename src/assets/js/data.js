/*********** 存放静态数据 *************/

const menuList = [
    { "name": "网站首页", "route": "/" },
    { "name": "学无止境", "route": "/Article" },
    { "name": "文章归档", "route": "/archive" },
    { "name": "资源分享", "route": "/moments" },
    { "name": "心情随笔", "route": "/myheart" },
    { "name": "关于本站", "route": "/aboutblog" }
]


// 1.vue，2.小程序，3.JavaScript，4.ES6，5.PS，6.Node
const articleType = [
    { vale: 1, name: 'Vue' },
    { vale: 2, name: '小程序' },
    { value: 3, name: 'JavaScript' },
    { value: 4, name: 'ES6' },
    { value: 5, name: 'PS' },
    { value: 6, name: 'Node' }
]

export default {
    menuList: menuList,
    articleType: articleType
}