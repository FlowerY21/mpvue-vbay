<template>
  <div>
    <common-top>
      <div slot="right" >
        <div class="add-button">
          <img src="../../../../static/images/add.png" alt="">
        </div>
      </div>
    </common-top>
    <img-swiper></img-swiper>
    <tab-swiper></tab-swiper>
  </div>
</template>

<script>
  import commonTop from '../../../components/commonTop/commonTop'
  import imgSwiper from '../../../components/imgSwiper/imgSwiper'
  import tabSwiper from '../../../components/tabSwiper/tabSwiper'

  export default {
    name: "home",
    components: {
      commonTop,
      imgSwiper,tabSwiper
    },
    data() {
      return {

      }
    },
    methods:{

    }
  }
</script>

<style scoped>
  page {
    background-color: #f5f5f5;
    height: 100%;
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
</style>
