<template>
  <div class="common-padding">
    <div class="flex-col vertical-center notice-container">
      <p class="notice-title">提交成功！</p>
      <p class="notice-title">了解预订状态，请查看预订记录</p>
      <div class="notice-box flex-col vertical-center">
        <p class="record-title">预订信息</p>
        <p class="record-msg">2人，5月15日，12:00</p>
        <p class="record-text">本次预订使用微贝</p>
        <p class="record-num">500VBC</p>
      </div>
      <div class="flex-row vertical-center flow-justify button-box">
        <button class="button-class" type="default" @tap="goPage(0)">预定记录</button>
        <button class="button-class" type="default" @tap="goPage(1)">返回商家</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "resultRecord",
  data(){
    return{

    }
  },
  methods:{
    goPage(id){
      if (id == 0) {
        wx.navigateTo({
          url: '../../businessPage/reservationRecord/main'
        })
      } else {
        wx.redirectTo({
          url: '../../businessPage/business/main'
        })
      }
    }
  }
}
</script>

<style scoped>
  .button-class{
    width: 280rpx;
    height: 80rpx;
    background: #31B9A5;
    color: #ffffff;
    text-align: center;
    line-height: 80rpx;
  }
  .notice-container{
    padding-top: 10vh;
  }
  .notice-title{
    font-size: 40rpx;
    color: #31B9A5;
    margin-bottom: 30rpx;
  }
  .notice-box{
    width: 100%;
    background: #F5F5F5;
    border-radius: 10rpx;
    padding: 60rpx 0;
    margin: 60rpx 0;
  }
  .record-title{
    font-size: 24rpx;
    color: #666666;
  }
  .record-msg{
    font-size: 40rpx;
    color: #101010;
    margin: 10rpx 0 50rpx;
  }
  .record-text{
    font-size: 24rpx;
    color: #101010;
    margin-bottom: 20rpx;
  }
  .record-num{
    font-size: 72rpx;
    color: #101010;
  }
  .button-box{
    width: 100%;
  }
</style>
