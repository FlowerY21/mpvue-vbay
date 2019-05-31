<template>
  <div class="common-padding">
    <div class="bank-list flex-row vertical-center around-justify" v-for="(item,index) in bankList" :key="index">
      <div>
        <p class="bank-name">信用卡</p>
        <p class="bank-num">5248 **** **** 4881</p>
      </div>
      <p class="delete">移除</p>
    </div>
    <button class="button-class" type="default"  @tap="goPage()" >添加付款方式</button>
  </div>
</template>

<script>
export default {
  name: "payType",
  data(){
    return{
      bankList:[{

      },{

      }]
    }
  },
  methods:{
    goPage(){
      wx.navigateTo({
        url: '../../myPage/addPayType/main'
      })
    }
  }
}
</script>

<style scoped>
  .bank-list{
    border-bottom: 2rpx solid #dddddd;
    padding-top: 50rpx;
    padding-bottom: 50rpx;
  }
  .bank-name {
    color: #32B9A6;
    font-size: 32rpx;
    margin-bottom: 10rpx;
  }
  .bank-num{
    color: #9a9a9a;
    font-size: 28rpx;
  }
  .delete{
    font-size: 28rpx;
    color: #E51C23;
  }
  .button-class{
    width: 90%;
    height: 80rpx;
    color: #ffffff;
    line-height: 80rpx;
    text-align: center;
    background: #00b2b2;
    border-radius: 80rpx;
    font-size: 28rpx;
    position: absolute;
    bottom: 10vh;
    left: 0;
    right: 0;
    margin: auto;
  }
</style>
