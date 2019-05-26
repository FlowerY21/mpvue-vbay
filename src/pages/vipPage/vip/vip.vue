<template>
  <div>
    <common-select></common-select>
    <vip-list></vip-list>
  </div>
</template>

<script>
import vipList from '@/components/vipList/vipList'
import commonSelect from '@/components/commonSelect/commonSelect'
export default {
  name: "vip",
  components:{
    vipList,commonSelect
  }
}
</script>

<style scoped>

</style>
