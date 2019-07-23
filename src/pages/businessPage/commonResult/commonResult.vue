<template>
  <div class="flex-col vertical-center result-box">
    <p class="title">感谢您的捐赠！</p>
    <button class="button-class common-black-text" type="default" plain="true" @tap="goPage()" >返回商家首页</button>
  </div>
</template>

<script>
  export default {
    name: "commonResult",
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
        wx.navigateTo({
          url: '../../businessPage/business/main'
        })
      },
    }
  }
</script>

<style scoped>
  .title{
    font-size: 56rpx;
    color: #31B9A5;
    margin-bottom:44rpx;
  }
  .result-box{
    width:100%;
    border:2rpx solid #dddddd;
    padding:170rpx 0 68rpx;
  }
  .button-class{
    width: 240rpx;
    height: 60rpx;
    text-align: center;
    line-height: 60rpx;
  }
</style>
