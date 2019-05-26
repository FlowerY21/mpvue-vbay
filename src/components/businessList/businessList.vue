<template>
  <div>
    <div class="list-item flex-row vertical-center" v-for="(item,index) in list">
      <div class="business-img" :style="'background: url('+item.imgUrl+') center/cover no-repeat'"></div>
      <div class="business-content flex-col">
        <p class="title">{{item.title}}</p>
        <p class="content">{{item.content}}</p>
        <p class="price">{{item.price}}</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "business-list",
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
  }
  .price{
    font-size: 36rpx;
    color: #E51C23;
  }
</style>
