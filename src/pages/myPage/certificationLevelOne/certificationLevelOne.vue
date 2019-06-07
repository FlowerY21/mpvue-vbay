<template>
  <div class="common-padding">
    <form @submit="formSubmit">
      <div class="flex-row vertical-center flow-justify level-top">
        <input name="givenName" placeholder="名字" class="common-class"/>
        <input name="familyName" placeholder="姓氏" class="common-class"/>
      </div>
      <div class="flex-row vertical-center flow-justify level-center">
        <input placeholder="证件类型" class="common-class"/>
        <picker @change="bindPickerChange" :value="index" :range="array" class="common-class">
          <p>{{array[index]}}</p>
        </picker>
      </div>
      <input name="idCardNum" placeholder="证件号码" class="common-class"/>
      <button class="button-class" type="default" form-type="submit" >确认</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "certificationLevelOne",
  data(){
    return{
      index:0,
      idCardType:'',
      array: ['身份证', '护照'],
    }
  },
  onUnload: function () {
    wx.navigateTo({
      url: '../../myPage/certification/main'
    })
  },
  methods:{
    bindPickerChange(e){
      const _this = this;
      console.log('picker发送选择改变，携带值为', e.mp.detail.value)
      if (e.mp.detail.value == 0) {
        _this.idCardType = 1;
      } else {
        _this.idCardType = 2;
      }
    },
    formSubmit(e){
      const _this = this;
      const formData = e.mp.detail.value;
      console.log(formData)
      const params = {
        familyName : formData.familyName,
        givenName  : formData.givenName,
        idCardNum  : formData.idCardNum,
        idCardType  : _this.idCardType,
      };
      _this.authenticateV1(params);
    },
    async authenticateV1(params){
      const _this = this;
      const result = await _this.$api.authenticateV1(params);
      console.log('v1',result)
      if (result == 200) {
        wx.showToast({
          title: '提交成功',
        })
      }
    }
  }
}
</script>

<style scoped>
  .item-list{
    padding: 30rpx 20rpx;
    box-sizing: border-box;
    border-bottom: 2rpx solid #dddddd;
  }
  .level {
    width: 100rpx;
    height: 60rpx;
    background: #00b2b2;
    text-align: center;
    line-height: 60rpx;
    color: #FFFFFF;
    font-size: 28rpx;
    margin-right: 20rpx
  }

  .right-icon{
    width: 30rpx;
    height: 30rpx;
  }
  .common-black-text.on{
    color: #00b2b2;
  }
  .common-class{
    border: 2rpx solid #dddddd;
    margin-top: 30rpx;
    height: 80rpx;
    border-radius: 10rpx;
    padding-left: 20rpx;
    line-height: 80rpx;
  }
  .common-class p{
    line-height: 80rpx;
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
  .level-top input{
    width: 45%;
  }
  .level-center input{
    width: 160rpx;
  }
  .level-center picker{
    width: calc(100% - 160rpx - 70rpx);
  }
</style>
