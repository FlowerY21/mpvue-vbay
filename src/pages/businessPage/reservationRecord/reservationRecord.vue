<template>
  <div>
    <div class="recordList flex-row vertical-center" v-for="(item,index) in list">
      <div class="record-head" :style="'background:url('+item.imgUrl+') center/cover no-repeat'"></div>
      <div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "reservationRecord",
  data() {
    return {
      list: [{
        imgUrl: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      }]
    }
  }
}
</script>

<style scoped>
  .record-head {
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
  }
</style>
