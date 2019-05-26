<template>
  <div class="common-padding">
    <p class="view-record" @tap="goPages">查看预定记录</p>

    <div class="card-container flex-col vertical-center">
      <div class="flex-row vertical-center">
        <p class=" record-input-label">人数</p>
        <input class="record-input" type="number" />
      </div>
      <div class="flex-row vertical-center">
        <p class=" record-input-label">日期</p>
        <input class="record-input" type="number"/>
      </div>
      <div class="flex-row vertical-center">
        <p class=" record-input-label">时间</p>
        <input class="record-input" type="number" />
      </div>
      <div class="flex-row vertical-center">
        <p class=" record-input-label">备注</p>
        <input class="record-input" type="number" />
      </div>

    </div>
    <div class="card-container flex-col vertical-center">
      <p class="record-title">预订信息</p>
      <p class="record-detail">2人，5月26日，12：00</p>
      <button type="default"  bindtap="default" class="record-button">下一步</button>
    </div>




  </div>
</template>

<script>
export default {
  name: "predetermine",
  methods:{
    goPages(){
      wx.navigateTo({
        url: '../../businessPage/reservationRecord/main'
      })
    }
  }
}
</script>

<style scoped>
  .view-record{
    font-size: 24rpx;
    color: #00B2B2;
    text-align: right;
    margin: 20rpx 0 40rpx;
  }
  .card-container{
    padding: 50rpx 0;
    background: #ffffff;
    width: 100%;
    -webkit-border-radius: 10rpx;
    -moz-border-radius: 10rpx;
    border-radius: 10rpx;
    margin-bottom: 50rpx;
  }
  .record-title{
    font-size: 24rpx;
    color: #666666;
  }
  .record-button{
    width:280rpx;
    height: 80rpx;
    background: #00B2B2;
    color: #ffffff;
    text-align: center;
    line-height: 80rpx;
    margin-bottom: 50rpx;
  }
  .record-detail{
    margin: 20rpx 0 40rpx;
  }
  .record-input{
    border-bottom: 2rpx solid #999999;
  }
  .record-input-label{
    font-size: 28rpx;
    color: #101010;
    margin-right: 20rpx;
  }
</style>
