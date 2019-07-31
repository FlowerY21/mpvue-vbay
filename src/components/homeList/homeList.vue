<template>
  <div class="home-list">
    <div class="list-container common-padding" v-for="(info,index) in details" :key="index" @tap="goDetail(info.id)">
      <div v-if="tabIndex == 6">
        <div class="flex-row flow-justify">
          <h3 class="title">{{info.title}}</h3>
          <div class="flex-row vertical-center">
            <p class="activity-price golden-text">$0~980</p>
          </div>
        </div>
        <div class="flex-row vertical-center title-center mar-bottom">
          <img class="position-icon" src="../../../static/images/position-fill.png" alt="positionIcon">
          <p class="nextTitle overflow">47 Willoughby road, Crows Nest, Sydney...</p>
        </div>
        <div class="flex-row vertical-center flow-justify mar-bottom">
          <div class="flex-row vertical-center">
            <img class="time-icon" src="../../../static/images/time.png" alt="timeIcon">
            <p class="nextTitle">05-14 09:00 至 05-16 19:00</p>
          </div>
          <p class="nextTitle">已报名5人 / 不限名额</p>
        </div>
        <div class="activity-img-box" :style="'background: url('+info.activityImgUrl+') center/cover no-repeat'"></div>
      </div>
      <div v-else>
        <div class="flex-row flow-justify">
          <h3 class="title">{{info.title}}</h3>
          <div class="flex-row vertical-center">
            <img class="star-icon" src="../../../static/images/start.png" alt="star-icon">
            <span class="score">{{info.score}}</span>
          </div>
        </div>
        <div class="flex-row title-center vertical-center">
          <img class="position-icon" src="../../../static/images/position-fill.png" alt="positionIcon">
          <p class="nextTitle">{{info.length}} km | {{info.address}}</p>
        </div>
        <p class="nextTitle">{{info.type}}, {{info.country}}</p>
        <div class="flex-row flow-justify" v-if="info.imgList.length>0">
          <div v-for="(item,index2) in info.imgList" :key="index2">
            <div class="list-img-box" :style="'background: url('+item.imgUrl+') center/cover no-repeat'"></div>
            <p class="list-img-name">{{item.name}}</p>
          </div>
        </div>
        <div v-else>
          <video class="video-size" object-fit="cover" play-btn-position="center" controls="true"
                 :poster="info.videoImg" :src="info.videoUrl"></video>
        </div>
      </div>
    </div>
    <!--<no-result :isBottom="isBottom" :listLength="activityList.length"></no-result>-->
  </div>
</template>

<script>
export default {
  name: "homeList",
  props: {
    tabIndex: {
      type: String,
      default: '0',
    },
    listTabs: {
      type: Array,
      default:() =>[]
    }
  },
  data() {
    return {
      details: [],
      tabShow: '',
    }
  },
  methods: {
    clickListTap(index) {
      this.tabShow = index;
    },
    goDetail(id){
      if(this.tabIndex == 6){
        wx.navigateTo({
          url: '../../businessPage/activityDetail/main?id='+id
        })
      }else{
        wx.navigateTo({
          url: '../../businessPage/business/main?id='+id
        })
      }

    }
  }
}
</script>

<style scoped>
  .list-container {
    width: 100%;
    background: #ffffff;
    border-radius: 10rpx;
    padding-top: 24rpx;
    padding-bottom: 24rpx;
    box-sizing: border-box;
    margin: 20rpx 0;
  }

  .title {
    color: #101001;
    font-size: 32rpx;
  }

  .list-img-box {
    width: 200rpx;
    height: 200rpx;
    overflow: hidden;
    margin-top: 10rpx;
  }

  .list-img-box div {
    width: 100%;
    height: 100%;
  }

  .list-img-name {
    color: #333333;
    font-size: 24rpx;
    text-align: center;
    margin-top: 12rpx;
  }

  .title-center {
    margin: 6rpx 0 4rpx;
  }

  .title-center .nextTitle {
    margin: 0;
  }

  .video-size {
    width: 100%;
    height: 260rpx;
    border-radius: 10rpx;
    margin-top: 10rpx;
  }

  .activity-price {
    font-size: 28rpx;
  }

  .activity-img-box {
    width: 100%;
    height: 262rpx;
  }
  .position-icon{
    width: 24rpx;
    height: 24rpx;
  }
</style>
