
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
  .around-justify {
    justify-content: space-around;
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
    color: #31B9A5;
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

  .comment-gray-text{
    font-size: 24rpx;
    color: #9a9a9a;
  }
  .common-black-text{
    font-size: 28rpx;
    color: #101010;
  }

  .diamond{
    background: #59A0FF;
  }
  .golden{
    background: #FF9800;
  }
  .golden-text{
    color: #FF9800;
  }
  .silver{
    background: #DDDDDD;
  }
  scroll-view{
    height: calc(100vh - 100rpx);
  }
  .right-icon{
    width: 30rpx;
    height: 30rpx;
  }
</style>
