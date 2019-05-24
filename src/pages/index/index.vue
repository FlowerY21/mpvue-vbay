<template>
  <div>
    <button class="login-button" open-type="getUserInfo"  @getUserInfo="getUserInfo">登录</button>
  </div>
</template>

<script>

export default {
  name:'index',
  data(){
    return{

    }
  },
  mounted(){

  },
  methods:{
    getUserInfo(e){
      console.log(e)
    }
  }
}
</script>

<style scoped>
  .login-button{
    width: 50vw;
    margin-top: 40vh;
  }
</style>
