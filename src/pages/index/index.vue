<template>
  <div>
    <button class="login-button" @tap="goLogin">登录</button>
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
    wx.getUserInfo({
      success(res) {
        console.log(res)
      }
    })
  },
  methods:{
    goLogin(){

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
