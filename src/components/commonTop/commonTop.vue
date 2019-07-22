<template>
  <div class="top-container flex-row vertical-center flow-justify common-padding">
    <!--<div class="back-btn" @tap="goBack">-->
      <!--<img src="../../../static/images/back.png" alt="">-->
    <!--</div>-->
    <div class="back-btn">
      <picker
        mode="region"
        @change="bindRegionChange"
        :value="region"
      >
        <p>{{region[2]}}</p>
      </picker>
    </div>

    <!--<slot v-else name="left"></slot>-->
    <p v-if="showTitle" class="title">{{title}}</p>
    <div v-else class="search-container flex-row vertical-center" @tap="bindfocus">
      <icon type="search" size="20" class="icon-search" />
      <input type="search" :value="value">
    </div>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: "commonTop",
  props:{
    title: {
      type:String,
      default:''
    },
    showTitle: {
      type:Boolean,
      default:false
    },
    showLeft: {
      type:Boolean,
      default:true
    },

  },
  data(){
    return{
      value:'',
      region: ['辽宁省', '沈阳市', '于洪区'],
    }
  },
  methods:{
    goBack(){
      wx.navigateBack({
        delta: 1
      })
    },
    bindfocus(){
      wx.navigateTo({
        url: '../search/main'
      })
    },
    bindRegionChange(e){
      this.region = e.mp.detail.value
    }
  }
}
</script>

<style scoped>
  .top-container{
    background: #31B9A5;
    width: 100%;
    height: 110rpx;
    box-sizing: border-box;
    border-bottom: 2rpx solid #bbbbbb;
  }
  .search-container{
    position: relative;
  }
  .search-container icon{
    position: absolute;;
    left: 10rpx;
    margin: auto;
  }
  .search-container input{
    height: 60rpx;
    padding-left: 60rpx;
    background: #ffffff;
  }
  .back-btn img{
    width: 40rpx;
    height: 40rpx;
  }
  .back-btn{
    font-size: 28rpx;
  }
</style>
