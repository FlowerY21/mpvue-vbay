<template>
  <div class="content-warper">
    <div class="tab-container">
      <swiper :autoplay="autoplay" :display-multiple-items="multipleItem">
        <swiper-item v-for="(item,index) in tabList" :key="index" @tap="tabChange(index)" :class="{'on':index == showClass}">
          <p>{{item.name}}</p>
        </swiper-item>
      </swiper>
    </div>

    <div class="content-box common-padding">
      <div class="list-tab flex-row vertical-center" v-if="listTabs.length">
        <p class="common-black-text" v-for="(item,index2) in listTabs" :key="index2" @tap="clickListTap(index2,item.id)" :class="{'on':tabShow == index2}">
          {{item.name}}</p>
      </div>

      <scroll-view scroll-y="true" @scrolltolower="searchScrollLower">
        <home-list :tabIndex="showClass" :listTabs="listTabs"></home-list>
      </scroll-view>
    </div>

  </div>

</template>

<script>
import homeList from '../homeList/homeList'

export default {
  name: "tabSwiper",
  components: {
    homeList
  },
  props:{
    tabList:{
      type:Array,
      default:()=>[]
    }
  },
  data() {
    return {
      contentList: [{},{}],
      autoplay: false,
      multipleItem: 4,
      showClass:'',
      tabShow:'',
      listTabs:[],

      pageNo:'1',
      pageSize:'10',
      pageTotal:'',
      status:-1,
      isBottom:false,
      type:'',
      typeId:'',
      typeSubId:'',
    }
  },
  watch:{
    tabList(val){
      if (val.length) {
        this.type = val[0].type;
        if (this.type == 'ExhibitionType') {
          this.typeId = val[0].id;
          this.typeSubId = val[0].subTypes[0].id;
        }
        console.log(val[0].type)
        this.getbusinessList();
      }
    }
  },
  methods: {
    tabChange(index) {
      this.showClass = index;
      if(this.tabList[index].type == 'ExhibitionType'){
        this.listTabs = this.tabList[index].subTypes
      }
    },
    clickListTap(index) {
      this.tabShow = index;
    },
    async getbusinessList(){
      const params = {
        latitude :  wx.getStorageSync('location').latitude,
        location : wx.getStorageSync('locationCode'),
        longitude : wx.getStorageSync('location').longitude,
        pageNo : this.pageNo,
        pageSize : this.pageSize,
        type : this.type,
      };
      if (this.typeId) {
        params.typeId = this.typeId;
        params.typeSubId = this.typeSubId;
      }
      const result = await this.$api.businessList(params);
      if(result.code == 200){
        this.businessTypeList = result.result;
      }
    },
    searchScrollLower(e){
      if (this.pageNo == this.pageTotal) {
        this.isBottom = true;
        return;
      };
      this.pageNo++;
      this.getbusinessList();
    },
  }
}
</script>

<style scoped>
  .tab-container {
    width: 100%;
    height: 80rpx;
    background: #ffffff;
    overflow: hidden;
    padding-left: 30rpx;
    padding-right: 30rpx;
    box-sizing: border-box;
  }

  .tab-container p {
    font-size: 28rpx;
    line-height: 80rpx;
    text-align: center;
    position: relative;
  }
  .content-box{
    padding-top: 40rpx;
    padding-bottom: 40rpx;
  }
  .tab-container .on p{
    font-size: 32rpx;
  }
  .tab-container .on p::after{
    content: "";
    position: absolute;
    width: 50%;
    height: 10rpx;
    background: #31B9A5;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    -webkit-border-radius: 10rpx;
    -moz-border-radius: 10rpx;
    border-radius: 10rpx;
  }
  .list-tab p {
    margin-right: 28rpx;
  }

  .list-tab .on {
    color: #31B9A5;
  }

</style>
