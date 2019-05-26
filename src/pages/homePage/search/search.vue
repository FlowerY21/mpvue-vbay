<template>
  <div>
    <div class="top-container flex-row vertical-center common-padding">
      <div class="search-container flex-row vertical-center ">
        <icon type="search" size="20" class="icon-search" />
        <input type="search" :value="value" placeholder-class="gray">
      </div>
    </div>
    <div class="common-padding">
      <p class="search-title">热门搜索</p>
      <div class="tab-container">
        <span v-for="(word , index) in words" :key="index">{{word}}</span>
      </div>
    </div>
  </div>



</template>

<script>
export default {
  name: "search",
  data(){
    return{
      value:'',
      words:['海鲜','赵小花','啦啦啦啦啦绿绿','吃肉啊',]
    }
  },
  methods:{

  }
}
</script>

<style scoped>
  .top-container{
    background: #F5F5F5;
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
    width: 70vw;
    border-radius:10rpx;
    border:2rpx solid #bbbbbb;
  }
  .search-title{
    color: #999999;
    font-size: 28rpx;
    margin: 40rpx 0 0;
  }
  .tab-container span{
    padding: 15rpx 30rpx;
    display: inline-block;
    background: #EEEEEE;
    color: #101010;
    font-size: 28rpx;
    margin: 20rpx 20px 0px 0;
    -webkit-border-radius: 10rpx;
    -moz-border-radius: 10rpx;
    border-radius: 10rpx;
  }
  .gray{
    color: #bbbbbb;
  }
</style>
