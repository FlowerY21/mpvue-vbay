<template>
  <div class="common-padding">
    <div class="flex-col vertical-center">
      <p class="price-title common-black-text">使用微贝预订</p>
      <p class="price-num">500VBC</p>
    </div>
    <div class="price-content">
      <p>说明：</p>
      <p> 1、如正常履行预订，所支付的VBC将在到店消费后返还到您账户。</p>
      <p>2、如预订失败，则VBC原数返还到您的账户。</p>
      <p class="red">3、如不能履行预订，则VBC将作为违约金扣除。</p>
    </div>
    <button class="button-class" type="default" @tap="goPage()">预定</button>
  </div>
</template>

<script>
export default {
  name: "checkRecord",
  data() {
    return {}
  },
  methods: {
    goPage() {
      wx.navigateTo({
        url: '../../businessPage/resultRecord/main'
      })
    }
  }
}
</script>

<style scoped>
  .price-title {
    margin-top: 10vh;
    margin-bottom: 30rpx;
  }
  .price-num{
    font-size: 72rpx;
    color: #00B2B2;
    margin-bottom: 60rpx;
  }
  .price-content p{
    font-size: 28rpx;
    color: #666666;
    margin-bottom: 20rpx;
  }
  .price-content .red{
    color: #E7343B;
  }
  .button-class{
    margin-top: 110rpx;
    width: 280rpx;
    height: 80rpx;
    background: #00B2B2;
    color: #ffffff;
    text-align: center;
    line-height: 80rpx;
  }
</style>
