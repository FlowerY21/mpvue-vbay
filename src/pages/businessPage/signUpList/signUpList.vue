<template>
  <div>
    <div class="flex-row vertical-center flow-justify common-padding sign-up-list">
      <div class="list-left flex-row vertical-center">
        <div class="head" style="background:url(https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640) center/cover no-repeat"></div>
        <p class="user common-black-text">赵小花<span class="vip-class golden-text">金贝会员</span></p>
      </div>
      <p class="common-black-text">5月29日</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "signUpList"
  }
</script>

<style scoped>
  .sign-up-list {
    border-bottom: 2rpx solid #dddddd;
    padding-top:20rpx;
    padding-bottom:20rpx;
    width:100%;
    background:#ffffff;
    box-sizing:border-box;
  }

  .head {
    width:80rpx;
    height:80rpx;
    border-radius:50%
  }
  .list-left{

  }
  .user{
    margin-left:26rpx;
  }
  .vip-class{
    width:146rpx;
    height:40rpx;
    display:inline-block;
    background:#FF9800;
    font-size:24rpx;
    color:#ffffff;
    text-align:center;
    line-height:40rpx;
    border-radius:40rpx;
    margin-left:20rpx;
  }
</style>
