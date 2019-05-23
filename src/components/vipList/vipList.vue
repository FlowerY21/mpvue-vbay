<template>
  <div class="list-container common-padding">
    <div class="card-container" v-for="(item,index) in cards" :key="index">
      <div class="flex-row">
        <div class="header-img" :style="'background:url('+item.head+') center/cover no-repeat'"></div>
        <div class="head-msg">
          <p>Phuong Restaurant</p>
          <div class="flex-row">
            <img src="" alt="">
            <p>钻贝会员</p>
          </div>
        </div>
      </div>
      <p>累计消费1235AUD | 下一等级还需765AUD</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "vipList",
  data(){
    return{
      cards:[{
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
  }
  .diamond p,
  .silver p{
    color: #ffffff;
  }
</style>
