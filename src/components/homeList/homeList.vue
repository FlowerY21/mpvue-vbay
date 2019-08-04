<template>
  <div class="home-list">
    <div class="list-container common-padding" v-for="(info,index) in list" :key="index" @tap="goDetail(info.id)">
      <div v-if="info.activity">
        <div class="flex-row flow-justify">
          <h3 class="title">{{info.activity.name}}</h3>
          <div class="flex-row vertical-center">
            <p class="activity-price golden-text">${{info.activity.price}}</p>
          </div>
        </div>
        <div class="flex-row vertical-center title-center mar-bottom">
          <img class="position-icon" src="../../../static/images/position-fill.png" alt="positionIcon">
          <p class="nextTitle overflow">{{info.activity.address}}</p>
        </div>
        <div class="flex-row vertical-center flow-justify mar-bottom">
          <div class="flex-row vertical-center">
            <img class="time-icon" src="../../../static/images/time.png" alt="timeIcon">
            <p class="nextTitle">{{info.activity.beginTime}} 至 {{info.activity.endTime}}</p>
          </div>
          <p class="nextTitle">已报名{{info.activity.consumerCount}}人 / 不限名额</p>
        </div>
        <div class="activity-img-box" :style="'background: url('+info.activity.pic+') center/cover no-repeat'"></div>
      </div>
      {{info.business}}
      <div v-else-if="info.business">
        <div class="flex-row flow-justify">
          <h3 class="title">{{info.business.name}}</h3>
          <div class="flex-row vertical-center">
            <img class="star-icon" src="../../../static/images/start.png" alt="star-icon">
            <span class="score">{{info.business.score}}</span>
          </div>
        </div>
        <div class="flex-row title-center vertical-center">
          <img class="position-icon" src="../../../static/images/position-fill.png" alt="positionIcon">
          <p class="nextTitle">{{info.distance}} {{info.distanceUnit}} | {{info.business.address}}</p>
        </div>
        <p class="nextTitle">{{info.business.carefullyChosenSort}}, {{info.business.location}}</p>
        <div class="flex-row flow-justify" v-if="info.business.video.length>0">
          <div v-for="(item,index2) in info.business.video" :key="index2">
            <!--<div class="list-img-box" :style="'background: url('+item.videoUrl+') center/cover no-repeat'"></div>-->
            <!--<p class="list-img-name">{{item.name}}</p>-->
            <video class="video-size" object-fit="cover" play-btn-position="center" controls="true"
                   :poster="info.videoImg" :src="info.videoUrl"></video>
          </div>
        </div>
        <!--<div>-->
          <!--<video class="video-size" object-fit="cover" play-btn-position="center" controls="true"-->
                 <!--:poster="info.videoImg" :src="info.videoUrl"></video>-->
        <!--</div>-->
      </div>
    </div>
    <no-result :isBottom="isBottom" :listLength="list.length"></no-result>
  </div>
</template>

<script>
export default {
  name: "homeList",
  props: {
    details: {
      type: Array,
      default:() =>[]
    },
    isBottom: {
      type: Boolean,
      default:true
    }
  },
  data() {
    return {
      list:[],
    }
  },
  watch:{
    details(val){
      if (val.business) {
        val.business.forEach(item => {
          item.videos = JSON.stringify(item.videos)
        })
      };
      this.list = val;
      console.log(val)
    }
  },
  methods: {
    goDetail(id){
      // if(this.tabIndex == 6){
      //   wx.navigateTo({
      //     url: '../../businessPage/activityDetail/main?id='+id
      //   })
      // }else{
      //   wx.navigateTo({
      //     url: '../../businessPage/business/main?id='+id
      //   })
      // }

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
