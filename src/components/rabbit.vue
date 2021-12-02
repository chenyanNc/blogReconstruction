<template>
  <div class="rabbitBox">
    <div class="pulse"></div>
    <div class="pulse-big"></div>
    <img class="dot" src="../assets/img/rabbit.png" @mouseover="shoWelcome" @mouseout="hiddenWelcome"/>
    <p class="welcome" :class="{move: move}">Hi，欢迎来到cy' blog</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      move: false
    }
  },
  methods: {
    shoWelcome () {
      this.move = true
    },
    hiddenWelcome () {
      this.move = false
    }
  }
}
</script>
<style scoped>
@import url('../assets/css/homestyle.css');
@import url('../assets/css/media.css');
.welcome{
  position: relative;
  top: -65px;
  font-size: 14px;
  padding: 10px 15px;
  background-color: #f9c7d5;
  border-radius: 5px;
  color: #fff;
  /* 淡入淡出 */
  opacity: 0;
  right:-100px;
  -webkit-transition: all .5s ease-in;
  -moz-transition: all .5s ease-in;
  transition: all .5s ease-in;
}
.welcome:after{
  content: "";
  border-top: solid 10px #00800000;
  border-left: solid 10px #f9c7d5;
  border-right: solid 5px #00800000;
  border-bottom: solid 10px #00800000;
  position: absolute;
  right: -15px;
  top: 25%;
}
/* 淡入淡出 */
.move{
  opacity: 1;
  right: 85px;
}
</style>
