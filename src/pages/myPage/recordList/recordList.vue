<template>
  <div>
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
          <div class="record-head" :style="'background:url('+downImg(item.expand.consumerHeadPortrait)+') center/cover no-repeat'"></div>
          <div class="record-right flex-row vertical-center flow-justify">
            <div class="flex-col">
              <p class="record-msg common-black-text">{{types[item.type][item.subType]}}</p>
              <p class="record-time">{{item.accountTime}}</p>
            </div>
            <div class="record-status">
              <div>
                <p class="big-text">{{item.type == 2 ? '-' : ''}}{{item.amount}}AUD</p>
                <p class="small-text">{{item.type == 2 ? '-' : ''}}{{item.vbcAmount}}VBC</p>
              </div>
            </div>
          </div>
        </div>
        <no-result :isBottom="isBottom" :listLength="list.length"></no-result>
      </scroll-view>
    </div>
  </div>
</template>

<script>
import noResult from '@/components/noResult/noResult'
import recordType from '@/constant/recordType'
import {loadMixin} from '@/mixin'

export default {
  name: "recordList",
  components:{
    noResult
  },
  mixins:[loadMixin],
  data() {
    return {
      list: [],
      typeList:['全部','进账','支出'],
      chooseDate: this.getDate(),
      typeIndex:0,
      pageNo:'1',
      pageSize:'10',
      pageTotal:'',
      isBottom:false,
      types:recordType,
    }
  },
  mounted(){
    this.getList();
  },
  methods:{
    async getList(){
      const params = {
        month : this.chooseDate,
        type : this.typeIndex,
        pageNo : this.pageNo,
        pageSize : this.pageSize
      };
      const result = await this.$api.accountList(params);
      if (result.code == 200) {
        this.pageTotal = result.result.pages;
        this.list = this.list.concat(result.result.records);
        console.log('pageNo',this.pageNo)
        console.log('pageTotal',this.pageTotal)
        if (this.pageNo == this.pageTotal) {
          this.isBottom = true;
        };
        if (this.pageNo == 1 && result.result.records.length == 0) {
          this.list = [];
        }
        this.list.expand = JSON.stringify(this.list.expand)
        console.log('list',this.list)
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
      // console.log('picker发送选择改变，携带值为', e.mp.detail.value);
      this.typeIndex = e.mp.detail.value
      this.pageNo = 1;
      this.isBottom = false;
      this.getList();
    },
    searchScrollLower(e){
      if (this.pageNo == this.pageTotal) {
        this.isBottom = true;
        return;
      };
      this.pageNo++;
      this.getList();
    },
    getDate(){
      var timestamp = Date.parse(new Date());
      var date = new Date(timestamp);
      //获取年份  
      var Y =date.getFullYear();
      //获取月份  
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
      //获取当日日期 
      var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      return Y + '-' + M;
    },
  }
}
</script>

<style scoped>
  scroll-view{
    height: calc(100vh - 100rpx);
  }
  .recordList{
    padding: 20rpx 0;
    border-bottom: 2rpx solid #dddddd;
  }
  .record-head {
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
  }
  .record-right{
    width: calc(100% - 100rpx - 30rpx);
  }
  .record-time{
    font-size: 24rpx;
    color: #999999;
  }
  .record-status .green{
    color: #31B9A5;
  }
  .big-text{
    font-size: 40rpx;
    color: #101010;
  }
  .small-text{
    font-size: 32rpx;
    color: #101010;
  }
  .red{
    color: #E51C23;
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
</style>
