<template>
  <div>
    <div class="over-top flex-col vertical-center common-padding">
      <p class="title">Phuong Restaurant</p>
      <p class="comment-gray-text">餐厅</p>
      <p class="notice-msg">您已支付</p>
      <p class="notice-price"><span>1000</span>VBC + <span>99</span>AUD</p>
    </div>
    <div class="common-padding over-bottom flex-col vertical-center">
      <p class="comment-gray-text">您的评分</p>
      <div class="star-class">
        <star score="5" starSize="big"></star>
      </div>
      <textarea class="pay-textarea" placeholder="对商家的评价，200字以内" placeholder-style="font-size:28rpx;color:#888888;" />
      <button class="button-class" type="default" @tap="goPage()" >提交</button>
      <p class="comment-gray-text" @tap="goPage()">跳过评价</p>
    </div>
  </div>
</template>

<script>
import star from '../../../components/star/star'
export default {
  name: "payover",
  components:{
    star
  },
  methods:{
    goPage(){
      wx.navigateTo({
        url: '../../businessPage/donation/main'
      })
    }
  }
}
</script>

<style scoped>

  .over-top {
    width: 100%;
    background: #ffffff;
    padding-top: 150rpx;
    padding-bottom: 100rpx;
    box-sizing: border-box;
  }
  .title{
    font-size: 56rpx;
    color: #32B9A6;
    margin-bottom: 20rpx;
    font-weight: bold;
  }
  .notice-msg{
    font-size: 28rpx;
    color: #9a9a9a;
    width: 100%;
    text-align: center;
    padding-top: 56rpx;
    border-top: 2rpx solid #dddddd;
    margin: 60rpx 0 30rpx;
  }
  .notice-price{
    font-size: 28rpx;
    color: #222222;
  }
  .notice-price span{
    font-size: 56rpx;
  }
  .over-bottom{
    padding-top: 106rpx;
  }
  .pay-textarea{
    width: 100%;
    height: 320rpx;
    border: 2rpx solid #bbbbbb;
    padding: 10rpx;
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
  .star-class{
    margin: 58rpx 0 40rpx;
  }
</style>
