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
        wx.setStorage({
          key:"userInfo",
          data: userInfo
        });
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
            wx.checkSession({
              success () {
                wx.showLoading({
                  title: '登录中',
                });

                _this.loginVbay();

                //session_key 未过期，并且在本生命周期一直有效
              },
              fail () {
                // session_key 已经失效，需要重新执行登录流程
                _this.login() //重新登录
              }
            })
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

      if (result.code == 200) {
        wx.setStorage({
          key:"token",
          data:result.result.token
        });
        // _this.session_key = result.result.session.session_key;
        wx.showLoading({
          title: '登录中',
        });

        _this.openId = result.result.session.openid;

        wx.setStorage({
          key:"openId",
          data: _this.openId
        });

        _this.loginVbay();
      }
    },
    // 登录vbay
    async loginVbay() {
      const _this = this;
      const params = {
        openId : _this.openId
      };
      const result = await this.$api.login(params);

      if (result.code == 200) {
        wx.hideLoading();
        // 更新token
        wx.setStorage({
          key:"token",
          data:result.result.token
        });

        if(result.result.registered){
          wx.switchTab({
            url: '../homePage/home/main'
          });
        }else{
          wx.redirectTo({
            url: '../register/main'
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
    color: #31B9A5;
    margin-bottom: 150rpx;
  }
  .button-class{
    width: 100%;
    height: 80rpx;
    color: #ffffff;
    line-height: 80rpx;
    text-align: center;
    background: #31B9A5;
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
