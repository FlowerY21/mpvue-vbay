<template>
  <div class="common-padding">
    <div class="flex-row vertical-center flow-justify level-top">
      <input placeholder="名字" class="common-class"/>
      <input placeholder="姓氏" class="common-class"/>
    </div>
    <div class="flex-row vertical-center flow-justify level-center">
      <input placeholder="证件类型" class="common-class"/>
      <picker @change="bindPickerChange" :value="index" :range="array" class="common-class">
        <p>{{array[index]}}</p>
      </picker>
    </div>
    <input placeholder="证件号码" class="common-class"/>
    <button class="button-class" type="default" @tap="goPage()" >确认</button>
  </div>
</template>

<script>
export default {
  name: "certificationLevelOne",
  data(){
    return{
      array: ['身份证', '护照'],
    }
  },
  methods:{
    bindPickerChange(e){
      console.log('picker发送选择改变，携带值为', e.mp.detail.value)
      this.time = e.mp.detail.value
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
