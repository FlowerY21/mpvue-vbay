<template>
  <div>
    <common-select :array2="selectList" :showTime="false" @changePicker="changePicker"></common-select>
    <scroll-view scroll-y="true" @scrolltolower="searchScrollLower">
      <vip-list :cards="vipList" @handleVipItem="handleVipItem"></vip-list>
      <no-result :isBottom="isBottom" :listLength="vipList.length"></no-result>
    </scroll-view>
  </div>
</template>

<script>
import vipList from '@/components/vipList/vipList'
import commonSelect from '@/components/commonSelect/commonSelect'
import noResult from '@/components/noResult/noResult'

export default {
  name: "vip",
  components: {
    vipList, commonSelect, noResult
  },
  data() {
    return {
      businessTypeList: [],
      pageNo:'1',
      pageSize:'10',
      pageTotal:'',
      status:-1,
      isBottom:false,
      vipList:[],
      exhibitionTypeId:'',
      selectList:[],
    }
  },
  mounted() {
    this.getBusinessTypeList();
    this.getList();
  },
  methods: {
    async getBusinessTypeList() {
      const result = await this.$api.businessTypeList();
      if (result.code == 200) {
        this.businessTypeList = result.result;
        this.businessTypeList.forEach(item => {
          this.selectList.push(item.name);
        })
      }
    },
    changePicker(val){
      this.exhibitionTypeId = this.businessTypeList[val].id;
      this.getList();
    },
    async getList() {
      const params = {
        pageNo: this.pageNo,
        pageSize: this.pageSize,
      };
      if (this.exhibitionTypeId) {
        params.exhibitionTypeId = this.exhibitionTypeId;
      }
      const result = await  this.$api.myVipList(params);
      if (result.code == 200) {
        this.vipList = this.vipList.concat(result.result.records);

        if (this.pageNo == this.pageTotal) {
          this.isBottom = true;
        };

        if (this.pageNo == 1 && result.result.records.length == 0) {
          this.vipList = [];
        }
      }
    },
    searchScrollLower(e){
      if (this.pageNo == this.pageTotal) {
        this.isBottom = true;
        return;
      };
      this.pageNo++;
      this.getList();
    },
    handleVipItem(id){

    }
  }
}
</script>

<style scoped>

</style>
