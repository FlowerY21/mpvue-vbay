<template>
  <!--<div>-->
    <picker mode="multiSelector" @change="bindMultiPickerChange" @columnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="multiArray">
      <view class="picker">
        <p>{{multiArray[1][multiIndex[1]]}}</p>
      </view>
    </picker>
  <!--</div>-->
</template>

<script>
import {loadMixin} from '@/mixin'
export default {
  name: "commonLocation",
  data(){
    return{
      regions:[],
      cityList:[],
      multiArray:[[],[]],
      multiIndex: [0, 0],
      provinceArr:[],
      cityArr:[],
      defaultCode:'',
      currentCitykey:'',
      localCode:''
    }
  },
  mixins:[loadMixin],
  mounted(){
    this.getRegions('AUS',res =>{
      this.regions = res.result;
      this.defaultCode = this.regions[0].code;

      this.provinceArr = this.regions.map((item) => { return item.name });
      this.multiArray = [this.provinceArr,[]];

      this.getRegions(this.defaultCode, res =>{
        this.cityList = res.result;

        this.cityArr = this.cityList.map((item) => { return item.name });
        this.multiArray = [this.provinceArr,this.cityArr];
        this.currentCitykey = this.cityList[0].code;
        this.$emit('default',this.currentCitykey)
      });
    });
  },
  methods:{
    bindMultiPickerChange(e){
      this.multiIndex = e.mp.detail.value;
      console.log(this.multiIndex)
    },
    bindMultiPickerColumnChange(e){
      var column = e.mp.detail.column  // 当前改变的列
      var data = {
        multiIndex: JSON.parse(JSON.stringify(this.multiIndex)),
        multiArray: JSON.parse(JSON.stringify(this.multiArray))
      };
      data.multiIndex[column] = e.mp.detail.value;  // 第几列改变了就是对应multiIndex的第几个，更新它
      switch(column){ // 处理不同的逻辑
        case 0:   // 第一列更改 就是省级的更改
          var currentProvinceKey = this.regions[e.mp.detail.value].code;
          if (currentProvinceKey != this.defaultCode){  // 判断当前的key是不是真正的更新了
            this.getRegions(currentProvinceKey, res =>{
              this.cityList = res.result;

              this.cityArr = this.cityList.map((item) => { return item.name });
              this.multiArray = [this.provinceArr,this.cityArr]
            })  // 获取当前key下面的市级数据
          }
          this.multiIndex[0] = e.mp.detail.value;
          this.multiIndex[1] = 0;  // 将市默认选择第一个
          this.currentCitykey = this.cityList[0].code;

          break;

        case 1:  // 市发生变化
          this.currentCitykey = this.cityList[e.mp.detail.value].code;
          break;
      }
    },
  }
}
</script>

<style scoped>

  .home-top-container p{
    color: #ffffff;
    font-size: 28rpx;
    margin-right: 20rpx;
  }
</style>
