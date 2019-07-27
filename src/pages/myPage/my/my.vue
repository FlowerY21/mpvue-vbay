<template>
  <div>
    <div class="my-top flex-col vertical-center" @tap="goDetail">
      <div class="my-head" :style="'background:url('+ 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640' + ') center/cover no-repeat'"></div>
      <p class="user-name">FlowerY21</p>
      <p class="user-tip">Address:{{userInfo.email}}l</p>
      <p class="data-msg">资料完整度：75%</p>
      <progress class="data-percent" :percent="percent" active stroke-width="4" color="#FF9800"/>
    </div>
    <div>
      <div class="my-list" v-for="(list,index) in lists" :key="index">
        <div class="my-item-list flex-row vertical-center flow-justify common-padding"
             v-for="(item,index2) in list.itemList" :key="index2" @tap="goPage(index2)">
          <div class="flex-row vertical-center">
            <img v-if="item.iconImg" :src="item.iconImg" alt="icon" class="icon" :class="{'time-icon':index2 == 3}">
            <p class="item-name">{{item.name}}</p>
          </div>
          <div class="flex-row vertical-center">
            <div v-if="index == 0 && index2 == 0">
              <p class="level-text" v-if="userInfo.idCardPhotoVerified == 2">LV.2</p>
              <p class="level-text" v-else>{{userInfo.idCardVerified == 2 ? 'LV.1' : ''}}</p>
            </div>

            <img src="../../../../static/images/right2.png" alt="icon" class="right-icon">
          </div>

        </div>
      </div>
    </div>
    <div class="common-padding">
      <button class="button-class" type="default" @tap="exit()" >登出</button>
    </div>

  </div>
</template>

<script>
  export default {
    name: "my",
    data(){
      return{
        percent:75,
        lists:[{
          itemList:[{
            iconImg:'../../../static/images/icon1.png',
            name:'实名认证',
          },{
            iconImg:'../../../static/images/icon2.png',
            name:'邀请朋友',
          },{
            iconImg:'../../../static/images/icon3.png',
            name:'交易记录',
          },{
            iconImg:'../../../static/images/icon4.png',
            name:'我的活动',
          }]
        },{
          itemList:[{
            name:'反馈',
          },{

            name:'服务条款',
          },{

            name:'隐私政策',
          },{

            name:'关于VBAY',
          }]
        }],
        userInfo:{},
      }
    },
    mounted(){
      const _this = this;
      _this.getUserInfo();
      console.log('e',_this)
    },
    methods:{
      exit(){},
      goPage(index){
        if(index == 3){
          wx.navigateTo({
            url: '../../myPage/activity/main'
          })
        }
        if(index == 2){
          wx.navigateTo({
            url: '../../myPage/recordList/main'
          })
        }
        if(index == 0){
          wx.navigateTo({
            url: '../../myPage/certification/main'
          })
        }
      },
      goDetail(){
        wx.navigateTo({
          url: '../myInfo/main'
        })
      },
      async getUserInfo(){
        const _this = this;
        const result = await _this.$api.getUserInfo();
        console.log('userInfo',result)
        if (result.code == 200) {
          _this.userInfo = result.result;
        }
      },
    }
  }
</script>

<style scoped>
  .my-top {
    width: 100%;
    background: #31B9A5;
    padding: 60rpx 0 40rpx;
  }

  .my-head {
    width:120rpx;
    height:120rpx;
    border-radius:50%;
  }
  .user-name{
    font-size:56rpx;
    color:#ffffff;
  }
  .user-tip{
    font-size:30rpx;
    color: #ffffff;
    opacity: 0.5;
    margin: 10rpx 0;
  }
  .data-msg{
    font-size:28rpx;
    color: #ffffff;
    margin: 50rpx 0 20rpx;
  }
  .data-percent{
    width: 80%;
  }
  .my-list{
    margin-top: 20rpx;
  }
  .my-item-list{
    height: 90rpx;
    border-bottom: 2rpx solid #dddddd;
  }
  .my-item-list:first-child{
    border-top: 2rpx solid #dddddd;
  }
  .icon{
    width: 50rpx;
    height: 50rpx;
    margin-right: 10rpx;
  }
  .right-icon{
    width: 30rpx;
    height: 30rpx;
  }
  .item-name{
    font-size: 28rpx;
    color: #101010;
    line-height: 90rpx;
  }
  .button-class{
    width: 100%;
    height: 80rpx;
    color: #ffffff;
    line-height: 80rpx;
    text-align: center;
    background: #31B9A5;
    border-radius: 80rpx;
    font-size: 28rpx;
    margin: 60rpx 0 40rpx;
  }
  .time-icon{
    width: 50rpx;
    height: 46rpx;
  }
  .level-text{
    color: #31B9A5;
    font-size: 28rpx;
  }
</style>
