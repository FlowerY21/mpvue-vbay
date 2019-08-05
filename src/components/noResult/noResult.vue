<template>
  <div>
    <p v-if="listLength == 0 " class="is-bottom">暂无数据</p>
    <p class="is-bottom" v-else>{{isBottom ? '已全部加载' : '下拉刷新'}}</p>
  </div>
</template>

<script>
export default {
  name: 'noResult',
  props:{
    listLength:{
      type:Number,
      default:0,
    },
    isBottom:{
      type:Boolean,
      default:false,
    }
  },
}
</script>

<style>

  .is-bottom{
    font-size: 28rpx;
    color: #999999;
    text-align: center;
    line-height: 100rpx;
  }
</style>
