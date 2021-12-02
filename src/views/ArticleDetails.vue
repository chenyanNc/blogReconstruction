<template>
  <div class="cy-wrap" style="position: absolute;width: 100%;min-height: 100%;">
    <cyHeader></cyHeader>
    <div class="art-container">
      <Row class="articleRow archRow" type="flex">
        <i-col class="arch-card" :xs="24" :sm="24" :md="24" :lg="24">
          <div class="details-head">
            <h1 class="details-title">C语言 【练习】二维数组矩阵转置的实现</h1>
            <div class="details-Record">
              <p class="">C语言</p>
              <p class="">南辞</p>
              <p class="">2019-11-23 16:15:59</p>
              <p class="">15次</p>
              <p class="">0条</p>
              <p class="">2</p>
            </div>
          </div>
          <div class="detail-conent">
            <img src="../assets/img/detail.jpg" style="width: 100%;"/>
            <img src="../assets/img/detail.jpg" style="width: 100%;"/>
          </div>
          <div class="detail-support">
            <p class="suppot-heart">
              <span>如果喜欢就留下你的小心心吧&nbsp;</span>
              <img src="../assets/img/heart.png" />
            </p>
            <p class="suppot-btn" :class="{addBtn: addBtn}" @click="addLike">
              LIKE | 2
            </p>
          </div>
        </i-col>
        <i-col class="arch-card" :xs="24" :sm="24" :md="24" :lg="24" style="padding: 10px 20px;">
          <div class="detail-next">
            上一篇：
            <router-link class="preArticl" to="/">C语言 【练习】二维数组矩阵转置的实现</router-link>
          </div>
          <div class="detail-next">
            下一篇：
            <router-link class="preArticl" to="/">C语言 【练习】二维数组矩阵转置的实现</router-link>
          </div>
        </i-col>
        <i-col class="arch-card" :xs="24" :sm="24" :md="24" :lg="24" style="text-align: center;">
          <h1 class="textarea-title">评论区</h1>
          <i-input type="textarea" :rows="6" :autosize="autosize" placeholder="快来留下你的评论吧..."></i-input>
          <i-button type="info" class="submitBtn">提交</i-button>
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
      addBtn: false,
      autosize: { minRows: 6, maxRows: 6 }
    }
  },
  methods: {
    addLike () {
      this.addBtn = !this.addBtn
    }
  },
  created () {
  }
}
</script>
<style scoped>
@import url('../assets/css/articlestyle.css');
@import url('../assets/css/media.css');
.details-title{
  font: 22px "Microsoft YaHei",Arial,Helvetica,sans-serif;
  color: #000;
  font-weight: bold;
  text-align: center;
}
.details-head{
  padding-bottom: 10px;
  border-bottom: 1px solid #e6e6e6;
}
.details-Record{
  margin-top: 20px;
  color: #808080;
  text-align: center;
  display: flex;
  justify-content: center;
  font-size: 14px;
}
.details-Record p{
  margin: 0 5px;
}
.detail-conent{
  padding: 20px 0;
  margin-bottom: 30px;
}
.suppot-heart{
  display: flex;
  justify-content: center;
  font-size: 16px;
  padding: 0 30px;
  margin-bottom: 15px;
  min-height: 24px;
  font-weight: 700;
  color: #969696;
}
.suppot-heart img{
  width: 20px;
  height: 18px;
  margin-top: 3px;
}
.suppot-btn{
  text-align: center;
  background: #ea6f5a;
  width: 100px;
  margin: auto;
  font-size: 15px;
  padding: 10px 0;
  border-radius: 30px;
  color: #fff;
}
.addBtn{
  background: #66beff ;
  color: #fff;
}
.detail-next{
  padding-left: 20px;
  font-size: 14px;
}
.detail-next{
  color: #333;
  margin: 5px 0;
}
.textarea-title{
  text-align: center;
  font-size: 28px;
  margin-bottom: 10px;
}
.submitBtn{
  margin: 20px 0 10px 0;
  width: 40%;
  background: #5fb878;
  border-color: #5fb878;
  height: 40px;
  font-size: 16px;
}
.arch-card >>> .ivu-input{
  font-size: 14px;
}
.arch-card >>> .ivu-input:hover {
  border-color: #5fb878 !important;
}
.arch-card >>> .ivu-input:focus{
  border-color: #5fb878 !important;
  box-shadow: none;
}
.preArticl{
  color: #333;
}
.preArticl:hover{
  color: #777;
  text-decoration: underline;
}
</style>
