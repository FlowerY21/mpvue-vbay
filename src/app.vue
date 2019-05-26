
<script>
export default {
    name: "app"
}
</script>

<style>
  page{
    background: #F5F5F5;
  }
  page{
    padding-bottom: 20rpx;
  }
  .flex-1 {
    flex: 1;
  }

  .flex-row {
    display: flex;
  }

  .flex-col {
    display: flex;
    flex-flow: column;
  }

  .absolute-center {
    align-items: center;
    justify-content: center;
  }

  .vertical-center {
    align-items: center;
  }

  .vertical-stretch {
    align-items: stretch;
  }

  .flow-center {
    justify-content: center;
  }

  .flow-justify {
    justify-content: space-between;
  }

  .common-padding{
    padding-left: 30rpx;
    padding-right: 30rpx;
  }

  .star-icon{
    width: 24rpx;
    height: 24rpx;
  }

  .position-icon {
    width: 30rpx;
    height: 30rpx;
  }

  .time-icon {
    width: 24rpx;
    height: 24rpx;
  }

  .score {
    color: #00B2B2;
    font-size: 24rpx;
  }

  .nextTitle {
    color: #666666;
    font-size: 24rpx;
    margin-left: 10rpx;
  }

  .mar-bottom {
    margin-bottom: 30rpx;
  }

  .overflow {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 80%;
  }

  .plane-icon,.phone-icon{
    width: 50rpx;
    height: 50rpx;
  }
</style>
