<template>
  <div>
    <div class="cy-hotBox">
      <div class="cy-comment">
        <h1>最新资源</h1>
        <Row :gutter="50" class="commentRow wow fadeInRight delay-.5s" type="flex">
          <template v-for="(commentItem, commentIndex) in commentUser">
            <i-col :key="commentIndex" class="articleCol commentCol" :xs="12" :sm="12" :md="6" :lg="6">
              <div class="picture" :style="{backgroundImage:'url(' + commentItem.bgImage + ')'}">
                <div class="bgText">{{commentItem.articleIntroduction}}</div>
              </div>
            </i-col>
          </template>
        </Row>
      </div>
    </div>
    <div>
      <div class="cy-comment">
        <h1>近期访客</h1>
        <div class="swiperOption wow flipInX">
          <swiper :options="swiperOption3" style="margin-bottom: 15px;">
            <template v-for="(swiperItem, swiperIndex) in recentSwiperArr">
              <swiper-slide class="recent-carousel" :key="swiperIndex">
                <div class="recentMessage">
                  <div class="recentUser">
                    <Avatar class="recentHead" :src="swiperItem.headImage" />
                    <span class="recentName">{{swiperItem.visitor}}</span>
                  </div>
                </div>
              </swiper-slide>
            </template>
          </swiper>
          <div class="swiper-pagination swiper-pagination-bullets swiper-pagination3"  slot="pagination"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {WOW} from 'wowjs'
export default {
  data () {
    return {
      recentSwiperArr: [],
      commentUser: [],
      swiperOption3: {
        loop: true,
        autoplay: true,
        slidesPerView: 10,
        pagination: {
          el: '.swiper-pagination3',
          clickable: false,
          dynamicBullets: true
        }
      }
    }
  },
  methods: {
    // 最新资源
    getSource() {
      this.$http.get('/new/source').then((res) => {
        this.commentUser = res.data.data
        console.log(this.commentUser)
      })
    },

    // 近期访客
    recentVisitor() {
      this.$http.get('/recent/vister').then((res) => {
        this.recentSwiperArr = res.data.data
      })
    }
  },
  mounted () {
    this.getSource();
    this.recentVisitor();
  },
  watch: {
    commentUser () {
      console.log('进来了')
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
.commentRow{
  margin-top: 0;
}
.commentImg{
  width: 120px;
  overflow: hidden;
  height: 100%;
  position: absolute;
}

/* 触摸放大图片动画 */
.picture:hover{
  transform: rotate(-30deg);
}

.picture{
  width: 100%;
  transition-duration: 1s;
  transition: all .4s;
  display: flex;
  flex-direction: column-reverse;
  background-image: url("../../assets/img/test.jpg"); 
  background-size: cover;
  box-shadow: 5px 5px 5px #adadad;
  border-radius: 10px
}

.bgText{
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  height: 50%;
  overflow: hidden;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  text-align: left;
  font-size: 14px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

/* 控制显示2行, 超出部分省略号 */
/* .detailText{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
} */
.articleCol {
  height: 250px;
  display: flex;
  justify-content: center;
}

</style>
