<template>
  <div class="common-padding">
    <div class="flex-row vertical-center flow-justify info-item">
      <p>头像</p>
      <div class="flex-row vertical-center" @tap="uploadAvatar">
        <div class="info-avatar" :style="'background:url('+ userInfo.headPortrait + ') center/cover no-repeat'"></div>
        <img src="../../../../static/images/right2.png" alt="icon" class="right-icon">
      </div>
    </div>
    <div class="flex-row vertical-center flow-justify info-item" @tap="clickItem(1,userInfo.nickname)">
      <p>昵称</p>
      <div class="flex-row vertical-center">
        <p>{{userInfo.nickname}}</p>
        <img src="../../../../static/images/right2.png" alt="icon" class="right-icon">
      </div>
    </div>
    <div class="flex-row vertical-center flow-justify info-item" @tap="clickItem(2,userInfo.email)">
      <p>电子邮箱</p>
      <div class="flex-row vertical-center">
        <p>{{userInfo.email}}</p>
        <img src="../../../../static/images/right2.png" alt="icon" class="right-icon">
      </div>
    </div>
    <div class="flex-row vertical-center flow-justify info-item">
      <p>所在地区</p>
      <div class="flex-row vertical-center">
        <!--<p>{{userInfo.location}}</p>-->
        <picker mode="multiSelector" @change="bindMultiPickerChange" @columnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="multiArray">
          <view class="picker">
            <p>{{userInfo.location || '请选择'}}</p>
          </view>
        </picker>
        <img src="../../../../static/images/right2.png" alt="icon" class="right-icon">
      </div>
    </div>
    <common-dialog :dialogTitle="dialogTitle" ref="commonDialog" @dialogSubmit="dialogSubmit">
      <div slot="dialogCenter">
        <input class="dialog-input" type="text" v-model="dialogValue">
      </div>
    </common-dialog>
  </div>
</template>

<script>
import commonDialog from '@/components/commonDialog/commonDialog'
import {loadMixin} from '@/mixin'

export default {
  name: "myInfo",
  components:{
    commonDialog
  },
  data(){
    return{
      userInfo:{},
      dialogTitle:'',
      dialogValue:'',
      dialogType:'',
      regions:[],
      cityList:[],
      multiArray:[],
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
    this.getUserInfo();

    // wx.getLocation({
    //   type: 'wgs84',
    //   success (res) {
    //     const latitude = res.latitude
    //     const longitude = res.longitude
    //     const speed = res.speed
    //     const accuracy = res.accuracy
    //   }
    // })

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
      });
    });
  },
  methods:{
    async getUserInfo(){
      const _this = this;
      const result = await _this.$api.getUserInfo();
      if (result.code == 200) {
        _this.userInfo = result.result;
        if (!_this.userInfo.headPortrait) {
          _this.userInfo.headPortrait = wx.getStorageSync('userInfo').avatarUrl
        } else {
          _this.userInfo.headPortrait = _this.downImg(_this.userInfo.headPortrait);
        }

        if (!_this.userInfo.nickname) {
          _this.userInfo.nickname = wx.getStorageSync('userInfo').nickName
        }
        _this.localCode = _this.userInfo.location.substr(0,_this.userInfo.location.length-3);

        _this.getRegions(_this.localCode, res =>{
          const locationList = res.result;
          locationList.forEach(item => {
            if (item.code == _this.userInfo.location) {
              _this.userInfo.location = item.name;
            }
          })
        });

      }
    },
    clickItem(type,value){
      if (type == 1) {
        this.dialogTitle = '昵称';
      } else if (type == 2) {
        this.dialogTitle = '电子邮箱';
      }

      this.dialogValue = value;
      this.dialogType = type;
      this.$refs.commonDialog.open();
    },
    uploadAvatar(){
      wx.chooseImage({
        success (res) {
          const tempFilePaths = res.tempFilePaths
          wx.uploadFile({
            url: 'https://3.104.54.171:7443/miniapp/changeHeadPortrait', //仅为示例，非真实的接口地址
            filePath: tempFilePaths[0],
            name: 'headPortrait',
            success (res){
              const data = res.data
              //do something
            }
          })
        }
      })
    },
    dialogSubmit(){
      if (this.dialogType == 1) {
        this.changeNickname();
      } else if (this.dialogType == 2) {
        this.changeEmail();
      }

    },
    async changeNickname () {
      const params = {
        nickname : this.dialogValue
      };
      const result = await this.$api.changeNickname(params);
      if (result.code == 200) {
        wx.showToast({
          title: '修改成功',
          icon: 'success',
          duration: 2000
        });
        this.$refs.commonDialog.cancel();
        this.getUserInfo();
      } else {
        wx.showToast({
          title: result.message,
          icon: 'error',
          duration: 2000
        })
      }
    },
    async changeEmail () {
      const params = {
        email : this.dialogValue
      };

      const result = await this.$api.changeEmail(params);
      if (result.code == 200) {
        wx.showToast({
          title: '修改成功',
          icon: 'success',
          duration: 2000
        });
        this.$refs.commonDialog.cancel();
        this.getUserInfo();
      } else {
        wx.showToast({
          title: result.message,
          icon: none,
          duration: 2000
        })
      }
    },
    bindMultiPickerChange(e){
      this.multiIndex = e.mp.detail.value;
      this.changeAddress(this.currentCitykey);
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
    async changeAddress(data){
      const params = {
        location:data
      };
      const result = await this.$api.changeLocation(params);
      console.log('result',result)
      if (result.code == '200') {
        console.log(1)
        wx.showToast({
          title: '修改成功',
          icon: 'success',
          duration: 2000
        });
        this.getUserInfo();
      } else {
        // wx.showToast({
        //   title: result.message,
        //   icon: none,
        //   duration: 2000
        // })
      }
    },
  }
}
</script>

<style scoped>
  .info-item{
    height: 80rpx;
    border-bottom: 1rpx solid #dddddd;
  }
  .info-item:first-child{
    height: 120rpx;
  }
  .info-item p{
    font-size: 28rpx;
    color: #101010;
  }
  .info-avatar{
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
  }
  .dialog-box input{
    border-bottom: 2rpx solid #dddddd;
  }
</style>
