<template>
  <div class="common-padding">
      <input v-model="phoneNum" placeholder="手机号码" class="common-class" placeholder-style="color:#CECECE"/>
      <div class="flex-row vertical-center flow-justify code-box">
        <input v-model="verificationCode" placeholder="短信验证码" class="common-class" placeholder-style="color:#CECECE"/>
        <button class="button-class" :class="{'gray-button':computeTime}" type="default" @tap="sendCode()" :disabled="!rightPhone">
          {{computeTime>0 ? '(' + computeTime + 's)已发送' : '发送'}}
        </button>
      </div>
      <input v-model="pwd" type="password" placeholder="登录密码" class="common-class" placeholder-style="color:#CECECE"/>
      <input v-model="rePwd" type="password" placeholder="确认登录密码" class="common-class" placeholder-style="color:#CECECE"/>
      <input v-model="email" placeholder="电子邮箱" class="common-class" placeholder-style="color:#CECECE"/>
      <!--<picker class="common-class" mode="multiSelector" @change="bindMultiPickerChange" @columnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="Regions">-->
        <!--{{Regions[0][multiIndex[0]]}}，{{Regions[1][multiIndex[1]]}}，{{Regions[2][multiIndex[2]]}}-->
      <!--</picker>-->
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
      invitationCode:'',
      email:'',
      Pwd:'',
      rePwd:'',
      phoneNum:'',
      prefixNum:'',
      verificationCode:'',
      computeTime: 0,
      prefixNumbers:[],
      Regions:[],
      multiIndex:[0,0,0],
    }
  },
  computed: {
    rightPhone () {
      // 利用正则对手机号进行匹配，返回布尔值
      return /^1\d{10}$/.test(this.phoneNum)
    }
  },
  mounted(){
    const _this = this;
    _this.getPrefixNumbers();
    _this.getRegions();
  },
  methods: {
    bindMultiPickerChange(e){
      console.log('picker发送选择改变，携带值为', e.mp.detail.value)
      this.setData({
        multiIndex: e.detail.value
      })
    },
    bindMultiPickerColumnChange(){
      console.log('修改的列为', e.detail.column, '，值为', e.mp.detail.value);
    },
    doSubmit() {
      const _this = this;
      if (!_this.rightPhone) {
        wx.showToast({
          title: '手机号码格式不正确',
          icon: 'none',
          duration: 1500
        });
        return;
      }
      if (_this.email == '' || _this.email == undefined) {
        wx.showToast({
          title: '邮箱不能为空',
          icon: 'none',
          duration: 1500
        });
        return;
      }
      if (_this.pwd =='' && _this.pwd == undefined) {
        wx.showToast({
          title: '密码不能为空',
          icon: 'none',
          duration: 1500
        });
      } else if (_this.pwd != _this.rePwd){
        wx.showToast({
          title: '两次密码输入不一致',
          icon: 'none',
          duration: 1500
        });
      } else {
        const password = _this.$base64.encode(_this.$md5(_this.pwd));
        const params = {
          email : _this.email,
          nickname : wx.getStorageSync('userInfo').nickName,
          invitationCode : _this.invitationCode,
          location : 'AUS0NTDRW',
          openId : wx.getStorageSync('openId'),
          password  : password,
          phoneNum  : _this.phoneNum,
          prefixNum  : _this.prefixNumbers[0].number,
          verificationCode   : _this.verificationCode
        };
        _this.registerEx(params);
      }

    },
    async registerEx(params) {
      const _this = this;
      const result = await this.$api.registerEx(params);

      if(result.code == 200){

        wx.setStorage({
          key:"token",
          data:result.result.token
        });
        wx.redirectTo({
          url:'../myPage/bingResult/main'
        })

      }else {
        wx.showToast({
          title: result.message,
          icon: 'none',
          duration: 1500
        })
      }
    },
    async sendCode() {
      const _this = this;
      if (!_this.computeTime) {
        // 启动倒计时
        _this.computeTime = 60;
        _this.intervalId = setInterval(() => {
          _this.computeTime--;
          if (_this.computeTime <= 0) {
            // 停止计时
            clearInterval(_this.intervalId)
          }
        }, 1000)

        const params = {
          phoneNum : _this.phoneNum,
          prefixNum : _this.prefixNumbers[0].number
        };
        const result = await this.$api.sendSMS(params);
        if(result.code == 200){
          wx.showToast({
            title: '验证码发送成功',
            icon: 'success',
            duration: 1500
          })
        }
      };
    },
    async getPrefixNumbers(){
      const result  = await this.$api.getPrefixNumbers();
      console.log('getPrefixNumbers',result)
      if(result.code == 200){
        this.prefixNumbers = result.result;
      }
    },
    async getRegions(){
      const params = {
        code : 'AUS'
      };
      const result  = await this.$api.getRegions(params);
      // console.log('getRegions',result)
      if(result.code == 200){
        this.Regions = result.result;
      }
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
    color: #aaaaaa;
    font-size: 28rpx;
    border: 2rpx solid #dddddd;
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
  .code-box .button-class{
    width: 300rpx;
    margin-left: 20rpx;
  }
  .comment-gray-text{
    text-align: center;
  }
  button[disabled]{
    background: #31B9A5;
    color: #ffffff;
  }
  .gray-button{
    background: #cccccc;
  }
</style>
