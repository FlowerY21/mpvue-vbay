<template>
  <div>
    <div class="alert-black-box" :class="{'on':alertShow}">
      <div class="alert-box">
        <div class="common-padding">
          <div class="alert-top flex-row vertical-center flow-justify">
            <img v-if="show" src="../../../static/images/back.png" alt="backIcon" class="back-icon" @tap="goBack()">
            <p class="common-black-text"  v-else>{{alertTitle}}</p>
            <icon @tap="cancel()" type="cancel" size="20"/>
          </div>
          <div class="alert-center">
            <slot></slot>
          </div>
        </div>
        <div class="alert-bottom flex-row vertical-center flow-justify">
          <p class="common-black-text">合计： <span class="golden-text">${{total}}</span></p>
          <button class="button-class" type="default" @tap="next()">下一步</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "signUpAlert",
    props: {
      alertTitle: {
        type: String,
        default: ''
      },
      total: {
        type: String,
        default: ''
      },
      show: {
        type: Boolean,
        default: false
      },
      alertShow: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      next() {
        this.$emit('next')
      },
      cancel() {
        this.$emit('cancel')
      },
      goBack(){
        this.$emit('goBack')
      }
    }
  }
</script>

<style scoped>
  .alert-bottom{
    border-top: 2rpx solid #dddddd;
    padding-left: 30rpx;
  }
  .back-icon{
    width: 40rpx;
    height: 40rpx;
  }
  .alert-bottom{
    width: 100%;
  }
  .alert-black-box{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    opacity: 0;
    -webkit-transform: translateY(100%);
    -moz-transform: translateY(100%);
    -ms-transform: translateY(100%);
    -o-transform: translateY(100%);
    transform: translateY(100%);
  }
  .alert-box{
    width: 100%;
    background: #ffffff;
    position: absolute;
    bottom: 0;
    left: 0;
    padding-top: 30rpx;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transform: translateY(100%);
    -moz-transform: translateY(100%);
    -ms-transform: translateY(100%);
    -o-transform: translateY(100%);
    transform: translateY(100%);
    transition: all 0.3s;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
  }
  .alert-black-box.on{
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  .on .alert-box{
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
  .alert-center{
    margin-top: 30rpx;
  }

  .button-class{
    width: 70%;
    height: 100%;
    background: #59A0FF;
    text-align: center;
    color: #ffffff;
    line-height: 90rpx;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    margin: 0;
  }
</style>
