<template>
  <div class="common-padding flex-col vertical-center box">
    <p class="title">VBAY</p>
    <div v-if="canIUse" style="width: 100%;">
      <button class="button-class" open-type="getUserInfo" @getuserinfo="getUserInfo">微信登录</button>
      <button class="button-class plain-button" type="default" plain="true" @tap="goPage(0)" >已有账号，手机登录</button>
    </div>
    <p v-else>请升级微信版本</p>
  </div>
</template>

<script>

export default {
  name: 'index',
  data() {
    return {
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      code:'',
      token:'',
      openId:'',
      session_key:'',
      commonParams:{}
    }
  },
  mounted() {
    const _this = this;
    _this.login();
  },
  methods: {
    getUserInfo(e) {
      const _this = this;
      if (e.mp.detail.userInfo) {
        // 用户允许授权
        console.log('用户按了允许授权按钮');
        // 保存用户信息
        let {encryptedData, userInfo, iv} = e.mp.detail;

        _this.commonParams = {
          city : userInfo.city,
          code : _this.code,
          country : userInfo.country,
          encryptedData : encryptedData,
          gender : userInfo.gender,
          headUrl : userInfo.avatarUrl,
          iv : iv,
          nickName : userInfo.nickName,
          province : userInfo.province
        };

        _this.codeSession(_this.commonParams);

      } else {
        //用户按了拒绝按钮
        console.log('用户按了拒绝按钮');

      }
    },
    getSetting() {
      const _this = this;
      wx.getSetting({
        success(res) {
          if (res.authSetting['scope.userInfo']) {
            console.log('这里已经授权');
            _this.codeSession(_this.commonParams);
          } else {

          }
        }
      })
    },
    // 获取小程序登录code
    login() {
      const _this = this;

      console.log('登录');

      wx.login({
        success(res) {
          if (res.code) {
            _this.code = res.code;

            _this.getSetting();
          }
        },
        fail(res) {

        }
      })
    },
    // 获取openid,session_key
    async codeSession(params){
      const _this = this;
      const result = await this.$api.codeSession(params);
      console.log('codeSession', result)
      if (result.code == 200) {
        wx.setStorage({
          key:"token",
          data:result.result.token
        })

        // _this.session_key = result.result.session.session_key;
        wx.showLoading({
          title: '登录中',
        });

        _this.openId = result.result.session.openid;
        const params = {
          openId : _this.openId
        };

        _this.loginVbay(params);
      }
    },
    // 登录vbay
    async loginVbay(params) {
      const _this = this;
      const result = await this.$api.login(params);
      console.log('login', result)
      if (result.code == 200) {
        wx.hideLoading()
        // 更新token
        wx.setStorage({
          key:"token",
          data:result.result.token
        })
        if(result.result.registered){
          wx.switchTab({
            url: '../homePage/home/main'
          });
          // wx.redirectTo({
          //   url: '../register/main'
          // });
        }else{
          // wx.switchTab({
          //   url: '../homePage/home/main'
          // });

          wx.redirectTo({
            url: '../register/main?id=' + _this.openId
          });
        }
      }
    },
  }
}
</script>

<style scoped>
  .box{
    padding-top: 200rpx;
  }
  .title {
    font-size: 96rpx;
    color: #00b2b2;
    margin-bottom: 150rpx;
  }
  .button-class{
    width: 100%;
    height: 80rpx;
    color: #ffffff;
    line-height: 80rpx;
    text-align: center;
    background: #00b2b2;
    border-radius: 10rpx;
    font-size: 28rpx;
    margin: 60rpx 0 40rpx;
  }
  .plain-button{
    color: #666666;
    margin-top: 20rpx;
    background: transparent;
  }
</style>
