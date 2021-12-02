<template>
  <div class="sectionOne" :style="{'height': Height + 'px'}">
    <div class="coverBg">
    </div>
    <div class="centerTitle">
      <p class="keepOn">{{dataInfo.subhead}}</p>
      <h1 style="margin-bottom: 20px;">{{dataInfo.headline}}</h1>
      <span @click="showAbout">Let's Go</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dataInfo: Object
  },
  data () {
    return {
      Height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
  },
  methods: {
    // 设置锚点
    showAbout () {
      document.getElementById('abuotUs').scrollIntoView()
    }
  }
}
</script>
<style scoped>
@import url('../../assets/css/homestyle.css');
@import url('../../assets/css/media.css');
</style>
