<template>
  <div class="common-padding">
    <div class="ticket-box">
      <div class="ticket-top">
        <p class="ticket-text">{{activityInfo.vipName}} ${{activityInfo.payAmount}}+{{activityInfo.payVbc}}VBC</p>
        <p class="ticket-text">{{activityInfo.consumerNickname}}（{{activityInfo.consumerPhoneNum}}）</p>
      </div>
      <div class="ticket-center flex-col vertical-center">
        <p class="ticket-center-text">{{activityInfo.code}}</p>
        <p class="ticket-status" v-if="activityInfo.status == 1">申请退款</p>
        <p class="ticket-status" v-else-if="activityInfo.status == 2">已退款</p>
        <p class="ticket-status" v-else-if="activityInfo.status == 3">已拒绝</p>
      </div>
      <div class="ticket-bottom flex-col">
        <div class="flex-row vertical-center flow-justify">
          <p class="common-black-text">{{activityInfo.name}}</p>
          <img src="../../../../static/images/right2.png" alt="rightIcon" class="right-icon">
        </div>

        <div class="flex-row vertical-center flow-justify">
          <p class="common-black-text">时间：{{activityInfo.beginTime}} 至 {{activityInfo.endTime}}</p>
          <!--<img src="../../../../static/images/right2.png" alt="rightIcon" class="right-icon">-->
        </div>

        <div class="flex-row vertical-center flow-justify">
          <p class="common-black-text overflow">地址：{{activityInfo.address}}</p>
          <img src="../../../../static/images/right2.png" alt="rightIcon" class="right-icon">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ticket",
  data(){
    return{
      activityInfo:{},
    }
  },
  mounted(){
    this.activityInfo = wx.getStorageSync('activity');
  },
}
</script>

<style scoped>
  .ticket-text {
    color: #101010;
    font-size: 32rpx;
    margin-bottom: 16rpx;
  }
  .ticket-center-text{
    color: #101010;
    font-size: 40rpx;
    margin-bottom: 24rpx;
  }
  .ticket-status{
    font-size: 28rpx;
    color: #31B9A5;
  }
  .ticket-center{
    padding-top: 40rpx;
    padding-bottom: 40rpx;
    border-top: 2rpx solid #dddddd;
    border-bottom: 2rpx solid #dddddd;
  }
  .right-icon{
    width: 30rpx;
    height: 30rpx;
  }
  .ticket-bottom div{
    margin-top: 20rpx;
  }
  .ticket-box{
    padding: 20rpx 30rpx;
    background: #ffffff;
    border: 2rpx solid #dddddd;
  }
  .common-padding{
    padding-top: 30rpx;
    padding-bottom: 30rpx;
  }
</style>
