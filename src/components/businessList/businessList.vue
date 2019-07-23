<template>
  <div>
    <div class="list-item flex-row" v-for="(item,index) in list" :key="index">
      <div class="business-img" :style="'background: url('+item.imgUrl+') center/cover no-repeat'"></div>
      <div class="business-content flex-col flow-justify">
        <div>
          <p class="title">{{item.title}}</p>
          <div>
            <div class="activity-content" v-if="tabIndex == 2">
              <p>05-14 09:00 至 05-16 19:00</p>
              <p>已报名5人 / 不限名额</p>
            </div>
            <p class="content" v-else>{{item.content}}</p>
          </div>
        </div>
        <div class="flex-row vertical-center" v-if="tabIndex == 4">
          <img class="star-icon" src="../../../static/images/start.png" alt="star-icon">
          <span class="score">4.6</span>
        </div>
        <div class="flex-row vertical-center flow-justify" v-else>
          <p class="price">{{item.price}}</p>
          <button v-if="tabIndex == 2" type="default"  bindtap="default" class="activity-button" @tap="goDetail()">报名</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "businessList",
  props:{
    tabIndex:{
      type:Number,
      default:0
    }
  },
  data(){
    return{
      list:[{
        id:1,
        imgUrl:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        title:'盐焗虾',
        content:'本菜是以草虾为主料，加入多种调品料制成。',
        price:'$52.9'
      },{
        id:1,
        imgUrl:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        title:'盐焗虾',
        content:'本菜是以草虾为主料，加入多种调品料制成。',
        price:'$52.9'
      },{
        id:1,
        imgUrl:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        title:'盐焗虾',
        content:'本菜是以草虾为主料，加入多种调品料制成。',
        price:'$52.9'
      },{
        id:1,
        imgUrl:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        title:'盐焗虾',
        content:'本菜是以草虾为主料，加入多种调品料制成。',
        price:'$52.9'
      },]
    }
  },
  methods:{
    goDetail(){
      wx.navigateTo({
        url: '../../businessPage/activityDetail/main'
      })
    }
  }
}
</script>

<style scoped>
  .business-img{
    width: 200rpx;
    height: 200rpx;
    margin-right: 30rpx;
  }
  .business-content{
    width: calc(100% - 200rpx - 30rpx);
  }
  .list-item{
    margin: 40rpx 0;
  }
  .title{
    font-size: 32rpx;
    color: #333333;
  }
  .content{
    font-size: 28rpx;
    color: #999999;
    margin: 10rpx 0;
  }
  .price{
    font-size: 36rpx;
    color: #E51C23;
  }
  .activity-content{
    font-size: 24rpx;
    color: #666666;
    margin: 10rpx 0;
  }
  .activity-button{
    background: #31B9A5;
    color: #FFFFFF;
    font-size: 24rpx;
    text-align: center;
    width: 140rpx;
    height: 60rpx;
    line-height: 60rpx;
    margin: 0;
  }
  .score{
    font-size: 32rpx;
  }
  .star-icon{
    width: 32rpx;
    height: 32rpx;
  }
</style>
