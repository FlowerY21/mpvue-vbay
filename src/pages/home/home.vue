<template>
  <div>
    <img-swiper></img-swiper>
    <tab-swiper></tab-swiper>
  </div>
</template>

<script>
  import imgSwiper from '../../components/imgSwiper/imgSwiper'
  import tabSwiper from '../../components/tabSwiper/tabSwiper'

  export default {
    name: "home",
    components: {
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
