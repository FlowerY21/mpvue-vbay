<template>
  <div>
    <div class="business-img" :style="'background:url('+bigImgUrl+') center/cover no-repeat'"></div>
    <div class="common-padding">
      <p class="business-title">北悉尼商会</p>
      <div class="flex-row vertical-center flow-justify">
        <div class="flex-row vertical-center">
          <img class="star-icon" src="../../../../static/images/start.png" alt="star-icon">
          <span class="score">4.6</span>
        </div>
        <p class="nextTitle">泰国菜, Vietnamese</p>
      </div>
      <div class="business-status">
        <p>营业中 | 08：00-22：00</p>
      </div>
      <div class="flex-row vertical-center flow-justify">
        <div class="flex-row business-address">
          <img src="../../../../static/images/position-fill.png" alt="positionIcon" class="position-icon">
          <p class="nextTitle">47 Willoughby road, Crows Nest, Sydney...</p>
        </div>
        <div class="flex-row vertical-center">
          <img src="../../../../static/images/plane.png" alt="planeIcon" class="plane-icon">
          <div class="line"></div>
          <img src="../../../../static/images/phone.png" alt="phoneIcon" class="phone-icon">
        </div>
      </div>
      <div class="button-box flex-row vertical-center flow-justify">
        <button class="button-class" type="default" plain="true" bindtap="default" >预定</button>
        <button class="button-class" type="default" plain="true" bindtap="default" >付款</button>
      </div>
      <div class="list-tab flex-row vertical-center">
        <p v-for="(item,index2) in listTabs" :key="index2" @tap="clickListTap(index2)" :class="{'on':tabShow == index2}">
          {{item.value}}</p>
      </div>
      <business-list></business-list>
    </div>
  </div>
</template>

<script>
import businessList from '../../../components/businessList/businessList'
export default {
  name: "business",
  components:{
    businessList
  },
  data(){
    return{
      tabShow:0,
      businessId:'',
      bigImgUrl: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      listTabs:[
        {
          id:0,
          value:'推荐'
        },
        {
          id:1,
          value:'评论'
        },{
          id:2,
          value:'活动'
        },{
          id:3,
          value:'会员'
        },{
          id:4,
          value:'合作'
        }
      ],
    }
  },
  mounted(){
    this.businessId = this.$root.$mp.query.id;
  },
  methods:{
    clickListTap(index){
      this.tabShow = index;
    }
  }
}
</script>

<style scoped>
  .business-img{
    width: 100%;
    height: 300rpx;
  }
  .business-status{
    border-top: 2rpx solid #dddddd;
    border-bottom: 2rpx solid #dddddd;
    margin: 20rpx 0;
    height: 60rpx;
  }
  .business-status p{
    font-size: 28rpx;
    color: #666666;
    line-height: 60rpx;
  }
  .business-title{
    font-size: 44rpx;
    color: #101001;
    margin: 24rpx 0 10rpx;
  }
  .score{
    font-size: 32rpx;
  }
  .star-icon{
    width: 32rpx;
    height: 32rpx;
  }
  .nextTitle{
    font-size: 28rpx;
  }
  .line{
    width: 2rpx;
    height: 50rpx;
    background: #dddddd;
    margin: 0 30rpx;
  }
  .button-box{
    margin: 52rpx 0 40rpx;
  }
  .button-class{
    width: 45%;
    height: 54rpx;
    font-size: 28rpx;
    color: #101010;
    line-height: 54rpx;
    margin: 0;
  }
  .list-tab{
    margin-bottom: 56rpx;
  }
  .list-tab p {
    font-size: 32rpx;
    color: #101010;
    margin-right: 46rpx;
    position: relative;
  }
  .list-tab .on{
    color: #00B2B2;
    border-bottom: 2rpx solid #00B2B2;
  }
</style>
