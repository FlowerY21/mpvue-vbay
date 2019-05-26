<template>
  <div>
    <div class="vip-head flex-col vertical-center">
      <p v-if="percent == 0" class="vip-title">您还不是会员</p>
      <div v-else class="flex-col vertical-center">
        <img class="vip-head-icon" src="../../../static/images/vipIcon0.png" alt="vipIcon">
        <p class="vip-title">金贝会员</p>
        <p class="vip-num">No.236908568</p>
        <p class="vip-content">您在此店累计消费了：3456AUD</p>
      </div>
    </div>
    <div class="vip-progress">
      <progress :percent="percent" color="#00B2B2"/>
      <div class="progress-content flex-row vertical-center flow-justify">
        <div class="progress-text">
          <p class="progress-text-name">银贝</p>
          <p class="gray">消费满</p>
          <p class="gray">免费</p>
        </div>
        <div class="progress-text">
          <p class="progress-text-name">金贝</p>
          <p class="gray">消费满</p>
          <p class="gray">3000AUD</p>
        </div>
        <div class="progress-text">
          <p class="progress-text-name">钻贝</p>
          <p class="gray">消费满</p>
          <p class="gray">5000AUD</p>
        </div>
      </div>
    </div>
    <div>
      <button v-if="percent == 0" type="default"  bindtap="default" class="percent-button">申请成为会员</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "vipWrap",
  data(){
    return{
      percent:0
    }
  }
}
</script>

<style scoped>
  .vip-head-icon {
    width: 100rpx;
    height: 78rpx;
    margin-bottom: 30rpx;
  }

  .vip-title {
    font-size: 40rpx;
    color: #222222;
    margin-bottom: 10rpx;
  }
  .vip-num{
    font-size: 28rpx;
    color: #222222;
    margin-bottom: 10rpx;
  }
  .vip-content{
    font-size: 24rpx;
    color: #9a9a9a;
  }
  .vip-progress{
    margin: 20rpx 0;
  }
  .progress-text-name{
    font-size: 24rpx;
    color: #222222;
    margin-top: 10rpx;
  }
  .gray{
    font-size: 24rpx;
    color: #9a9a9a;
  }
  .progress-text{
    text-align: center;
  }
  .progress-text:first-child{
    text-align: left;
  }
  .progress-text:last-child{
    text-align: right;
  }
  .vip-progress{
    margin-bottom: 40rpx;
  }
  .percent-button{
    width: 100%;
    height: 100rpx;
    background: #00B2B2;
    color: #ffffff;
    text-align: center;
    line-height: 100rpx;
    margin-bottom: 50rpx;
  }
</style>
