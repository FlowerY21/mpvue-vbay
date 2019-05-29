<template>
  <div>
    <div class="top-head" :style="'background: url(' + headImg + ') center/cover no-repeat'"></div>
    <div class="detail-card common-padding">
      <div class="activity-title">
        <p>新品试吃活动</p>
      </div>
      <div class="flex-row vertical-center">
        <img src="../../../../static/images/time.png" alt="timeIcon" class="time-icon">
        <p>05-14 09:00 至 05-16 19:00</p>
      </div>
      <div class="flex-row vertical-center">
        <img src="../../../../static/images/time.png" alt="timeIcon" class="time-icon">
        <p>05-14 09:00 至 05-16 19:00</p>
      </div>
      <div class="flex-row vertical-center">
        <img src="../../../../static/images/time.png" alt="timeIcon" class="time-icon">
        <p>05-14 09:00 至 05-16 19:00</p>
      </div>
      <div class="flex-row vertical-center">
        <img src="../../../../static/images/time.png" alt="timeIcon" class="time-icon">
        <p>05-14 09:00 至 05-16 19:00</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "activityDetail",
    data() {
      return {
        headImg: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
      }
    }
  }
</script>

<style scoped>
  .top-head {
    width: 100%;
    height: 316rpx;
  }
  .detail-card{
    width:100%;
    background:#ffffff;
  }
</style>
