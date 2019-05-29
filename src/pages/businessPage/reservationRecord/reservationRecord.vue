<template>
  <div class="common-padding">
    <div class="recordList flex-row vertical-center flow-justify" v-for="(item,index) in list" :key="index">
      <div class="record-head" :style="'background:url('+item.imgUrl+') center/cover no-repeat'"></div>
      <div class="record-right flex-row vertical-center flow-justify">
        <div class="flex-col">
          <p class="record-msg common-black-text">预订座位 2人，5月15日，12:00</p>
          <p class="record-time">2019-5-12 13:36</p>
        </div>
        <div class="record-status">
          <p class="common-black-text green" v-if="item.status == 0">确认中</p>
          <p class="common-black-text" v-else-if="item.status == 1">失败</p>
          <p class="common-black-text green" v-else>成功</p>
        </div>
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
        status:0
      },{
        imgUrl: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        status:1
      },{
        imgUrl: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        status:2
      }]
    }
  }
}
</script>

<style scoped>
  .recordList{
    padding: 20rpx 0;
    border-bottom: 2rpx solid #dddddd;
  }
  .record-head {
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
  }
  .record-right{
    width: calc(100% - 100rpx - 30rpx);
  }
  .record-time{
    font-size: 24rpx;
    color: #999999;
  }
  .record-status .green{
    color: #00B2B2;
  }
</style>
