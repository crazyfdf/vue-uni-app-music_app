<template>
  <view>
    <swiper class="swiper"
            :indicator-dots="indicatorDots"
            :autoplay="autoplay"
            :interval="interval"
            :duration="duration">
      <swiper-item v-for="(item,index) in banner"
                   :key="index">
        <view class="swiper-item image-box">
          <image class="swiper-image"
                 :src="item.pic"
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
      indicatorDots: true,
      autoplay: false,
      interval: 2000,
      duration: 500,
      current: 0,
    }
  },
  methods: {

  }
};
</script>

<style scoped lang="scss">
.swiper {
  .image-box {
    width: 100%;
    height: 100%;
    .swiper-image {
      width: 100%;
      height: 100%;
      border-radius: 3%;
    }
  }
}
</style>