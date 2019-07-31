<template>
  <div>
    <div class="home-top-container common-padding">
      <div class="home-top flex-row vertical-center flow-justify">
        <div class="flex-row vertical-center">
          <img class="address-icon" src="../../../../static/images/position-fill2.png" alt="">
          <common-location @default="defaultLocation"></common-location>
          <p>{{vbc}} <span>VBC</span></p>
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
      <div class="search-input flex-row vertical-center" @tap="handleSearch">
        <icon type="search" size="20" class="icon-search" color="#ffffff" />
        <input type="text" placeholder="搜索商家或商品" placeholder-style="color:#7ED6CB;">
      </div>
    </div>
    <img-swiper></img-swiper>
    <tab-swiper ref="tabSwiper" :tabList="businessTypeList"></tab-swiper>
  </div>
</template>

<script>
  import imgSwiper from '../../../components/imgSwiper/imgSwiper'
  import tabSwiper from '../../../components/tabSwiper/tabSwiper'
  import commonLocation from '@/components/commonLocation/commonLocation'

  export default {
    name: "home",
    components: {
      imgSwiper, tabSwiper, commonLocation
    },
    data() {
      return {
        businessTypeList:[],
        latitude:'',
        longitude:'',
        vbc:'',
      }
    },
    mounted(){
      this.getBusinessTypeList();
      this.getVBC();
      wx.getLocation({
        type: 'wgs84',
        success (res) {
          wx.setStorage({
            key:"location",
            data:res
          });
        }
      });
    },
    methods:{
      defaultLocation(code){
        wx.setStorage({
          key:"locationCode",
          data:code
        });
        console.log(this.$refs.tabSwiper)
      },
      async getBusinessTypeList(){
        const result = await this.$api.businessTypeList();
        if(result.code == 200){
          this.businessTypeList = result.result;
        }
      },
      async getVBC(){
        const result = await this.$api.getVBC();
        if(result.code == 200){
          this.vbc = result.result;
        }
      },
      handleSearch(){
        wx.navigateTo({
          url: '../search/main'
        })
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
    margin-right: 20rpx;
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
    margin-right: 10rpx;
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
