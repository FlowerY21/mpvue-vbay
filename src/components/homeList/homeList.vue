<template>
  <div class="home-list">
    <div class="list-tab flex-row vertical-center" v-if="tabIndex == 2">
      <p v-for="(item,index2) in listTabs" :key="index2" @tap="clickListTap(index2)" :class="{'on':tabShow == index2}">
        {{item.value}}</p>
    </div>
    <div class="list-container common-padding" v-for="(info,index) in details" :key="index" @tap="goDetail(info.id)">
      <div v-if="tabIndex == 6">
        <div class="flex-row flow-justify">
          <h3 class="title">{{info.title}}</h3>
          <div class="flex-row vertical-center">
            <p class="activity-price">$0~980</p>
          </div>
        </div>
        <div class="flex-row title-center mar-bottom">
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
        <div class="flex-row title-center">
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
  </div>
</template>

<script>
export default {
  name: "homeList",
  props: {
    tabIndex: {
      type: String,
      default: '0',
    }
  },
  data() {
    return {
      listTabs: [
        {
          id: 0,
          value: '全部'
        }, {
          id: 1,
          value: 'Asian'
        }, {
          id: 2,
          value: 'Cafe'
        }, {
          id: 3,
          value: 'Chinese'
        }, {
          id: 4,
          value: 'Casual Dining'
        },
      ],
      details: [
        {
          id:1,
          title: '北悉尼商会',
          score: 4.6,
          length: 1.7,
          address: 'Crows Nest St',
          type: '泰国菜',
          country: 'Vietnamese',
          activityImgUrl: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          imgList: [
            {
              imgUrl: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
              name: '辣炒海虹'
            }, {
              imgUrl: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
              name: '辣炒海虹'
            }, {
              imgUrl: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
              name: '辣炒海虹'
            }
          ]
        }, {
          id:2,
          title: '北悉尼商会',
          score: 4.6,
          length: 1.7,
          address: 'Crows Nest St',
          type: '泰国菜',
          country: 'Vietnamese',
          imgList: [],
          activityImgUrl: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          videoUrl: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
          videoImg: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
        }, {
          id:3,
          title: '北悉尼商会',
          score: 4.6,
          length: 1.7,
          address: 'Crows Nest St',
          type: '泰国菜',
          country: 'Vietnamese',
          activityImgUrl: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          imgList: [
            {
              imgUrl: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
              name: '辣炒海虹'
            }, {
              imgUrl: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
              name: '辣炒海虹'
            }, {
              imgUrl: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
              name: '辣炒海虹'
            }
          ]
        }
      ],
      tabShow: '',
    }
  },
  methods: {
    clickListTap(index) {
      this.tabShow = index;
    },
    goDetail(id){
      wx.navigateTo({
        url: '../../businessPage/business/main?id='+id
      })
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
  }

  .list-tab p {
    font-size: 28rpx;
    color: #101010;
    margin-right: 28rpx;
  }

  .list-tab .on {
    color: #00B2B2;
  }

  .activity-price {
    color: #FF9800;
    font-size: 28rpx;
  }

  .activity-img-box {
    width: 100%;
    height: 262rpx;
  }
</style>
