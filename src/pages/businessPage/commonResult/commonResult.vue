<template>
  <div class="flex-col vertical-center result-box">
    <p class="title">感谢您的捐赠！</p>
    <button class="button-class" type="default" plain="true" @tap="goPage()" >返回商家首页</button>
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
      radioChange: function (e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value)
      }
    }
  }
</script>

<style scoped>
  .title{
    font-size: 56rpx;
    color: #00b2b2;
    margin-bottom:44rpx;
  }
  .result-box{
    width:100%;
    border:2rpx solid #dddddd;
    padding:170rpx 0 68rpx;
  }
  .button-class{
    width: 200rpx;
    height: 60rpx;
    font-size: 28rpx;
    color: #101010;
    text-align: center;
    line-height: 60rpx;
  }
</style>
