<template>
  <div class="common-padding">
    <p class="view-record" @tap="goPages">查看预定记录</p>

    <div class="card-container flex-col vertical-center">
      <div class="flex-row vertical-center">
        <p class=" record-input-label common-black-text">人数</p>
        <input class="record-input" type="number" />
      </div>
      <div class="flex-row vertical-center">
        <p class=" record-input-label common-black-text">日期</p>
        <!--<picker mode="date" :value="date" start="2019-06-01" end="2020-09-01" @change="bindDateChange">-->
          <!--<view class="picker">-->
            <!--{{date}}-->
          <!--</view>-->
        <!--</picker>-->
        <input class="record-input" type="number"/>
      </div>
      <div class="flex-row vertical-center">
        <p class=" record-input-label common-black-text">时间</p>
        <input class="record-input" type="number" />
        <!--<picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">-->
          <!--<view class="picker">-->
            <!--{{time}}-->
          <!--</view>-->
        <!--</picker>-->
      </div>
      <div class="flex-row vertical-center">
        <p class=" record-input-label common-black-text">备注</p>
        <input class="record-input" type="number" />
      </div>

    </div>
    <div class="card-container flex-col vertical-center">
      <p class="record-title">预订信息</p>
      <p class="record-detail">2人，5月26日，12：00</p>
      <button type="default"  @tap="goNext()" class="record-button">下一步</button>
    </div>




  </div>
</template>

<script>
export default {
  name: "predetermine",
  data(){
    return{
      time: '12:01',
      date:'2019-05-27'
    }
  },
  methods:{
    goPages(){
      wx.navigateTo({
        url: '../../businessPage/reservationRecord/main'
      })
    },
    bindTimeChange(e){
      console.log('picker发送选择改变，携带值为', e.mp.detail.value)
      this.time = e.mp.detail.value
    },
    bindDateChange(e){
      console.log('picker发送选择改变，携带值为', e.mp.detail.value)
      this.date = e.mp.detail.value
    },
    goNext(){
      wx.navigateTo({
        url: '../../businessPage/checkRecord/main'
      })
    }
  }
}
</script>

<style scoped>
  .view-record{
    font-size: 24rpx;
    color: #31B9A5;
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
    background: #31B9A5;
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
    margin-right: 20rpx;
  }
</style>
