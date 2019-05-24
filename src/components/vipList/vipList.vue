<template>
  <div class="list-container common-padding">
    <div class="card-container flex-col flow-justify" v-for="(item,index) in cards"
         :key="index" :class="{'diamond':item.level==1,'golden':item.level==2,'silver':item.level==3}">
      <div class="flex-row">
        <div class="header-img" :style="'background:url('+item.head+') center/cover no-repeat'"></div>
        <div class="head-msg  flex-col flow-justify">
          <p class="head-name">{{item.name}}</p>
          <div class="flex-row vertical-center">
            <div class="vip-logo">
              <img v-if="item.level == 3" src="../../../static/images/vip1.png" alt="vipLogo">
              <img v-else-if="item.level !=3" src="../../../static/images/vip0.png" alt="vipLogo">
            </div>
            <div class="vip-name">
              <p v-if="item.level==1">钻贝会员</p>
              <p v-else-if="item.level==2">金贝会员</p>
              <p v-else="item.level==3">银贝会员</p>
            </div>
          </div>
        </div>
      </div>
      <p class="vip-notice">累计消费1235AUD | 下一等级还需765AUD</p>
      <p v-if="item.notice" class="notice-box">{{item.notice}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "vipList",
  data(){
    return{
      cards:[{
        level:'1',
        name:'Phuong Restaurant',
        notice:'5',
        head:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
      },{
        level:'2',
        name:'Phuong Restaurant',
        notice:'',
        head:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
      },{
        level:'3',
        name:'Phuong Restaurant',
        notice:'5',
        head:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
      },{
        level:'3',
        name:'Phuong Restaurant',
        notice:'5',
        head:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640'
      }]
    }
  },
}
</script>

<style scoped>
  .card-container{
    width: 100%;
    height: 240rpx;
    padding: 20rpx;
    margin: 20rpx 0;
    border-radius: 20rpx;
    box-sizing: border-box;
    position: relative;
  }
  .diamond{
    background: #59A0FF;
  }
  .golden{
    background: #FF9800;
  }
  .silver{
    background: #DDDDDD;
  }
  .header-img{
    width: 120rpx;
    height: 120rpx;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    margin-right: 20rpx;
  }
  .diamond p,
  .golden p{
    color: #ffffff;
  }
  .vip-logo img{
    width: 42rpx;
    height: 36rpx;
    margin-right: 10rpx;
  }
  .vip-notice{
    font-size: 24rpx;
    opacity: 0.8;
  }
  .head-name{
    font-size: 36rpx;
  }
  .vip-name{
    font-size: 28rpx;
  }
  .notice-box{
    width: 48rpx;
    height: 48rpx;
    border-radius: 50%;
    background: #E51C23;
    line-height: 48rpx;
    color: #ffffff;
    text-align: center;
    position: absolute;
    top: 40rpx;
    right: 40rpx;
  }
</style>
