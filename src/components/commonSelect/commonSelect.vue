<template>
  <div class="picker-wraper common-padding flex-row">
    <picker mode="selector" @change="bindPickerChange" :value="index" :range="array">
      <div class="flex-row down-tap vertical-center">
        <p>{{array[index]}}</p>
        <img src="../../../static/images/down.png" alt="downIcon">
      </div>
    </picker>
    <picker mode="selector" @change="bindPickerChange2" :value="index2" :range="array2">
      <div class="flex-row down-tap vertical-center">
        <p>{{array2[index2]}}</p>
        <img src="../../../static/images/down.png" alt="downIcon">
      </div>
    </picker>
  </div>
</template>

<script>
export default {
  name: "commonSelect",
  data() {
    return {
      array: ['全部分类', '中国', '巴西', '日本'],
      objectArray: [
        {
          id: 0,
          name: '美国'
        },
        {
          id: 1,
          name: '中国'
        },
        {
          id: 2,
          name: '巴西'
        },
        {
          id: 3,
          name: '日本'
        }
      ],
      index: 0,
      array2: ['美国', '中国', '巴西', '日本'],
      objectArray2: [
        {
          id: 0,
          name: '美国'
        },
        {
          id: 1,
          name: '中国'
        },
        {
          id: 2,
          name: '巴西'
        },
        {
          id: 3,
          name: '日本'
        }
      ],
      index2: 0,
    }
  },
  methods:{
    bindPickerChange(e){
      this.index = e.mp.detail.value
    },
    bindPickerChange2(e){
      this.index2 = e.mp.detail.value
    }
  }
}
</script>

<style scoped>
.picker-wraper{
  width: 100%;
  height: 100rpx;
  border-bottom: 2rpx solid #dddddd;
}
  .picker-wraper p{
    font-size: 24rpx;
    color: #101010;
    line-height: 100rpx;
  }
  .down-tap{
    margin-right: 100rpx;
  }
  .down-tap img{
    width: 20rpx;
    height: 20rpx;
    margin-left: 20rpx;
  }
</style>
