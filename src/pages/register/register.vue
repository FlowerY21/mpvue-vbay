<template>
  <div class="common-padding">
    <input v-model="phoneNum" placeholder="手机号码" class="common-class" placeholder-style="color:#CECECE"/>
    <div class="flex-row vertical-center flow-justify code-box">
      <input v-model="verificationCode" placeholder="短信验证码" class="common-class" placeholder-style="color:#CECECE"/>
      <button class="button-class" type="default" @tap="sendCode()">发送</button>
    </div>
    <input v-model="pwd" placeholder="登录密码" class="common-class" placeholder-style="color:#CECECE"/>
    <input v-model="rePwd" placeholder="确认登录密码" class="common-class" placeholder-style="color:#CECECE"/>
    <input v-model="email" placeholder="电子邮箱" class="common-class" placeholder-style="color:#CECECE"/>
    <picker @change="bindPickerChange" :value="index" :range="array" class="common-class">
      <p>{{array[index]}}</p>
    </picker>
    <input v-model="invitationCode" placeholder="邀请码" class="common-class" placeholder-style="color:#CECECE"/>
    <button class="button-class" type="default" @tap="doSubmit()">确认</button>
    <p class="comment-gray-text">绑定账号信息获取 10$ 抵用金</p>
  </div>
</template>

<script>


export default {
  name: "register",
  data() {
    return {
      index: 0,
      array: ['悉尼', '新南威尔士', '澳大利亚'],
      userInfo: {},
      code: '',
      buttonVisible: true,
      invitationCode:'',
      email:'',
      Pwd:'',
      rePwd:'',
      phoneNum:'',
      prefixNum:'',
      verificationCode:'',
    }
  },
  methods: {
    doSubmit() {
      const _this = this;

      const password = _this.$base64.encode(_this.$md5(_this.pwd));










      // wx.redirectTo({
      //   url: '../myPage/bingResult/main'
      // })
    },
    async loginVbay(params) {
      const result = await this.$api.login(params);
      console.log('login', result)
    },
    async registerEx(params) {
      const result = await this.$api.registerEx(params);
      console.log('registerEx', result)
    },
    bindPickerChange() {

    },
    sendCode() {

    },

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
