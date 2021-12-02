<template>
  <div class="cy-recent">
    <h3 class="tittle-wthree">最近心情</h3>
    <div class="recentSwiper wow zoomIn 3s delay-.5s">
      <div class="swiperOption">
        <swiper :options="swiperOption">
          <template v-for="(moodItem, moodIndex) in moodArr">
            <swiper-slide class="demo-carousel" :key="moodIndex" style="height: 260px;">
              <div class="messageInfo">
                <div class="messText">
                  <Icon type="ios-quote" class="symbol" />
                  引言：{{moodItem.articleIntroduction}}
                </div>
                <div class="userBox">
                  <Avatar class="headImg" :src="moodItem.heartImage" />
                  <span>{{moodItem.author}}</span>
                </div>
              </div>
            </swiper-slide>
          </template>
        </swiper>
        <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
      </div>
    </div>
    <div class="messageNumber">
      <div class="coverBg" style="background-color: rgba(0,0,0,0.75);padding: 80px 0 60px 0;display: flex;justify-content: center;">
      <Row :gutter="50" class="numberRow wow fadeInLeft delay-.5s" type="flex">
        <i-col class="articleCol numberCol" :xs="12" :sm="12" :md="6" :lg="6">
          <Icon class="dotIcon" type="ios-thumbs-up-outline" />
          <countTo class="dotNumber" :startVal="startVal" :endVal="Number(dataInfo.fabulousNum)" :duration="8000" separator="">{{dataInfo.fabulousNum}}</countTo>
          <p class="dotText">网站点赞数量</p>
        </i-col>
        <i-col class="articleCol numberCol" :xs="12" :sm="12" :md="6" :lg="6">
          <Icon class="dotIcon" type="ios-chatbubbles-outline" />
          <countTo class="dotNumber" :startVal="startVal" :endVal="Number(dataInfo.commentNum)" :duration="8000" separator="">{{dataInfo.commentNum}}</countTo>
          <p class="dotText">用户评论数量</p>
        </i-col>
        <i-col class="articleCol numberCol" :xs="12" :sm="12" :md="6" :lg="6">
          <Icon class="dotIcon" type="ios-desktop-outline" />
          <countTo class="dotNumber" :startVal="startVal" :endVal="Number(dataInfo.visitNum)" :duration="8000" separator="">{{dataInfo.visitNum}}</countTo>
          <p class="dotText">网站访问次数</p>
        </i-col>
        <i-col class="articleCol numberCol" :xs="12" :sm="12" :md="6" :lg="6">
          <Icon class="dotIcon" type="md-calendar" />
          <countTo class="dotNumber" :startVal="startVal" :endVal="Number(dataInfo.runNum)" :duration="8000" separator="">{{dataInfo.runNum}}</countTo>
          <p class="dotText">网站运行天数</p>
        </i-col>
      </Row>
      </div>
    </div>
  </div>
</template>
<script>
import {WOW} from 'wowjs'
import countTo from 'vue-count-to'
export default {
  components: {
    countTo
  },
  props: {
    dataInfo: Object
  },
  data () {
    return {
      screenWidth: document.body.clientWidth,
      startVal: 0,
      swiperOption: {
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: false
        },
        effect: 'coverflow',
        slidesPerView: 3,
        centeredSlides : true,// 设置Active Slide居中后
        centeredSlidesBounds: true, // 当设置了Active Slide居中后，设置此参数，使得第一个和最后一个Slide 始终贴合边缘
        coverflowEffect: {
          rotate: 30,
          stretch: 5,
          depth: 60,
          modifier: 2,
          slideShadows: false
        }
      },
      swiperOption2: {
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination2',
          clickable: false
        }
      },
      moodArr: [],
    }
  },
  methods: {
    getMood () {
      this.$http.get('/heart/list').then((res) => {
        this.moodArr = res.data.data
        console.log(res)
      })
    }
  },
  created() {
    this.getMood()
  },
  watch: {
    swiperArr () {
      // 在dom渲染完后,再执行动画
      this.$nextTick(() => {
        var wow = new WOW({
          live: false
        })
        wow.init()
      })
    }
  }
}
</script>
<style scoped>
@import url('../../assets/css/homestyle.css');
@import url('../../assets/css/media.css');
.cy-recent /deep/ .swiper-pagination-bullet{
  margin: 0 10px;
}
.dotNumber{
  display: block;
}
.messageInfo{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
