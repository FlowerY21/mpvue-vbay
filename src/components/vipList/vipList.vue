<template>
  <div class="list-container common-padding">
    <div class="card-container flex-col flow-justify" v-for="(item,index) in cards" @click="handleVipItem(item.businessId)"
         :key="index" :class="{'diamond':item.level==1,'golden':item.level==2,'silver':item.level==3}">
      <div class="flex-row">
        <div class="header-img" :style="'background:url('+downImg(item.businessLogo)+') center/cover no-repeat'"></div>
        <div class="head-msg  flex-col flow-justify">
          <p class="head-name">{{item.businessName}}</p>
          <div class="flex-row vertical-center">
            <div class="vip-logo">
              <img v-if="item.level == 3" src="../../../static/images/vip1.png" alt="vipLogo">
              <img v-else-if="item.level !=3" src="../../../static/images/vip0.png" alt="vipLogo">
            </div>
            <!--<div class="vip-name">-->
              <!--<p v-if="item.level==1">钻贝会员</p>-->
              <!--<p v-else-if="item.level==2">金贝会员</p>-->
              <!--<p v-else="item.level==3">银贝会员</p>-->
            <!--</div>-->
            <div class="vip-name">
              <p>{{item.vipTypeName}}</p>
            </div>
          </div>
        </div>
      </div>
      <p class="vip-notice">累计消费{{item.consume}}AUD | 下一等级还需{{item.needConsume}}AUD</p>
      <p v-if="item.notice" class="notice-box">{{item.notice}}</p>
    </div>
  </div>
</template>

<script>
import {loadMixin} from '@/mixin'

export default {
  name: "vipList",
  props:{
    cards:{
      type:Array,
      default:() => []
    }
  },
  mixins:[loadMixin],
  methods:{
    handleVipItem(id){
      this.$emit('handleVipItem',id)
    }
  }
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
