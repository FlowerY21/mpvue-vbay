<template>
  <div class="content-warper">
    <div class="tab-container">
      <swiper :autoplay="autoplay" :display-multiple-items="multipleItem">
        <swiper-item v-for="(item,index) in tabList" :key="index" @tap="tabChange(index)" :class="{'on':index == showClass}">
          <p>{{item.name}}</p>
        </swiper-item>
      </swiper>
    </div>

    <div class="content-box common-padding">
      <home-list :tabIndex="showClass" :listTabs="listTabs"></home-list>
    </div>

  </div>

</template>

<script>
import homeList from '../homeList/homeList'

export default {
  name: "tabSwiper",
  components: {
    homeList
  },
  props:{
    tabList:{
      type:Array,
      default:()=>[]
    }
  },
  data() {
    return {
      contentList: [{},{}],
      autoplay: false,
      multipleItem: 4,
      showClass:'',
      listTabs:[]
    }
  },
  methods: {
    tabChange(index) {
      this.showClass = index;
      if(this.tabList[index].type == 'ExhibitionType'){
        this.listTabs = this.tabList[index].subTypes
      }
    }
  }
}
</script>

<style scoped>
  .tab-container {
    width: 100%;
    height: 80rpx;
    background: #ffffff;
    overflow: hidden;
    padding-left: 30rpx;
    padding-right: 30rpx;
    box-sizing: border-box;
  }

  .tab-container p {
    font-size: 28rpx;
    line-height: 80rpx;
    text-align: center;
    position: relative;
  }
  .content-box{
    padding-top: 40rpx;
    padding-bottom: 40rpx;
  }
  .tab-container .on p{
    font-size: 32rpx;
  }
  .tab-container .on p::after{
    content: "";
    position: absolute;
    width: 50%;
    height: 10rpx;
    background: #31B9A5;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    -webkit-border-radius: 10rpx;
    -moz-border-radius: 10rpx;
    border-radius: 10rpx;
  }
</style>
