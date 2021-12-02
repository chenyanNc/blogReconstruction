import Vue from 'vue'
import Router from 'vue-router'
// 网站首页
import HelloWorld from '@/components/HelloWorld'
// 学无止境
import Article from '@/views/Article'
// 文章归档
import Archive from '@/views/Archive'
// 文章详情页
import ArticleDetails from '@/views/ArticleDetails'
// 资源分享
import Moments from '@/views/Moments'
// 心情随笔
import Myheart from '@/views/Myheart'

// 关于本站
import Aboutblog from '@/views/Aboutblog'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/article',
            name: 'Article',
            component: Article
        },
        {
            path: '/archive',
            name: 'Archive',
            component: Archive
        },
        {
            path: '/articleDetails',
            name: 'ArticleDetails',
            component: ArticleDetails
        },
        {
            path: '/moments',
            name: 'Moments',
            component: Moments
        },
        {
            path: '/myheart',
            name: 'Myheart',
            component: Myheart
        },
        {
            path: '/aboutblog',
            name: 'Aboutblog',
            component: Aboutblog
        }
    ]
})