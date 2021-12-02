<template>
<div class="cy-wrap">
  <header>
    <Affix>
      <cyHeader></cyHeader>
    </Affix>
  </header>
  <div class="container" style="padding-bottom: 35px;">
    <sectionOne :dataInfo="dataInfo"></sectionOne>
    <aboutUs :dataInfo="dataInfo"></aboutUs>
    <cyRecebt :dataInfo="dataInfo"></cyRecebt>
    <hotComment></hotComment>
    <cyFoot></cyFoot>
  </div>
  <BackTop :bottom="Number(80)" :duration="Number(2000)"></BackTop>
  <cyRabbit></cyRabbit>
  <footer></footer>
</div>
</template>
<script>
import cyHeader from './Header'
import sectionOne from './homeassembly/Sectionone'
import aboutUs from './homeassembly/aboutUs'
import cyRecebt from './homeassembly/Recentmessage'
import hotComment from './homeassembly/Hotcomment'
import cyRabbit from './rabbit'
import cyFoot from './Foot'
export default {
  components: {
    cyHeader,
    sectionOne,
    aboutUs,
    cyRecebt,
    hotComment,
    cyFoot,
    cyRabbit
  },
  data () {
    return {
      dataInfo: {}
    }
  },
  methods: {
    // 获取首页基本展示信息
    getMenu () {
      this.$http.get('/home/info').then((res) => {
        this.dataInfo = res.data
        console.log(res)
      })
      // requestApi(APILIST.GETHOMEINFO, 'get').then((response) => {
      //   this.dataInfo = response.data[0]
      // })
    }
  },
  created () {
    this.getMenu()
  }
}
</script>
<style scoped>
@import url('../assets/css/homestyle.css');
@import url('../assets/css/media.css');
</style>
