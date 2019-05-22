<template>
  <div>
    <common-top></common-top>
    <img-swiper></img-swiper>
    <tab-swiper></tab-swiper>
  </div>
</template>

<script>
  import commonTop from '../../components/commonTop/commonTop'
  import imgSwiper from '../../components/imgSwiper/imgSwiper'
  import tabSwiper from '../../components/tabSwiper/tabSwiper'

  export default {
    name: "home",
    components: {
      commonTop,
      imgSwiper,tabSwiper
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>

</style>
