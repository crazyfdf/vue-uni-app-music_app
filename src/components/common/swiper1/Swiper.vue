<template>
  <view>
    <swiper class="swiper"
            :indicator-dots="indicatorDots"
            :autoplay="autoplay"
            :interval="interval"
            :duration="duration">
      <swiper-item v-for="(item,index) in banner"
                   :key="index">
        <view class="swiper-item uni-bg-red">
          <image :src="item.pic"
                 alt></image>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import { uniSwiperDot } from '@dcloudio/uni-ui'


export default {
  name: "Swiper",
  props: {
    banner: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  components: { uniSwiperDot },
  data () {
    return {
      background: ['color1', 'color2', 'color3'],
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,
      current: 0,
      mode: 'round',
    }
  },
  methods: {
    changeIndicatorDots (e) {
      this.indicatorDots = !this.indicatorDots
    },
    changeAutoplay (e) {
      this.autoplay = !this.autoplay
    },
    intervalChange (e) {
      this.interval = e.target.value
    },
    durationChange (e) {
      this.duration = e.target.value
    }
  }
};
</script>

<style scoped  lang="scss">
.swiper {
  margin: 0 30rpx auto;
  border-radius: 10%;
}
</style>