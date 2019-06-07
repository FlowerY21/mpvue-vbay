<template>
  <div>
    <div class="over-top flex-col vertical-center common-padding">
      <p class="title">VBC 余额</p>
      <p class="price-title">{{vbcTotal}}</p>
      <p class="notice-msg">{{vbcTotal / 10}} AUD</p>
      <p class="notice-price">1 VBC =  0.1 AUD</p>
    </div>
    <div class="common-padding over-bottom flex-col">
      <div class="input-box">
        <p>转账给：</p>
        <input placeholder="@VbayUserName" class="common-class"/>
      </div>
      <div class="input-box">
        <p>金额：</p>
        <input placeholder="0 VBC" class="common-class"/>
        <P class="notice">可用余额: 16500VBC ( 1650AUD )</P>
      </div>
      <button class="button-class" type="default" @tap="goPage()" >确认</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "wallet",
  data(){
    return{
      vbcTotal:'',
    }
  },
  mounted(){
    const _this = this;
    _this.getVBC();
  },
  methods:{
    goPage(){
      wx.navigateTo({
        url: '../../businessPage/donation/main'
      })
    },
    async getVBC(){
      const _this = this;
      const result = await _this.$api.getVBC();
      console.log('getVBC',result.code);
      if (result.code == 200) {
        _this.vbcTotal = result.result;
      }

    }
  }
}
</script>

<style scoped>
  .input-box{
    margin-top: 50rpx;
  }
  .price-title{
    font-size: 96rpx;
    color: #ffffff;
  }
  .over-top {
    width: 100%;
    background: #32B9A6;
    padding-top: 150rpx;
    padding-bottom: 100rpx;
    box-sizing: border-box;
  }
  .title{
    font-size: 36rpx;
    color: #ffffff;
    opacity: 0.7;
    margin-bottom: 20rpx;
  }
  .notice-msg{
    font-size: 56rpx;
    color: #ffffff;
    opacity: 0.7;
    width: 100%;
    text-align: center;
    padding-top: 56rpx;
    border-top: 2rpx solid #dddddd;
    margin: 60rpx 0 30rpx;
  }
  .notice-price{
    font-size: 28rpx;
    color: #ffffff;
  }
  .over-bottom{
    box-sizing: border-box;
  }
  .notice{
    font-size: 24rpx;
    color: #00b2b2;
    text-align: center;
    margin-top: 20rpx;
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
  .common-class{
    width: 100%;
    border: 2rpx solid #dddddd;
    margin-top: 30rpx;
    height: 80rpx;
    border-radius: 10rpx;
    padding-left: 20rpx;
    box-sizing: border-box;
  }
</style>
