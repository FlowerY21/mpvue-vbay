<template>
  <div>
    <div class="item-list flex-row vertical-center flow-justify" v-for="(item,index) in itemList" :key="index" @click="goDetail(index)">
      <div class="flex-row vertical-center">
        <p class="level">{{item.level}}</p>
        <p class="common-black-text" :class="{'on':item.type == 1}">{{item.name}}</p>
      </div>
      <img src="../../../../static/images/right2.png" alt="rightIcon" class="right-icon">
    </div>
  </div>
</template>

<script>
export default {
  name: "certification",
  data(){
    return{
      itemList:[{
        level:'LV.1',
        name:'张三 21039948850607708',
        type:0
      },{
        level:'LV.2',
        name:'待审核',
        type:1
      }]
    }
  },
  methods:{
    goDetail(index){
      if (index == 0) {
        wx.navigateTo({
          url: '../../myPage/certificationLevelOne/main'
        })
      } else {
        wx.navigateTo({
          url: '../../myPage/certificationLevelTwo/main'
        })
      }
    }
  }
}
</script>

<style scoped>
  .item-list{
    padding: 30rpx 20rpx;
    box-sizing: border-box;
    border-bottom: 2rpx solid #dddddd;
  }
  .level {
    width: 100rpx;
    height: 60rpx;
    background: #00b2b2;
    text-align: center;
    line-height: 60rpx;
    color: #FFFFFF;
    font-size: 28rpx;
    margin-right: 20rpx
  }

  .right-icon{
    width: 30rpx;
    height: 30rpx;
  }
  .common-black-text.on{
    color: #00b2b2;
  }
</style>
