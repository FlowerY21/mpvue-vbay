<template>
  <div class="picker-wraper">
    <picker mode="selector" @change="bindPickerChange" :value="index" :range="array">
      <!--<view class="picker">当前选择：{{array[index]}}</view>-->
    </picker>
  </div>
</template>

<script>
export default {
  name: "commonSelect",
  data() {
    return {
      array: ['美国', '中国', '巴西', '日本'],
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
    }
  },
  methods:{
    bindPickerChange(){
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index: e.detail.value
      })
    }
  }
}
</script>

<style scoped>
.picker-wraper{
  width: 100%;
  height: 200rpx;
}
</style>
