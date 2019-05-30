<template>
  <div>
    <div class="list-tab flex-row vertical-center">
      <p v-for="(item,index2) in listTabs" :key="index2" @tap="clickListTap(index2)" :class="{'on':tabShow == index2}">
        {{item.value}}</p>
    </div>
    <div class="activity-list">
      <div class="list-item" v-for="(list,index) in activityList" :key="index" v-if="tabShow == list.status || tabShow == 0">
        <div class="item-top common-padding">
          <div class="flex-row vertical-center flow-justify">
            <div class="flex-row vertical-center">
              <div class="logo" :style="'background: url('+list.logo+') center/cover no-repeat'"></div>
              <p class="comment-gray-text">{{list.name}}</p>
            </div>
            <div>
              <p class="golden-text" v-if="list.status == 1">待参与</p>
              <p class="golden-text" v-else-if="list.status == 2">退款</p>
              <p class="golden-text" v-else>完成</p>
            </div>
          </div>
        </div>
        <div class="item-center flex-row flow-justify">
          <div class="goods" :style="'background: url('+list.goodsImg+') center/cover no-repeat'"></div>
          <div class="goods-right flow-col around-justify">
            <p class="goods-title">新品试吃活动</p>
            <div>
              <p class="comment-gray-text">05-14 09:00 至 05-16 19:00</p>
              <p class="overflow common-black-text">47 Willoughby road, Crows...</p>
            </div>
          </div>
        </div>
        <div class="item-bottom common-padding flex-row vertical-center">
          <p class="comment-gray-text">取消报名</p>
          <button class="button-class common-black-text" type="default" @tap="goPage()" >查看电子票</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "activity",
  data() {
    return {
      listTabs:[
        {
          id:0,
          value:'全部'
        },
        {
          id:1,
          value:'待参与'
        },{
          id:2,
          value:'退款'
        },{
          id:3,
          value:'完成'
        }
      ],
      tabShow:'',
      activityList:[{
        logo:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        goodsImg:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name:'商家名称',
        status:1
      },{
        logo:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        goodsImg:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name:'商家名称',
        status:2
      },{
        logo:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        goodsImg:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        name:'商家名称',
        status:3
      }],
    }
  },
  methods:{
    clickListTap(index){
      this.tabShow = index;
    },
    goPage(){

    }
  }
}
</script>

<style scoped>
  .list-tab{
    margin-bottom: 12rpx;
  }
  .list-tab p {
    font-size: 32rpx;
    color: #101010;
    position: relative;
    flex: 1;
    text-align: center;
    line-height: 100rpx;
    background: #ffffff;
  }
  .list-tab .on{
    color: #00B2B2;
  }
  .list-tab .on::after{
    content: '';
    width: 50%;
    height: 2rpx;
    background: #00b2b2;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .logo{
    width: 48rpx;
    height: 48rpx;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    margin-right: 20rpx;
  }
  .item-top{
    height: 70rpx;
    background: #ffffff;;
  }
  .item-top p{
    line-height: 70rpx;
    font-size: 28rpx;
  }
  .goods{
    width: 300rpx;
    height: 200rpx;
  }
  .goods-right{
    width: calc(100% - 300rpx - 30rpx);
  }
  .goods-title{
    font-size: 32rpx;
    color: #101010;
  }
  .item-center{
    padding: 30rpx;
    border: 2rpx solid #dddddd;
    border-left: none;
    border-right: none;
  }
  .button-class{
    width: 200rpx;
    height: 60rpx;
    background: #00b2b2;
    text-align: center;
    color: #ffffff;
    line-height: 60rpx;
    margin-left: 28rpx;
  }
  .item-bottom{
    padding-top: 20rpx;
    padding-bottom: 20rpx;
    background: #ffffff;
    justify-content: end;
    border-bottom: 2rpx solid #dddddd;
    margin-bottom: 20rpx;
  }
</style>
