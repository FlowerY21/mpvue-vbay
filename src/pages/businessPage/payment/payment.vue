<template>
  <div>
    <div class="pay-num flex-col absolute-center">
      <input class="pay-num-input" placeholder="输入金额" placeholder-class="input-class" auto-focus/>
      <p class="pay-num-msg">AUD</p>
    </div>
    <div class="flex-row vertical-center flow-justify back-gray common-padding">
      <img src="../../../../static/images/locked.png" alt="lockedIcon" class="locked-icon">
      <div class="flex-row vertical-center flow-justify gray-right">
        <div class="flex-col">
          <p class="pay-vip-title">VBC 抵消额度</p>
          <p class="pay-vip-msg">银贝: 5%   金贝: 10%   钻贝: 15%</p>
        </div>
        <img src="../../../../static/images/right.png" alt="rightIcon" class="right-icon">
      </div>
    </div>
    <div class="common-padding">

    </div>
  </div>
</template>

<script>
  export default {
    name: "payment",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  .pay-num {
    width: 100%;
    height: 280rpx;
    background: #00B2B2;
  }

  .pay-num-input {
    width: 80%;
    height: 100rpx;
    -webkit-border-radius: 100rpx;
    -moz-border-radius: 100rpx;
    border-radius: 100rpx;
    background: #ffffff;
    font-size: 36rpx;
    color: #00B2B2;
    line-height: 100rpx;
    padding-left: 30rpx;
    margin-bottom: 20rpx;
  }
  .pay-num-msg{
    font-size: 32rpx;
    color: #FFFFFF;
  }
  .input-class{
    color: #00B2B2;
  }
  .back-gray{
    background: #f5f5f5;
    padding-top: 20rpx;
    padding-bottom: 20rpx;
  }
  .locked-icon{
    width: 44rpx;
    height: 44rpx;
  }
  .pay-vip-title{
    font-size: 28rpx;
    color: #000000;
  }
  .pay-vip-msg{
    font-size: 28rpx;
    color: #AEAEAE;
  }
  .right-icon{
    width: 50rpx;
    height: 50rpx;
  }
  .gray-right{
    width: calc(100% - 44rpx - 30rpx);
  }
</style>
