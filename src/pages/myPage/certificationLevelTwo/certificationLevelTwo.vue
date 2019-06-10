<template>
  <div>
    <div class="flex-row vertical-center flow-justify">
      <div class="img-box flex-col vertical-center absolute-center" @tap="upLoadImage(1)">
        <img class="ID-photo" v-if="IDPhoto1" :src="IDPhoto1" alt="IDPhoto1">
        <div class="flex-col vertical-center" v-else>
          <img src="../../../../static/images/card1.png" alt="cardIcon" class="card-icon">
          <p class="common-black-text">证件正面照</p>
        </div>

      </div>
      <div class="img-box flex-col vertical-center absolute-center">
        <img src="../../../../static/images/img.png" alt="cardIcon" class="card-icon">
        <p class="common-black-text">示例照片</p>
      </div>
    </div>
    <div class="flex-row vertical-center flow-justify">
      <div class="img-box flex-col vertical-center absolute-center" @tap="upLoadImage(2)">
        <img class="ID-photo" v-if="IDPhoto2" :src="IDPhoto2" alt="IDPhoto1">
        <div class="flex-col vertical-center" v-else>
          <img src="../../../../static/images/card2.png" alt="cardIcon" class="card-icon">
          <p class="common-black-text">证件背面照</p>
        </div>
      </div>
      <div class="img-box flex-col vertical-center absolute-center">
        <img src="../../../../static/images/img.png" alt="cardIcon" class="card-icon">
        <p class="common-black-text">示例照片</p>
      </div>
    </div>
    <div class="flex-row vertical-center flow-justify">
      <div class="img-box flex-col vertical-center absolute-center" @tap="upLoadImage(3)">
        <img class="ID-photo" v-if="IDPhoto3" :src="IDPhoto3" alt="IDPhoto1">
        <div class="flex-col vertical-center" v-else>
          <img src="../../../../static/images/card3.png" alt="cardIcon" class="card-icon icon2">
          <p class="common-black-text">手持证件照</p>
        </div>
      </div>
      <div class="img-box flex-col vertical-center absolute-center">
        <img src="../../../../static/images/img.png" alt="cardIcon" class="card-icon">
        <p class="common-black-text">示例照片</p>
      </div>
    </div>
    <div class="common-padding">
      <button class="button-class" type="default" @tap="goPage()" >确认</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "certificationLevelTwo",
  data(){
    return{
      array: ['身份证', '护照'],
      IDPhoto1:'',
      IDPhoto2:'',
      IDPhoto3:'',
    }
  },
  methods:{
    bindPickerChange(e){
      const _this = this;
      console.log('picker发送选择改变，携带值为', e.mp.detail.value)
      this.time = e.mp.detail.value
    },
    upLoadImage(index){
      const _this = this;
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success (res) {
          // tempFilePath可以作为img标签的src属性显示图片
          if (index == 1){
            _this.IDPhoto1 = res.tempFilePaths
          } else if(index == 2){
            _this.IDPhoto2 = res.tempFilePaths
          } else {
            _this.IDPhoto3 = res.tempFilePaths
          }

        }
      })
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
  .img-box{
    width: 49%;
    height: 240rpx;
    background: #E8E8E8;
    margin-top: 50rpx;
  }
  .card-icon{
    width: 60rpx;
    height: 60rpx;
  }
  .icon2{
    width: 90rpx;
  }
  .ID-photo{
    width: 100%;
    height: 100%;
  }
</style>
