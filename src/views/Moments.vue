<template>
  <div class="cy-wrap" style="position: absolute;width: 100%;min-height: 100%;">
    <cyHeader></cyHeader>
    <div class="art-container">
      <Row class="articleRow archRow" type="flex">
        <i-col class="arch-card" :xs="24" :sm="24" :md="24" :lg="24">
          <Tabs value="工具" @on-click="clickTab">
             <template v-for="(tabItem, tabIndex) in ['工具', '源码', '插件']">
              <TabPane :label="tabItem" :name="tabItem" :key="tabIndex">
                <Row :gutter="20" type="flex" style="padding-top: 0;">
                  <template v-for="(momentItem, momentIndex) in momentArr">
                    <i-col :key="momentIndex" class="moment-cardList" :xs="24" :sm="24" :md="12" :lg="6">
                      <div class="moment-card">
                        <router-link :to="{path: '/articleDetails', query: {'menuIndex': $route.query.menuIndex}}">
                          <img class="moment-headImg" :src="momentItem.sourceImg"/>
                          <h4 class="moment-title">{{momentArr.title}}</h4>
                        </router-link>
                        <div class="moment-text">
                          <p>{{momentItem.content}}</p>
                        </div>
                        <p class="moment-sort">
                          <Icon type="ios-list" style="font-size: 25px;font-weight: 700;vertical-align: middle;"/>
                          <span>{{momentItem.sourceType}}</span>
                        </p>
                        <div class="moment-cardfoot">
                          <p class="moment-browse">
                            <Icon type="md-eye" style="font-size: 18px;"/>
                            <span>{{momentItem.browse}}</span>
                          </p>
                          <p class="moment-browse">
                            <Icon type="md-heart" style="font-size: 16px;"/>
                            <span>{{momentItem.fabulous}}</span>
                          </p>
                        </div>
                      </div>
                    </i-col>
                  </template>
                </Row>
              </TabPane>
            </template>
          </Tabs>
          <p style="margin: 20px 0;text-align: center;font-size: 14px;color: rebeccapurple;">已经到底了~~~</p>
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
export default {
  components: {
    cyHeader,
    cyRabbit,
    cyFoot
  },
  data () {
    return {
      momentArr: []
    }
  },
  methods: {

    getData() {

      this.$http.get('/share/source').then((res) => {
        this.momentArr = res.data.data
      })


    },

    clickTab (name) {
      console.log(name)
    }
  },
  created () {
    this.getData()
  }
}
</script>
<style scoped>
@import url('../assets/css/articlestyle.css');
@import url('../assets/css/media.css');
</style>
