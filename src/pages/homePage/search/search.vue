<template>
  <div>
    <div class="top-container flex-row vertical-center flow-justify common-padding">
      <div class="search-container flex-row vertical-center">
        <icon type="search" size="20" class="icon-search" />
        <input type="search" :value="value" placeholder-class="gray">
      </div>
      <p @tap="handleSearch">搜索</p>
    </div>
    <div v-if="businessList.length">
      <div class="picker-wraper common-padding flex-row vertical-center">
        <picker mode="date" :value="chooseDate" fields="month" start="1990-09" end="2090-09" @change="bindDateChange">
          <div class="flex-row down-tap vertical-center">
            <p>{{chooseDate}}</p>
            <img src="../../../../static/images/down.png" alt="downIcon">
          </div>
        </picker>

        <picker mode="selector" @change="bindPickerChange" :value="typeIndex" :range="typeList">
          <div class="flex-row down-tap vertical-center">
            <p>{{typeList[typeIndex]}}</p>
            <img src="../../../../static/images/down.png" alt="downIcon">
          </div>
        </picker>
      </div>
      <div class="common-padding">
        <scroll-view scroll-y="true" @scrolltolower="searchScrollLower" class="scroll-view">
          <div class="recordList flex-row vertical-center flow-justify" v-for="(item,index) in list" :key="index">

          </div>
          <no-result :isBottom="isBottom" :listLength="list.length"></no-result>
        </scroll-view>
      </div>

    </div>
    <div class="common-padding" v-else>
      <p class="search-title">热门搜索</p>
      <div class="tab-container">
        <span class="common-black-text" v-for="(word , index) in words" :key="index" @tap="handleHotWord(word)">{{word}}</span>
      </div>
    </div>
  </div>



</template>

<script>
export default {
  name: "search",
  data(){
    return{
      value:'',
      words:[],
      businessList:[],
      searchShow:true,
      pageNo:'1',
      pageSize:'10',
      pageTotal:'',
    }
  },
  mounted(){
    this.getHotSearch();
  },
  methods:{
    async getHotSearch() {
      const result = await this.$api.getHotSearch();
      if (result.code == '200') {
        this.words = result.result
      }
    },
    async handleSearch(){
      const params = {
        keyword : this.value,
        latitude : wx.getStorageSync('location').latitude,
        location : wx.getStorageSync('locationCode'),
        longitude : wx.getStorageSync('location').longitude,
        pageNo : this.pageNo,
        pageSize : this.pageSize,
        sort : '',
        typeId : '',
      };
      const result = await this.$api.search();
      if (result.code == '200') {

      }
    },
    bindDateChange: function(e) {
      // console.log('picker发送选择改变，携带值为', e.mp.detail.value);
      this.chooseDate = e.mp.detail.value;
      this.pageNo = 1;
      this.isBottom = false;
      this.getList();
    },
    bindPickerChange(e){
      console.log('picker发送选择改变，携带值为', e.mp.detail.value);
      this.typeIndex = e.mp.detail.value
      this.pageNo = 1;
      this.isBottom = false;
      this.getList();
    },
    handleHotWord(word){
      this.value = word
    },
    searchScrollLower(e){
      if (this.pageNo == this.pageTotal) {
        this.isBottom = true;
        return;
      };
      this.pageNo++;
      this.handleSearch();
    },
  }
}
</script>

<style scoped>
  .top-container{
    background: #F5F5F5;
    width: 100%;
    height: 110rpx;
    box-sizing: border-box;
    border-bottom: 2rpx solid #bbbbbb;
  }
  .search-container{
    position: relative;
  }
  .search-container icon{
    position: absolute;;
    left: 10rpx;
    margin: auto;
  }
  .search-container input{
    height: 60rpx;
    padding-left: 60rpx;
    background: #ffffff;
    width: 70vw;
    border-radius:10rpx;
    border:2rpx solid #bbbbbb;
  }
  .search-title{
    color: #999999;
    font-size: 28rpx;
    margin: 40rpx 0 0;
  }
  .tab-container span{
    padding: 15rpx 30rpx;
    display: inline-block;
    background: #EEEEEE;
    margin: 20rpx 20px 0px 0;
    -webkit-border-radius: 10rpx;
    -moz-border-radius: 10rpx;
    border-radius: 10rpx;
  }
  .gray{
    color: #bbbbbb;
  }
</style>
