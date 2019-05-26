<template>
  <div class="star flex-row">
    <span class="star-item" v-for="(starClass,index2) in starClasses" :key="index2" :class="starClass"></span>
  </div>
</template>

<script>
const CLASS_ON = 'on';
const CLASS_HALF = 'half';
const CLASS_OFF = 'off';
export default {
  name: 'star',
  props: {
    score: {
      type: Number,
      default: 0
    }
  },
  computed: {
    starClasses() {
      const {score} = this;
      const classArr = [];
      const classOn = Math.floor(score);
      const classHalf = score * 10 - classOn * 10;
      for (let i = 0; i < classOn; i++) {
        classArr.push(CLASS_ON)
      }
      if (classHalf >= 5) {
        classArr.push(CLASS_HALF)
      }
      if (classArr.length < 5) {
        classArr.push(CLASS_OFF)
      }
      return classArr;
    }
  }
}
</script>

<style scoped>
  .star-item {
    width: 28rpx;
    height: 28rpx;
    display: block;
  }

  .star .on {
    background: url("../../../static/images/star_on.png") center/cover no-repeat;
  }

  .star .off {
    background: url("../../../static/images/star_off.png") center/cover no-repeat;
  }

  .star .half {
    background: url("../../../static/images/star_half.png") center/cover no-repeat;
  }
</style>
