<template>
  <div class="common-padding">
    <input placeholder="手机号码" class="common-class" placeholder-style="color:#CECECE"/>
    <div class="flex-row vertical-center flow-justify code-box">
      <input placeholder="短信验证码" class="common-class" placeholder-style="color:#CECECE"/>
      <button class="button-class" type="default" @tap="sendCode()" >发送</button>
    </div>
    <input placeholder="登录密码" class="common-class" placeholder-style="color:#CECECE"/>
    <input placeholder="确认登录密码" class="common-class" placeholder-style="color:#CECECE"/>
    <input placeholder="电子邮箱" class="common-class" placeholder-style="color:#CECECE"/>
    <picker @change="bindPickerChange" :value="index" :range="array" class="common-class">
      <p>{{array[index]}}</p>
    </picker>
    <input placeholder="邀请码" class="common-class" placeholder-style="color:#CECECE"/>
    <button class="button-class" type="default" @tap="goPage()" >确认</button>
    <p class="comment-gray-text">绑定账号信息获取 10$ 抵用金</p>
    <button open-type="getUserInfo" lang="zh_CN" @getUserInfo="onGotUserInfo">获取用户信息</button>
  </div>
</template>

<script>

export default {
  name:'index',
  data(){
    return{
      index:0,
      array:['悉尼','新南威尔士','澳大利亚']
    }
  },
  mounted(){

  },
  methods:{
    bindPickerChange(){

    },
    onGotUserInfo(){
      wx.getUserInfo({
        success: function (res) {
          console.log(res)
        },
      })
    },
    sendCode(){

    },
    goPage(){
      wx.redirectTo({
        url: '../myPage/bingResult/main'
      })
    }
  }
}
</script>

<style scoped>
  .login-button{
    width: 50vw;
    margin-top: 40vh;
  }
  .common-class{
    border: 2rpx solid #dddddd;
    margin-top: 30rpx;
    height: 80rpx;
    line-height: 80rpx;
    border-radius: 10rpx;
    padding-left: 20rpx;
    color: #CECECE;
    font-size: 28rpx;
    border: 2rpx solid #dddddd;
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
    margin: 60rpx 0 40rpx;
  }
  .code-box .button-class{
    width: 300rpx;
    margin-left: 20rpx;
  }
  .comment-gray-text{
    text-align: center;
  }
</style>
