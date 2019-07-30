<template>
  <div class="picker-wraper common-padding flex-row vertical-center">
    <!--<picker mode="selector" @change="bindPickerChange" :value="index" :range="array">-->
      <!--<div class="flex-row down-tap vertical-center">-->
        <!--<p>{{array[index]}}</p>-->
        <!--<img src="../../../static/images/down.png" alt="downIcon">-->
      <!--</div>-->
    <!--</picker>-->
    <picker mode="date" :value="date" :fields="fields" start="1990-09" end="2090-09" @change="bindDateChange" v-if="showTime">
      <view class="picker">
        {{date}}
      </view>
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
  props:{
    array:{
      type:Array,
      default:()=>[],
    },
    array2:{
      type:Array,
      default:()=>[],
    },
    fields:{
      type:String,
      default:'month'
    },
    showTime:{
      type:Array,
      default:true
    }
  },
  data() {
    return {
      date: this.getDate(),
      index2:0,
    }
  },
  methods:{
    bindDateChange: function(e) {
      // console.log('picker发送选择改变，携带值为', e.mp.detail.value);
      this.date = e.mp.detail.value
    },
    bindPickerChange(e){
      this.index = e.mp.detail.value
    },
    bindPickerChange2(e){
      this.index2 = e.mp.detail.value;
      this.$emit('changePicker',this.index2)
    },
    getDate(){
      var timestamp = Date.parse(new Date());
      var date = new Date(timestamp);
      //获取年份  
      var Y =date.getFullYear();
      //获取月份  
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
      //获取当日日期 
      var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      return Y + '-' + M;
    },
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
