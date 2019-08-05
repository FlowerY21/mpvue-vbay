<template>
  <div>
    <div class="top-container flex-row vertical-center flow-justify common-padding">
      <div class="search-container flex-row vertical-center">
        <icon type="search" size="20" class="icon-search" />
        <input type="search" v-model="value" placeholder-class="gray">
      </div>
      <p @tap="handleSearch">搜索</p>
    </div>
    <div v-if="resultShow">
      <div class="picker-wraper common-padding flex-row vertical-center">
        <picker mode="selector" @change="bindPickerChange2" :value="index2" :range="array2">
          <div class="flex-row down-tap vertical-center">
            <p>{{array2[index2]}}</p>
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
          <!--预留    首页确认后替换  start-->
          <p>预留,首页确认后替换</p>
          <!--<div class="recordList flex-row vertical-center flow-justify" v-for="(item,index) in list" :key="index">-->
           <!---->
          <!--</div>-->
          <!--预留    首页确认后替换   end-->
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
import {loadMixin} from '@/mixin'
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
      typeList:['距离优先','评分优先'],
      typeObj:[{
        lable:'距离优先',
        name:'Distance',
      },{
        lable:'评分优先',
        name:'Score',
      },],
      array2:[],
      businessTypeList:[],
      typeIndex:'0',
      index2:'0',
      typeId:'',
      sort:'',
      resultShow:false,
    }
  },
  mounted(){
    this.getHotSearch();
    this.getBusinessTypeList();
  },
  mixins:[loadMixin],
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
        sort : this.sort,
        typeId : this.typeId,
      };
      const result = await this.$api.search(params);
      if (result.code == '200') {
        this.resultShow = true;
        this.list = result.result.records;
      }
    },
    bindPickerChange(e){
      // console.log('picker发送选择改变，携带值为', e.mp.detail.value);
      this.typeIndex = e.mp.detail.value;
      this.sort = this.typeObj[this.typeIndex].name;
      this.pageNo = 1;
      this.isBottom = false;
      this.handleSearch();
    },
    handleHotWord(word){
      this.value = word;
      this.handleSearch();
    },
    searchScrollLower(e){
      if (this.pageNo == this.pageTotal) {
        this.isBottom = true;
        return;
      };
      this.pageNo++;
      this.handleSearch();
    },
    bindPickerChange2(e){
      this.typeId = this.businessTypeList[e.mp.detail.value].id;
      this.handleSearch();
    },
    async getBusinessTypeList() {
      const result = await this.$api.businessTypeList();
      if (result.code == 200) {
        this.businessTypeList = result.result;
          this.businessTypeList.forEach(item => {
          this.array2.push(item.name);
        })
      }
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
  .picker-wraper{
    width: 100%;
    height: 100rpx;
    border-bottom: 2rpx solid #dddddd;
  }
  .picker-wraper p{
    font-size: 24rpx;
    color: #101010;
    line-height: 100rpx;
  }
  .down-tap{
    margin-right: 100rpx;
  }
  .down-tap img{
    width: 20rpx;
    height: 20rpx;
    margin-left: 20rpx;
  }

  .goods-img{
    width: 200rpx;
    height: 200rpx;
  }
</style>
