<template>
  <view class='player-dish'>
    <view class="player-dish-circular">
      <image class="player-dish-image"
             :src="picUrl"
             :animation="animationData"></image>
    </view>
  </view>
</template>

<script>

export default {
  name: 'PlayerDish',
  components: {

  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      animationData: {},
      animation: {},
      num: 0,
      timer: null,
      picUrl: "",
    };
  },
  created () {
    this.animation = uni.createAnimation({
      // duration: 10000,
      // delay: 1000,
      timingFunction: "linear",
    })
    this.animationData = this.animation;
    this.rotateAndScale()
  },
  watch: {
    '$store.state.isPlay': function () {
      this.rotateAndScale()
    },
    '$store.state.playing': function () {
      this.picUrl = this.$store.state.playing.picUrl;
    },
  },
  methods: {
    // 定义动画内容
    rotateAndScale () {
      clearInterval(this.timer)
      if (this.$store.state.isPlay)
      {
        // 定义动画内容
        this.timer = setInterval(() => {
          if (this.num === 360)
          {
            this.num = 0
          } else if (this.num === 0)
          {
            this.num = 360
          }
          this.animation.rotate(this.num).step({ duration: 100 })
          // 导出动画数据传递给data层
          this.animationData = this.animation.export()
          this.num += 2;
        }, 50);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.player-dish {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  &-circular {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 550rpx;
    height: 550rpx;
    background-image: linear-gradient(
      to bottom,
      black 30%,
      #18181a,
      #262626,
      #131315,
      black 70%
    );
    border-radius: 50%;
  }

  &-image {
    // @include center;
    width: 380rpx;
    height: 380rpx;
    border: 2rpx solid black;
    border-radius: 50%;
    background-color: white;
    z-index: 998;
  }
}
</style>
