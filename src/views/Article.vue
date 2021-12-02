<template>
  <div class="cy-wrap" style="position: absolute;width: 100%;min-height: 100%;">
    <cyHeader></cyHeader>
    <div class="art-container">
      <Row :gutter="20" class="articleRow" type="flex">
        <i-col :xs="24" :sm="24" :md="24" :lg="18">
          <ul class="single-list">
            <template v-for="(postItem, postIndex) in articleArr">
              <li :key="postIndex" class="single-post">
                <div class="inner-post">
                  <div class="post-img">
                    <img :src="postItem.artImg"/>
                  </div>
                  <div class="post-info">
                    <router-link :to="{path: '/articleDetails', query: {'menuIndex': $route.query.menuIndex}}" class="post-infoTitle">{{postItem.articleTitle}}</router-link>
                    <p class="post-infoText">{{postItem.articleIntroduction}}</p>
                    <div class="post-infoPag">
                      <ul class="blog-meta">
                        <li>
                          <img src="../assets/img/biaoqian.png" style="margin-right: 3px;"/>
                            <template v-for="typeItem in typeArr">
                              <span :key="typeItem.value" v-if="typeItem.value === postItem.type" class="brow" @click="browLable">{{typeItem.name}}</span>
                            </template>
                        </li>
                        <li>
                          <img src="../assets/img/shijian.png" style="margin-right: 2px;"/>
                          <span>{{postItem.issueData}}</span>
                        </li>
                        <li>
                          <img src="../assets/img/liulan.png"/>
                          浏览 (<router-link :to="{path: '/articleDetails', query: {'menuIndex': $route.query.menuIndex}}" class="brow">{{postItem.visitNum}}</router-link>)
                        </li>
                      </ul>
                      <router-link class="post-infoMore" :to="{path: '/articleDetails', query: {'menuIndex': $route.query.menuIndex}}">阅读更多</router-link>
                    </div>
                  </div>
                </div>
              </li>
            </template>
          </ul>
          <div class="page-box"  style="margin-bottom: 30px;">
            <Page
              class-name="card-paging"
              :id="pageId"
              :total="100"
              :current="current"
              :page-size="pageSize"
              :show-elevator="showElevator"
              @on-change="changePages"
            />
            <Button type="success" size="small" @click="goElevatorPage(pageId)" style="margin-left: 25px;">确定</Button>
          </div>
        </i-col>
        <i-col :xs="24" :sm="24" :md="24" :lg="6">
          <div class="card-lmNav">
            <div class="card-search card">
              <Input :search="true" suffix="ios-search" placeholder="Search..." @on-search="changeFunction"/>
            </div>
            <div class="card-section card">
              <h2 class="card-column">栏目分类</h2>
              <ul class="card-content">
                <template v-for="(postItem, postIndex) in postArr">
                  <li :key="postIndex">
                    <span class="card-route" @click="browLable">
                      <p>随笔</p>
                      <span>4</span>
                    </span>
                  </li>
                </template>
              </ul>
            </div>
            <div class="card-section card">
              <h2 class="card-column">热门文章</h2>
              <ul class="card-content hot-content">
                <template v-for="(hotItem, hotIndex) in hotArticleArr">
                  <li class="hotlist" :key="hotIndex">
                    <router-link class="hot-route" :to="{path: '/articleDetails', query: {'menuIndex': $route.query.menuIndex}}">
                      <span class="hotNumber">{{hotItem}}</span>
                      <p>热门文章</p>
                    </router-link>
                  </li>
                </template>
              </ul>
            </div>
            <div class="card-section card">
              <h2 class="card-column">猜你喜欢</h2>
              <ul class="card-content hot-content">
                <template v-for="(postItem, postIndex) in postArr">
                  <li :key="postIndex">
                    <router-link class="hot-like" :to="{path: '/articleDetails', query: {'menuIndex': $route.query.menuIndex}}">
                      <Badge status="success" text="随笔" />
                    </router-link>
                  </li>
                </template>
              </ul>
            </div>
          </div>
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
import componentData from '@/assets/js/data'
export default {
  components: {
    cyHeader,
    cyRabbit,
    cyFoot
  },
  data () {
    return {
      articleArr: [],
      typeArr: [],
      hotArticleArr: [1, 2, 3, 4],
      postArr: [1, 2, 3, 4, 5],
      showElevator: true,
      current: 1,
      pageSize: 5,
      pageId: 'targetpage'
    }
  },
  methods: {
    // 获取文章列表
    getArticle() {
      this.$http.get('/study/list').then((res) => {
        this.articleArr = res.data.data
      })
    },
    changeFunction (event) {
      console.log(event)
    },
    changePages (val) {
      console.log(val)
    },
    // 分页快切换到某一页,增加确定按钮.模拟回车跳转事件
    goElevatorPage (pageId) {
      var evtObj
      var thisPage = document.getElementById(pageId)
      var elevatorDiv = thisPage.getElementsByClassName('ivu-page-options-elevator')
      if (elevatorDiv && elevatorDiv.length > 0) {
        var pageInput = elevatorDiv[0].getElementsByTagName('input')[0]
        if (window.KeyEvent) { // firefox 浏览器下模拟事件
          evtObj = document.createEvent('KeyEvents')
          evtObj.initKeyEvent('keyup', true, true, window, true, false, false, false, 13, 0)
        } else { // chrome 浏览器下模拟事件
          evtObj = document.createEvent('UIEvents')
          evtObj.initUIEvent('keyup', true, true, window, 1)
          delete evtObj.keyCode
          if (typeof evtObj.keyCode === 'undefined') { // 为了模拟keycode
            Object.defineProperty(evtObj, 'keyCode', { value: 13 })
          } else {
            evtObj.key = String.fromCharCode(13)
          }
        }
        pageInput.dispatchEvent(evtObj)
      }
    },
    browLable () {
      console.log('点击分类标签,刷新数据')
    }
  },
  created () {
    this.getArticle()
    this.typeArr = componentData.articleType
  }
}
</script>
<style scoped>
@import url('../assets/css/articlestyle.css');
@import url('../assets/css/media.css');
.blog-meta li{
  margin-right: 10px;
}
.blog-meta li span{
  vertical-align: middle;
}
.hotlist p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

</style>
