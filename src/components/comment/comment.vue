<template>
  <div>
    <div class="comment-list flex-row flow-justify" v-for="(item,index) in list" :key="index">
      <div class="comment-head" :style="'background:url('+item.imgUrl+') center/cover no-repeat'"></div>
      <div class="comment-msg">
        <div class="flex-row vertical-center flow-justify">
          <p class="user-name">赵小花</p>
          <p class="comment-gray-text">5月26日</p>
        </div>
        <div class="flex-row vertical-center">
          <p class="comment-text">打分</p>
          <star :score="4.7"></star>
        </div>
        <p class="overflow-rows comment-text">
          赵小花赵小花赵小花赵小花赵小花赵小花赵小花赵小花
          赵小花赵小花赵小花赵小花赵小花赵小花赵小花赵小花
          赵小花赵小花赵小花赵小花赵小花赵小花赵小花赵小花
          赵小花赵小花赵小花赵小花赵小花赵小花赵小花赵小花
          赵小花赵小花赵小花赵小花赵小花赵小花赵小花赵小花
          赵小花赵小花赵小花赵小花赵小花赵小花赵小花赵小花
        </p>
        <p class="comment-gray-text">全文</p>
      </div>
    </div>
  </div>
</template>

<script>
import star from '../star/star'
export default {
  name: "comment",
  components:{
    star
  },
  data(){
    return{
      list:[
        {
          id:1,
          imgUrl:'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        }
      ]
    }
  }
}
</script>

<style scoped>
  .comment-head{
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
  }
  .comment-msg{
    width: calc(100% - 100rpx - 30rpx);
  }
  .user-name{
    font-size: 30rpx;
    color: #9a9a9a;
  }
  .overflow-rows{
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  }
  .comment-text{
    font-size: 28rpx;
    color: #222222;
    margin: 10rpx 10rpx 10rpx 0rpx;
  }
</style>
