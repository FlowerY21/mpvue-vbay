<template>
  <div class="list-container">
    <div class="flex-row flow-justify">
      <h3 class="title">北悉尼商会</h3>
      <div class="flex-row">
        <span class="iconfont icon-start"></span>
        <span class="score">4.6</span>
      </div>
    </div>
    <div class="flex-row">
      <span class="iconfont icon-position"></span>
      <p class="nextTitle">1.7 km | Crows Nest St</p>
    </div>
    <p class="nextTitle">泰国菜, Vietnamese</p>
    <div class="flex-row flow-justify">
    <div v-for="(item,index) in details" :key="index" >
      <!--<img :src="item.imgUrl" alt="">-->
      <div class="list-img-box" :style="'background: url('+item.imgUrl+') center/cover no-repeat'"></div>
      <p class="list-img-name">{{item.name}}</p>
    </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "homeList",
  data() {
    return {
      details: [
        {
          imgUrl: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          name: '辣炒海虹'
        }, {
          imgUrl: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          name: '辣炒海虹'
        }, {
          imgUrl: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          name: '辣炒海虹'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .list-container {
    width: 100%;
    background: #ffffff;
    border-radius: 10rpx;
    padding: 24rpx 30rpx;
    box-sizing: border-box;
  }

  .title {
    color: #101001;
    font-size: 32rpx;
  }

  .score {
    color: #00B2B2;
    font-size: 24rpx;
  }

  .nextTitle {
    color: #666666;
    font-size: 24rpx;
  }

  .list-img-box{
    width: 200rpx;
    height: 200rpx;
    overflow: hidden;
  }
  .list-img-box div{
    width: 100%;
    height: 100%;
  }
  .list-img-name{
    color: #333333;
    font-size: 24rpx;
    text-align: center;
  }
</style>
