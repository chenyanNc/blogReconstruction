<template>
  <div class="cy-wrap" style="position: absolute;width: 100%;min-height: 100%;">
    <cyHeader></cyHeader>
    <div class="art-container">
      <Row class="articleRow archRow" type="flex">
        <i-col class="arch-card" :xs="24" :sm="24" :md="24" :lg="24">
          <div class="arch-classify">
            <span>站点统计：</span>
            <span>5个分类</span>
            <span>85篇文章</span>
            <span>共 33条评论</span>
            <span>浏览量：5483</span>
            <span>最后更新：2019年11月23日</span>
          </div>
          <Timeline class="timeLine">
            <TimelineItem color="green">
              <p class="timeTitle">2019-11-29</p>
              <ul class="card-content hot-content">
                <template v-for="(postItem, postIndex) in postArr">
                  <li :key="postIndex" style="padding-left: 0; padding-right: 0;">
                    <router-link class="hot-like timeLink" :to="{path: '/articleDetails', query: {'menuIndex': $route.query.menuIndex}}">
                      <Badge status="success" class="timeDot" text="C语言 【练习】二维数组矩阵转置的实现" />
                    </router-link>
                  </li>
                </template>
              </ul>
            </TimelineItem>
            <TimelineItem color="green"></TimelineItem>
          </Timeline>
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
      postArr: [1, 2, 3]
    }
  },
  created () {
  }
}
</script>
<style scoped>
@import url('../assets/css/articlestyle.css');
@import url('../assets/css/media.css');
</style>
