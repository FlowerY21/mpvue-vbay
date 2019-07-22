<template>
  <div>
    <div class="home-top-container common-padding">
      <div class="home-top flex-row vertical-center flow-justify">
        <div class="flex-row vertical-center">
          <img class="address-icon" src="../../../../static/images/position-fill2.png" alt="">
          <picker :mode="multiSelector" @change="bindMultiPickerChange" @columnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="multiArray">
            <view class="picker">
              地址
            </view>
          </picker>
          <p>16500 <span>VBC</span></p>
        </div>
        <div class="flex-row vertical-center">
          <div class="flex-row vertical-center">
            <img class="address-icon" src="../../../../static/images/position-fill2.png" alt="">
            <p>扫一扫</p>
          </div>
          <div class="flex-row vertical-center">
            <img class="address-icon" src="../../../../static/images/position-fill2.png" alt="">
            <p>邀请好友</p>
          </div>
        </div>
      </div>
      <div class="search-input flex-row vertical-center">
        <icon type="search" size="20" class="icon-search" color="#ffffff" />
        <input type="text" placeholder="搜索商家或商品" placeholder-style="color:#7ED6CB;">
      </div>

    </div>
    <!--<img-swiper></img-swiper>-->
    <tab-swiper></tab-swiper>
  </div>
</template>

<script>
  import imgSwiper from '../../../components/imgSwiper/imgSwiper'
  import tabSwiper from '../../../components/tabSwiper/tabSwiper'

  export default {
    name: "home",
    components: {
      imgSwiper,tabSwiper
    },
    data() {
      return {
        index: 0,
        multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
      }
    },
    methods:{
      bindMultiPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.mp.detail.value)
        this.setData({
          multiIndex: e.mp.detail.value
        })
      },
      bindMultiPickerColumnChange: function (e) {
        console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
      },
    }
  }
</script>

<style scoped>
  page {
    background-color: #f5f5f5;
    height: 100%;
  }
  .home-top-container{
    background: #31B9A5;
    padding-top: 20rpx;
    padding-bottom: 20rpx;
  }
  .home-top-container p,.picker{
    color: #ffffff;
    font-size: 28rpx;
  }
  .home-top-container p span{
    color: #F7D053;
  }
  .home-top{
    margin-bottom: 20rpx;
  }
  .add-button{
    width: 40rpx;
    height: 40rpx;
    overflow: hidden;
  }
  .add-button img{
    width: 100%;
    height: 100%;
  }
  .address-icon{
    width: 32rpx;
    height: 32rpx;
  }
  .search-input{
    position: relative;
  }
  .search-input input{
    width: 100%;
    height: 80rpx;
    background: #5CC7B7;
    border-radius: 80rpx;
    padding: 0 40rpx 0 100rpx;
    box-sizing: border-box;
  }
  .icon-search{
    position: absolute;
    left: 40rpx;
  }
</style>
