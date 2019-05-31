<template>
  <div class="detail">
    <div class="top-head" :style="'background: url(' + headImg + ') center/cover no-repeat'"></div>
    <div class="detail-card">
      <div class="activity-title">
        <p>新品试吃活动</p>
      </div>
      <div class="flex-row vertical-center flow-justify activity-item" v-for="(item,index) in itemList" :key="index">
        <div class="flex-row vertical-center">
          <img :src="item.iconUrl" alt="timeIcon" class="time-icon">
          <p class="common-black-text overflow" :class="{'golden-text':index == 3}">{{item.name}}</p>
        </div>
        <img v-if="item.click" src="../../../../static/images/right2.png" alt="rightIcon" class="right-icon">
      </div>
    </div>
    <div class="common-padding">
      <div class="acitvity-img" style="background: url(https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640) center/cover no-repeat"></div>
      <p class="acitvity-text">本次活动，提供各类新鲜美食，欢迎品尝！</p>
        　　
      <div class="acitvity-img" style="background: url(https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640) center/cover no-repeat"></div>
      <div class="acitvity-img" style="background: url(https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640) center/cover no-repeat"></div>
      <div class="acitvity-img" style="background: url(https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640) center/cover no-repeat"></div>
    </div>
    <div class="sign-up">
      <div class="flex-row vertical-center flow-justify common-padding">
        <p class="common-black-text">已报名(5)</p>
        <div class="flex-row vertical-center" @tap="goList()">
          <p class="all">全部报名</p>
          <img src="../../../../static/images/right2.png" alt="rightIcon" class="right-icon">
        </div>
      </div>
      <div class="common-padding flex-row vertical-center">
        <div class="flex-col absolute-center head-list" v-for="(head,index) in headList" :key="index">
          <div class="head-img" :style="'background: url('+head.img+') center/cover no-repeat'"></div>
          <p class="common-black-text">{{head.name}}</p>
        </div>
      </div>
    </div>
    <div class="foot-box flex-row vertical-center flow-justify">
      <div class="flex-row vertical-center around-justify foot-left">
        <div class="flex-col vertical-center">
          <img src="../../../../static/images/share.png" alt="shareIcon" class="foot-icon">
          <p class="foot-name">分享</p>
        </div>
        <div class="flex-col vertical-center">
          <img src="../../../../static/images/star.png" alt="collectIcon" class="foot-icon star-icon">
          <p class="foot-name">收藏</p>
        </div>
      </div>
      <button class="button-class" type="default" @tap="goPage()" >我要报名</button>
    </div>
    <sing-up-alert alertTitle="选择种类" :show="showBack" :alertShow="alertShow"
                   :total="total" @next="nextStep()" @goBack="goBack" @cancel="cancel">
      <div v-if="showBack" class="flex-col sing-next-box">
        <p class="common-black-text">姓名</p>
        <div class="flex-row vertical-center flow-justify">
          <input type="text" class="input-class" v-model="username" placeholder="请输入姓名" placeholder-style="font-size:24rpx;">
          <radio value="1" checked="checked" class="radio-class" /> <span class="common-black-text">匿名</span>
        </div>
        <p class="common-black-text">电话</p>
        <input type="text" class="input-class" v-model="phone" placeholder="请输入电话号码" placeholder-style="font-size:24rpx;">
      </div>
      <div v-else>
        <div class="types-button flex-row vertical-center flow-justify" type="default"  :class="{'on':buttonOn == buttonIndex}"
             @tap="chooseVip(buttonIndex)" v-for="(button,buttonIndex) in buttonList" :key="buttonIndex">
          <p class="common-black-text">{{button.name}}</p>
          <p class="common-black-text golden-text">${{button.price}}</p>
        </div>
        <p class="comment-gray-text">如何成为会员？尊享低价购票</p>
        <div class="types-button no-vip-button flex-row vertical-center flow-justify" type="default" @tap="chooseVip(4)" :class="{'on':buttonOn == 4}">
          <p class="common-black-text">非会员</p>
          <p class="common-black-text golden-text">${{buttonPrice}}</p>
        </div>

        <div class="flex-row vertical-center  num-box">
          <div class="flex-row vertical-center">
            <p class="num-button common-black-text" @tap="del">-</p>
            <input type="number" class="num-input" v-model="num">
            <p class="num-button common-black-text" @tap="add">+</p>
          </div>
          <p class="common-black-text num-text">剩余38张</p>
        </div>
      </div>
    </sing-up-alert>
  </div>
</template>

<script>
  import SingUpAlert from '../../../components/signUpAlert/signUpAlert'
  export default {
    name: "activityDetail",
    data() {
      return {
        headImg: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        itemList:[{
          iconUrl:'../../../static/images/time.png',
          name:'05-14 09:00 至 05-16 19:00',
          click:false,
        },{
          iconUrl:'../../../static/images/position-fill2.png',
          name:'47 Willoughby road, Crows Nest, Sydney47 Willoughby road, Crows Nest, Sydney',
          click:true,
        },{
          iconUrl:'../../../static/images/profile2.png',
          name:'已报名5人 / 不限名额',
          click:false,
        },{
          iconUrl:'../../../static/images/pay.png',
          name:'$0~980',
          click:true,
        }],
        headList:[{
          img:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          name:'赵小花',
        },{
          img:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          name:'赵小花',
        },{
          img:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          name:'赵小花',
        },{
          img:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          name:'赵小花',
        }],
        buttonList:[{
          name:'钻贝会员',
          price:'49'
        },{
          name:'金贝会员',
          price:'49'
        },{
          name:'银贝会员',
          price:'49'
        },],
        showBack:false,
        buttonPrice:'800',
        alertShow:false,
        total:'100',
        num:'1',
        buttonOn:'4',
      }
    },
    components:{
      SingUpAlert
    },
    methods:{
      goList(){
        wx.navigateTo({
          url: '../../businessPage/signUpList/main'
        })
      },
      chooseVip(index){
        this.buttonOn = index
      },
      goPage(){
        this.alertShow = true;
      },
      goBack(){
        this.showBack = false;
      },
      cancel(){
        this.alertShow = false;
        this.showBack = false;
      },
      nextStep(){
        if(this.showBack){
          wx.navigateTo({
            url: '../../businessPage/payType/main?type=2'
          })
        }
        this.showBack = true;
      },
      add(){
        console.log(1);
        this.num++;
      },
      del(){
        console.log(1)
        if(this.num == 0){
          return;
        }
        this.num--;
      }
    }
  }
</script>

<style scoped>
  .detail{
    padding-bottom: 100rpx;
  }
  .top-head {
    width: 100%;
    height: 316rpx;
  }
  .detail-card{
    width:100%;
    background:#ffffff;
    box-sizing: border-box;
    padding: 80rpx 10rpx 30rpx;
    position: relative;
    margin-bottom: 30rpx;
  }
  .activity-title{
    width: calc(100% - 20rpx);
    padding: 40rpx 20rpx 10rpx;
    background: #ffffff;
    border-radius: 20rpx 20rpx 0 0;
    border: 2rpx solid #dddddd;
    border-bottom: none;
    box-sizing: border-box;
    top: -40rpx;
    position: absolute;
    box-shadow: 0rpx -2rpx 0rpx 0rpx;
  }
  .right-icon{
    width: 32rpx;
    height: 32rpx;
  }
  .time-icon{
    width: 34rpx;
    height: 34rpx;
    margin-right: 10rpx;
  }
  .activity-item{
    margin-top: 24rpx;
    padding: 0 20rpx;
  }
  .activity-item p{
    width: 80vw;
  }
  .acitvity-img{
    width: 100%;
    height: 300rpx;
    margin: 20rpx 0;
  }
  .acitvity-text{
    color:#101010;
    font-size: 32rpx;
    text-indent: 2em;
  }
  .all{
    font-size: 28rpx;
    color: #59A0FF;
  }
  .head-img{
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;

  }
  .head-list{
    margin-right: 40rpx;
    margin-top: 20rpx;
  }
  .head-list:last-child{
    margin-right: 0;
  }
  .sign-up{
    width: 100%;
    background: #ffffff;
    padding: 24rpx 0;
  }
  .button-class{
    width: 70%;
    height: 100%;
    background: #59A0FF;
    text-align: center;
    color: #ffffff;
    line-height: 90rpx;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
  }
  .foot-name{
    font-size: 24rpx;
    color: #101010;
  }
  .foot-icon{
    width: 40rpx;
    height: 40rpx;
  }

  .foot-box{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 90rpx;
    background: #ffffff;
  }
  .foot-left{
    width: 30%;
  }
  .star-icon{
    width: 55rpx;
  }
  .types-button{
    width: 100%;
    height: 80rpx;
    margin: 10rpx 0;
    padding-left:14px;
    padding-right:14px;
    box-sizing:border-box;
    font-size:18px;
    border-radius:5px;
    color:#000000;
    background-color:#F8F8F8;
    border: 2rpx solid #dddddd;
  }
  .types-button.on{
    background: #00D2FF;
    border-color: #45ABFF;
  }
  .types-button.on .common-black-text,
  .types-button.on .golden-text{
    color: #ffffff;
  }
  .no-vip-button{
    margin: 40rpx 0;
  }
  .num-button{
    width: 50rpx;
    height: 50rpx;
    border: 2rpx solid #dddddd;
    text-align: center;
    line-height: 50rpx;
  }
  .num-input{
    width: 120rpx;
    height: 50rpx;
    text-align: center;
  }
  .num-box{
    margin-bottom: 30rpx;
  }
  .num-text{
    margin-left: 20rpx;
  }
  .input-class{
    width: 75%;
    height: 60rpx;
    border: 2rpx solid #dddddd;
    margin: 10rpx 0;
    padding-left: 20rpx;
  }
  .radio-class{
    /*width: 20rpx;*/
    /*height: 20rpx;*/
  }
  .sing-next-box{
    padding-bottom: 30rpx;
  }
</style>
