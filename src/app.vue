
<script>
export default {
    name: "app"
}
</script>

<style>
  page {
    background-color: #f5f5f5;
    height: 100%;
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

</style>
