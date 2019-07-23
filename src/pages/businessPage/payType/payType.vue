<template>
  <div>
    <div class="pay-type-user common-padding">
      <p v-if="showMsg == 1" class="pay-type-text common-black-text">付款给 Phuong Restaurant</p>
      <div v-else class="flex-row vertical-center flow-justify">
        <p class="pay-type-text common-black-text">报名人信息</p>
        <p class="pay-type-text common-black-text">赵小花（13111111111）</p>
      </div>
    </div>
    <div class="pay-type-box">
        <radio-group class="radio-group" @change="radioChange">
          <label class="radio common-padding flex-row vertical-center flow-justify" v-for="(item,index) in bankList" :key="index">
            <p class="pay-type-text">{{item.bankName}} <span>{{item.bankNum}}</span></p>
            <radio :value="item.id" :checked="index == 0"/>
          </label>
        </radio-group>
    </div>
    <div class="pay-box flex-row flow-justify">
      <div class="pay-msg flex-row vertical-center common-padding">
        <p class="pay-type-text common-black-text">合计：</p>
        <div class="pay-msg-num golden-text">
          <p>$99</p>
          <p>1000VBC</p>
        </div>
      </div>
      <button class="button-class" type="default" @tap="goPage()" >付款</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "payType",
  data() {
    return {
      bankList:[{
        bankName:'信用卡1',
        bankNum:'5248 **** **** 4246',
        id:1,
      },{
        bankName:'信用卡1',
        bankNum:'5248 **** **** 4246',
        id:1,
      },{
        bankName:'信用卡1',
        bankNum:'5248 **** **** 4246',
        id:1,
      },],
      showMsg:''
    }
  },
  mounted(){
    this.showMsg = this.$root.$mp.query.type;
  },
  methods:{
    goPage(){
      wx.navigateTo({
        url: '../../businessPage/payover/main'
      })
    },
    radioChange: function (e) {
      console.log('radio发生change事件，携带value值为：', e.detail.value)
    }
  }
}
</script>

<style scoped>
  .pay-type-text {
    line-height: 100rpx;
  }

  .pay-type-user {
    border-bottom: 16rpx solid #cacaca;
  }
  .pay-type-text span{
    color: #999999;
  }
  .pay-box{
    width: 100%;
    height: 90rpx;
    position: fixed;
    bottom: 0;
    border-top: 2rpx solid #dddddd;
  }
  .button-class{
    width: 50%;
    height: 100%;
    background: #31B9A5;
    text-align: center;
    color: #ffffff;
    line-height: 90rpx;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
  }
  .radio{
    border-bottom: 2rpx solid #dddddd;
  }
  .pay-msg{
    width: 50%;

  }
  .pay-msg-num{
    margin-left: 20rpx;
  }
  .pay-msg-num p{
    font-size: 30rpx;
  }
</style>
