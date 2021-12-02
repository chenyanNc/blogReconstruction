<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    // console.log(sessionStorage.getItem('store'))
    // 在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
    }
    // 在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
      console.log(JSON.stringify(this.$store.state))
    })
  },
  // 监听路由变化, 跳转页面滚回顶部
  watch: {
    '$route': function (to, from) {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
  /* margin-top: 60px; */
}
html{
  position: relative;
  min-height: 100%;
  background-color: #f9f9f9;
}
body{
  margin: 0;
  padding: 0;
}
img{
  width: 100%;
}
ul{
  list-style: none;
}
a:hover{
  color: #000;
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px
}
/*定义滚动条轨道*/
::-webkit-scrollbar-track {
  background-color: transparent;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  background-color: #0093ff;
  background-image: -webkit-linear-gradient(45deg,rgba(255,255,255,.4) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.4) 50%,rgba(255,255,255,.4) 75%,transparent 75%,transparent);
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
}

.cy-wrap{
  min-width: 950px;
}



</style>
