<template>
  <div>
    <div class="donation-top flex-col vertical-center common-padding">
      <p class="donation-num">10</p>
      <p class="donation-unit">VBC</p>
      <div class="donation-progress">

      </div>
    </div>
    <p class="donation-notice common-black-text common-padding">选择要捐赠给哪个组织</p>
    <div>
      <radio-group class="radio-group" @change="radioChange">
        <label class="radio common-padding flex-row vertical-center flow-justify" v-for="(item,index) in donations"
               :key="index">
          <p class="pay-type-text common-black-text">{{item.name}}</p>
          <radio :value="item.id" :checked="index == 0"/>
        </label>
      </radio-group>
      <div class="flex-col vertical-center common-padding">
        <button class="button-class" type="default" @tap="goPage()" >提交</button>
        <p class="comment-gray-text" @tap="goPage()">跳过评价</p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "donation",
    data() {
      return {
        donations: [{
          name: '北悉尼商会',
          id: 1,
        }, {
          name: '心脏基金',
          id: 1,
        }, {
          name: 'MOVE 慈善基金',
          id: 1,
        },],
      }
    },
    methods:{
      goPage(){
        wx.redirectTo({
          url: '../../businessPage/commonResult/main'
        })
      },
      radioChange: function (e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value)
      }
    }
  }
</script>

<style scoped>
  .donation-top{
    width: 100%;
    background: #ffffff;
    padding: 60rpx 0 100rpx;
  }
  .radio{
    background: #ffffff;
    margin-bottom: 6rpx;
  }
  .pay-type-text {
    line-height: 100rpx;
  }
  .donation-notice{
    line-height: 90rpx;
  }
  .donation-unit{
    font-size: 20rpx;
    color: #31B9A5;
  }
  .donation-num{
    font-size: 72rpx;
    color: #31B9A5;
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
</style>
