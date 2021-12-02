// 引入mockjs

const Mock = require('mockjs');

// 获取 mock.Random 对象

const Random = Mock.Random;


// 首页文字 和 数量和统计
const homeData = function() {
  let data = {
    subhead: '愿你岁月无波澜，敬我余生不悲欢。',
    headline: 'Never give up doing anything you want to do.',
    aboutUs: '当你觉得生活没意思，做什么都提不起兴趣时，说明你已经许久没有做出过改变了。长时间待在舒适区，人难免会慢慢丧失斗志，动起来，做出改变，出去看看世界或者学一项新技能，让自己始终在进步。你要相信，在这个世界上，一定有着另外一个你自己，在做着你不敢做的事，过着你想过的生活。',
    fabulousNum: '105',
    commentNum: '80',
    visitNum: '302',
    runNum: '2097',
  }
  return data;
}





// mock一组数据, 热门文章
const produceNewsData = function() {

    let data = [];

    for (let i = 0; i < 6; i++) {

        let newArticleObject = {
            // id
            id: Random.id(),
            // 图片
            artImg: Random.dataImage('300x250', 'mock的图片'),
            // 作者
            author: Random.cname(),
            // 发布时间
            issueDate: Random.date() + ' ' + Random.time(),
            // 前言
            articleIntroduction: Random.csentence(20, 40)
          }

        data.push(newArticleObject)

    }
    return {
      data
    }

}



// 最近心情
const heartData = function() {

  let data = [];

  for (let i = 0; i < 6; i++) {

      let newArticleObject = {
          // id
          id: Random.id(),
          // 头像
          heartImage: Random.dataImage('50x50', 'mock的图片'),
          // 作者
          author: Random.cname(),
          // 发布时间
          issueDate: Random.date() + ' ' + Random.time(),
          // 引言
          articleIntroduction: Random.csentence(20, 40)
        }

      data.push(newArticleObject)

  }
  return {
    data
  }

}



// 最新资源
let newSource = function() {

  let data = [];

  for (let i = 0; i < 4; i++) {

      let newArticleObject = {
          // id
          id: Random.id(),

          // 背景图
          bgImage: Random.dataImage('250x250', ''),
    
          // 说明
          articleIntroduction: Random.csentence(20, 40)
        }

      data.push(newArticleObject)

  }
  return {
    data
  }

}


// 近期访客
let recentVisitors = function() {
  let data = [];

  for (let i = 0; i < 4; i++) {

      let newArticleObject = {
          // id
          id: Random.id(),

          // 背景图
          headImage: Random.dataImage('50x50', ''),
    
          // 说明
          visitor: Random.cname(5, 20)
        }

      data.push(newArticleObject)

  }
  return {
    data
  }
}



// 学无止境列表 / 热门文章
let studyArtList = function() {

  let data = [];

  for (let i = 0; i < 6; i++) {

      let newArticleObject = {
          // id
          id: Random.id(),
          // 图片
          artImg: Random.dataImage('300x250', 'mock的图片'),
          // 作者
          author: Random.cname(),
          // 发布时间
          issueDate: Random.date() + ' ' + Random.time(),
          // 前言
          articleIntroduction: Random.csentence(80, 150)
        }

      data.push(newArticleObject)

  }
  return {
    data
  }

}


// 资源分享
let shareSource = function () {

  let data = [];

  for (let i = 0; i < 7; i++) {

      let newArticleObject = {
          // id
          id: Random.id(),

          // 图片
          sourceImg: Random.dataImage('300x250', 'mock的图片'),

          // 资源分类
          sourceType: Random.cword(5, 10),

          // 标题
          title: Random.ctitle(10, 30),

          // 内容
          content: Random.csentence(20, 40),

          // 点赞数
          fabulous: Math.random(Math.random()*100),

          // 浏览数(取 0 到 100 随机数)
          browse: Math.random(Math.random()*100)
        }

      data.push(newArticleObject)

  }
  return {
    data
  }

}




// 首页
Mock.mock('/home/info', 'get', homeData);

// 热门文章
Mock.mock('/hotnews/index', 'post', produceNewsData);

// 最近心情
Mock.mock('/heart/list', 'get', heartData)

// 最新资源
Mock.mock('/new/source', 'get', newSource)

// 近期访客
Mock.mock('/recent/vister', recentVisitors)

// 学无止境列表
Mock.mock('/study/list', 'get', studyArtList)

// 资源分享
Mock.mock('/share/source', 'get', shareSource)