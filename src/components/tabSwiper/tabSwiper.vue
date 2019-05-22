<template>
  <div class="content-warper">
    <div class="tab-container">
      <swiper :autoplay="autoplay" :display-multiple-items="multipleItem" previous-margin="50rpx">
        <swiper-item v-for="(item,index) in tabList" :key="index">
          <p @tap="tabChange">{{item.label}}</p>
        </swiper-item>
      </swiper>
    </div>

    <div class="content-box">
      <home-list></home-list>
      <!--<swiper :autoplay="autoplay">-->
        <!--<swiper-item v-for="(item,index) in contentList" :key="index">-->
          <!--<home-list></home-list>-->
        <!--</swiper-item>-->
      <!--</swiper>-->
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
  data() {
    return {
      tabList: [
        {
          label: '推荐'
        }, {
          label: '玩乐'
        }, {
          label: '美食'
        }, {
          label: '购物'
        }, {
          label: '服务'
        }, {
          label: '组织'
        }, {
          label: '活动'
        }
      ],
      contentList: [{},{}],
      autoplay: false,
      multipleItem: 5
    }
  },
  methods: {
    tabChange(e) {
      console.log(e)
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
  }

  .tab-container p {
    font-size: 28rpx;
    line-height: 80rpx;
  }
  .content-box{
    padding: 40rpx 30rpx;
  }
  .content-box swiper{
    height: 1500rpx;
  }
</style>
