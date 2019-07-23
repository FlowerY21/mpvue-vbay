<template>
  <div>
    <div class="item-list flex-row vertical-center flow-justify" @click="goDetail(0)">
      <div class="flex-row vertical-center">
        <p class="level">LV.1</p>
        <p class="common-black-text" :class="{'on':false}">{{authenticate.familyName}}{{authenticate.givenName}} {{authenticate.idCardNum}}</p>
      </div>
      <img src="../../../../static/images/right2.png" alt="rightIcon" class="right-icon">
    </div>
    <div class="item-list flex-row vertical-center flow-justify" @click="goDetail(1)">
      <div class="flex-row vertical-center">
        <p class="level">LV.2</p>
        <p class="common-black-text" :class="{'on':true}">待审核</p>
      </div>
      <img src="../../../../static/images/right2.png" alt="rightIcon" class="right-icon">
    </div>
  </div>
</template>

<script>
export default {
  name: "certification",
  data(){
    return{

      authenticate:{},
    }
  },
  onUnload: function () {
    wx.reLaunch({
      url: '../../myPage/my/main'
    })
  },
  mounted(){
    const _this = this;
    _this.getAuthenticate();
  },
  methods:{
    goDetail(index){
      if (index == 0) {
        wx.navigateTo({
          url: '../../myPage/certificationLevelOne/main'
        })
      } else {
        wx.navigateTo({
          url: '../../myPage/certificationLevelTwo/main'
        })
      }
    },
    async getAuthenticate(){
      const _this = this;
      const result = await _this.$api.getAuthenticate();
      console.log('getAuthenticate',result)
      if (result.code == 200) {
        _this.authenticate = result.result
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
    background: #31B9A5;
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
    color: #31B9A5;
  }
</style>
