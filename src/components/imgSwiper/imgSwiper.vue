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
        imgList: [
          {
            imgUrl: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
          },{
            imgUrl: 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640'
          },{
            imgUrl:  'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
          },
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000
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
