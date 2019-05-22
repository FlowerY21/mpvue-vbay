<template>
  <div class="top-container flex-row absolute-center">
    <!--<span v-if="showLeft" class=""></span>-->
    <!--<slot v-else name="left"></slot>-->
    <p v-if="showTitle" class="title">{{title}}</p>
    <div v-else class="search-container flex-row vertical-center">
      <icon type="search" size="20" class="icon-search" />
      <input type="search" :value="value">
    </div>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: "commonTop",
  props:{
    title: {
      type:String,
      default:''
    },
    showTitle: {
      type:Boolean,
      default:false
    },
    showLeft: {
      type:Boolean,
      default:true
    },

  },
  data(){
    return{
      value:'',
    }
  }
}
</script>

<style scoped>
  .top-container{
    background: #F5F5F5;
    width: 100%;
    height: 110rpx;
  }
  .search-container{
    position: relative;
  }
  .search-container icon{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 10rpx;
    margin: auto;
  }
  .search-container input{
    height: 60rpx;
    background: #ffffff;
  }
</style>
