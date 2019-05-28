<template>
  <div class="common-padding">
    <div class="flex-col absolute-center pay-notice">
      <p class="comment-gray-text">使用 VBC 支付</p>
      <p class="comment-gray-text">最高 <span>15%</span></p>
    </div>
    <div class="flex-row flow-justify vertical-center">
      <div class="change-button">-</div>
      <div class="pay-progress-box">
        <movable-area  class="movable-area" id="movable-area">
          <movable-view @change="voiceSeekMove" @touchend='seekTouchEnd' direction="horizontal" class='movable-view' damping="1000"></movable-view>
        </movable-area>
        <progress :percent="percent" color="#00B2B2"stroke-width="5" class="pay-progress" />
      </div>
      <div class="change-button">+</div>
    </div>
    <div class="flex-row flow-justify pay-price">
      <div>
        <p><span>1000</span>VBC</p>
        <p class="gray-text">可用余额: 16500</p>
      </div>
      <p class="add">+</p>
      <div>
        <p><span>99</span>AUD</p>
        <!--<p class="gray-text">可用余额: 16500</p>-->
      </div>
    </div>
    <div class="flex-col vertical-center get-notice">
      <p class="gray-text">您将获得</p>
      <p class="get-price">15VBC</p>
    </div>
    <button class="button-class" type="default"  @tap="goPage()" >支付 1000VBC + 99AUD</button>
  </div>
</template>

<script>
  export default {
    name: "commonPay",
    data() {
      return {
        percent:'80',
      }
    },
    methods:{
      voiceSeekMove(e){
        console.log('progress',e)
      },
      seekTouchEnd(e){
        console.log('touched',e)
      },
      goPage(){
        wx.navigateTo({
          url: '../../businessPage/payType/main'
        })
      }
    }
  }
</script>
<style scoped>
  .pay-notice{
    padding: 20rpx 0;
  }
  .pay-notice p{
    line-height: 1.5;
  }
  .pay-notice span{
    color: #00b2b2;
  }
  .change-button{
    width: 60rpx;
    height: 60rpx;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    text-align: center;
    line-height: 60rpx;
    background: #00b2b2;
    color: #FFFFFF;
    font-size: 40rpx;
    font-weight: bold;
  }
  .pay-progress-box{
    width: 70%;
    position: relative;
  }
  .pay-progress{
    width: 100%;
  }
  .movable-area{
    width: 100%;
    height: 40rpx;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .movable-view{
    width: 40rpx;
    height: 40rpx;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    background: #ffffff;
    border: 1rpx solid #aaaaaa;
  }
  .pay-price{
    margin: 20rpx 0;
  }
  .pay-price p{
    font-size: 28rpx;
    color: #222222;
  }
  .pay-price span{
    font-size: 56rpx;
  }
  .pay-price .gray-text,
  .gray-text{
    color: #9a9a9a;
  }
  .add{
    line-height: 80rpx;
  }
  .get-price{
    font-size: 36rpx;
    color: #00b2b2;
    margin-top: 10rpx;
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
  }
  .get-notice{
    margin: 64rpx 0 34rpx;
  }
</style>
