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

    }
  },
  methods:{
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
    background: #31B9A5;
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
    background: #31B9A5;
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
    color: #31B9A5;
    text-align: center;
    margin-top: 32rpx;
  }
</style>
