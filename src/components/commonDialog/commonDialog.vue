<template>
  <div>
    <div class="dialog-bg flex-row absolute-center" v-if="dialogShow">
      <div class="dialog-box">
        <p class="dialog-title">{{dialogTitle}}</p>
        <div class="dialog-contant">
          <slot name="dialogCenter"></slot>
        </div>
        <div class="dialog-bottom flex-row vertical-center">
          <button @tap="cancel">取消</button>
          <button @tap="submit">确定</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "commonDialog",
  props:{
    dialogTitle:{
      type:String,
      default:'',
    },

  },
  data(){
    return{
      dialogShow:false,
    }
  },
  methods:{
    open(){
      this.dialogShow = true;
    },
    cancel(){
      this.dialogShow = false;
    },
    submit(){
      this.$emit('dialogSubmit')
    }
  }
}
</script>

<style scoped>
  .dialog-bg{
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
    left: 0;
  }
  .dialog-box{
    width: 80vw;
    background: #ffffff;
  }
  .dialog-title{
    line-height: 80rpx;
    border-bottom: 2rpx solid #dddddd;
    text-align: center;
  }
  .dialog-bottom{
    border-top: 2rpx solid #dddddd;
  }
  .dialog-bottom button{
    flex: 1;
    border-radius: 0;
    border: none;
    background: #ffffff;
    color: #00b2b2;
  }
  .dialog-bottom button:first-child{
    border-right: 2rpx solid #dddddd;
    color: #aaaaaa;
  }
  .dialog-contant{
    padding: 40rpx 20rpx;
  }
</style>
