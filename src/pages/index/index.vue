<template>
  <div class="common-padding">
    <div v-if="buttonVisible">
      <button v-if="canIUse" open-type="getUserInfo" @getuserinfo="getUserInfo">获取权限</button>
      <p v-else>请升级微信版本</p>
    </div>
    <div v-else>
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
    </div>
  </div>
</template>

<script>

export default {
  name:'index',
  data(){
    return{
      index:0,
      array:['悉尼','新南威尔士','澳大利亚'],
      canIUse:wx.canIUse('button.open-type.contact'),
      userInfo:{},
      code:'',
      buttonVisible:true,

    }
  },
  mounted(){
    const _this = this;
    _this.login();
  },
  methods:{
    getUserInfo(e){
      const _this = this;
      if (e.mp.detail.userInfo){
        console.log('用户按了允许授权按钮');

        _this.buttonVisible = false;

        let { encryptedData,userInfo,iv } = e.mp.detail;


        // _this.$http.post(api,{
        //   // 这里的code就是通过wx.login()获取的
        //   code:_this.code,
        //   encryptedData,
        //   iv,
        // }).then(res => {
        //   console.log(`后台交互拿回数据:`,res);
        //   // 获取到后台重写的session数据，可以通过vuex做本地保存
        // }).catch(err => {
        //   console.log(`api请求出错:`,err);
        // })
      } else {
        //用户按了拒绝按钮
        console.log('用户按了拒绝按钮');

        _this.buttonVisible = true;

      }
    },
    getSetting(){
      const _this = this;
      wx.getSetting({
        success (res) {
          console.log(res.authSetting['scope.userInfo'])
          if(res.authSetting['scope.userInfo']){
            _this.buttonVisible = false;
          }else{
            _this.buttonVisible = true;
          }
        }
      })
    },
    login () {
      const _this = this;
      wx.showLoading({
        title: '登录中',
      })
      console.log('登录');

      wx.login({
        success (res) {
          if (res.code){
            wx.hideLoading();
            // 这里可以把code传给后台，后台用此获取openid及session_key
            const params = {
              openId:res.code
            };
            _this.getSetting();
            _this.loginVbay();
          }
        },
        fail(res){
          wx.hideLoading()
        }
      })
    },
    async loginVbay (params) {
      const result = await this.$api.login(params) // result即为后台返回的数据，params为传入的参数，loadMenu为api.js中自定义的方法名
      console.log('result',result)
    },
    bindPickerChange(){

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
