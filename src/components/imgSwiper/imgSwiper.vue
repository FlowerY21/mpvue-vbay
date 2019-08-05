<template>
  <swiper :indicator-dots="indicatorDots" :autoplay="autoplay"
          :interval="interval" :duration="duration" class="imgSwiper"
          indicator-color="#ffffff">
    <swiper-item v-for="(item,index) in imgList" :key="index">
      <img :src="item.imgUrl" class="slide-image" width="100%"/>
    </swiper-item>
  </swiper>
</template>

<script>
  export default {
    name: "imgSwiper",
    data() {
      return {
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000
      }
    },
    props:{
      imgList:{
        type: Array,
        default:() => []
      }
    },
    watch:{
      imgList(val){
        console.log(val)
      }
    }
  }
</script>

<style scoped>
.imgSwiper image{
  width: 100%;
  height: 300rpx;
}
</style>
