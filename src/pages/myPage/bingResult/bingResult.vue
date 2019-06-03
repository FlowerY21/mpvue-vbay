<template>
  <div>
    <div class="my-top flex-col vertical-center">
      <p class="title">绑定成功！</p>
      <p class="progress">资料完整度: 25%</p>
      <progress class="data-percent" :percent="percent" active stroke-width="4" color="#FF9800"/>
      <p class="notice">继续完善资料，赚取更多微贝！</p>
    </div>
    <div class="common-padding">
      <button class="button-class" type="default" @tap="goPage(0)" >完善更多资料</button>
      <p class="step" @tap="goPage(1)">跳过此步骤</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "bindResult",
  data(){
    return{
      percent:25,
      lists:[{
        itemList:[
          //   {
          //   iconImg:'../../../static/images/icon0.png',
          //   name:'付款方式',
          // },
          {
            iconImg:'../../../static/images/icon1.png',
            name:'实名认证',
          },{
            iconImg:'../../../static/images/icon2.png',
            name:'邀请朋友',
          },{
            iconImg:'../../../static/images/icon3.png',
            name:'交易记录',
          },{
            iconImg:'../../../static/images/icon4.png',
            name:'我的活动',
          }]
      },{
        itemList:[{
          name:'反馈',
        },{

          name:'服务条款',
        },{

          name:'隐私政策',
        },{

          name:'关于VBAY',
        }]
      }]
    }
  },
  methods:{
    exit(){},
    goPage(index){
      if(index == 0){
        wx.navigateTo({
          url: '../../myPage/certificationLevelOne/main'
        })
      } else {
        wx.reLaunch({
          url: '../../homePage/home/main'
        })
      }
    }
  }
}
</script>

<style scoped>
  .my-top {
    width: 100%;
    background: #00b2b2;
    padding: 60rpx 0 40rpx;
  }

  .data-percent{
    width: 80%;
  }

  .button-class{
    width: 100%;
    height: 80rpx;
    color: #ffffff;
    line-height: 80rpx;
    text-align: center;
    background: #00b2b2;
    border-radius: 80rpx;
    font-size: 28rpx;
    margin: 60rpx 0 40rpx;
  }
  .title{
    font-size: 56rpx;
    color: #ffffff;
  }
  .progress{
    font-size: 28rpx;
    color: #ffffff;
    margin-top: 58rpx;
    margin-bottom: 10rpx;
  }
  .notice{
    color: #ffffff;
    font-size: 32rpx;
    margin-top: 140rpx;
  }
  .step{
    font-size: 32rpx;
    color: #00b2b2;
    text-align: center;
    margin-top: 32rpx;
  }
</style>
