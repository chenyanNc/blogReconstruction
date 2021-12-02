<template>
  <div class="cy-wrap" style="position: absolute;width: 100%;min-height: 100%;">
    <cyHeader></cyHeader>
    <div class="art-container">
      <Row class="articleRow archRow" type="flex">
        <i-col class="arch-card" :xs="24" :sm="24" :md="24" :lg="24">
          <p class="details-title">关于本站</p>
        </i-col>
      </Row>
    </div>
    <BackTop :bottom="Number(80)" :duration="Number(2000)"></BackTop>
    <cyRabbit></cyRabbit>
    <cyFoot></cyFoot>
  </div>
</template>
<script>
import cyHeader from '../components/Header'
import cyRabbit from '../components/rabbit'
import cyFoot from '../components/Foot'
import store from '../store'
export default {
  components: {
    cyHeader,
    cyRabbit,
    cyFoot
  },
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
  }
}
</script>
<style scoped>
@import url('../assets/css/articlestyle.css');
@import url('../assets/css/media.css');
.arch-card{
  background: transparent;
  box-shadow: none;
}
</style>
