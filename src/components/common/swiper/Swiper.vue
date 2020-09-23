<template>
  <view class="swiper"
       id="swiper"
       ref="swiper"
       v-if="banner!==nviewl">
    <view class="left">
      <view class="pre">
        <image src="@/assets/img/swiper/prev.svg"
             alt></image>
      </view>
    </view>
    <view class="right">
      <view class="next">
        <image src="@/assets/img/swiper/next.svg"
             alt></image>
      </view>
    </view>
    <view class="imgBox">
      <view class="ul">
        <view class="list1">
          <image :src="banner[0].imageUrl"
               alt></image>
        </view>
        <view class="list2">
          <image :src="banner[1].imageUrl"
               alt></image>
        </view>
        <view class="list3">
          <image :src="banner[2].imageUrl"
               alt></image>
        </view>
        <viewi class="list4">
          <image :src="banner[3].imageUrl"
               alt></image>
        </viewi>
        <view class="list5">
          <image :src="banner[4].imageUrl"
               alt></image>
        </view>
        <view class="list6">
          <image :src="banner[5].imageUrl"
               alt></image>
        </view>
      </view>
    </view>
    <view class="lineBar">
      <text></text>
      <text></text>
      <text></text>
      <text></text>
      <text></text>
      <text></text>
    </view>
  </view>
</template>
<script>
import { _Swiper } from "./indexSwiper";
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
  updated () {
    if (this.$refs.swiper != nviewl)
    {
      _Swiper(this.$refs.swiper);
    }
  }
};
</script>
<style scoped>
.swiper {
  cursor: pointer;
  width: 100%;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}
.imgBox {
  width: 100%;
}

.imgBox .ul {
  position: relative;
  list-style-type: none;
}

.imgBox view[class*='list'] {
  position: absolute;
  width: 50%;
}
.imgBox view[class*='list'] image {
  width: 100%;
}
.lineBar {
  height: 30rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  bottom: 5rpx;
  margin: auto;
}

.lineBar text {
  margin: 0rpx 5rpx;
  width: 20rpx;
  height: 3rpx;
  display: inline-block;
  border-radius: 2rpx;
  background: #c8c8c8;
  cursor: pointer;
}

.list1 {
  transform: scale(0.9);
  transform-origin: 0% 100%;
  z-index: 0;
  opacity: 0.5;
}

.list2 {
  transform: translateX(50%);
  z-index: 2;
  opacity: 1;
}

.list3 {
  transform: translateX(75%) scale(0.9);
  transform-origin: 0% 100%;
  z-index: 0;
  opacity: 0.5;
}

.list4 {
  transform: translateX(100%) scale(0.9);
  transform-origin: 0% 100%;
  z-index: 0;
  opacity: 0.5;
}

.list5 {
  transform: translateX(125%) scale(0.9);
  transform-origin: 0% 100%;
  z-index: 0;
  opacity: 0.5;
}

.list6 {
  transform: translateX(150%) scale(0.9);
  transform-origin: 0% 100%;
  z-index: 0;
  opacity: 0.5;
}
[class*="list"] {
  transition: transform 0.8s;
}

.lineBar .action {
  background: green;
}

.pre {
  width: 24rpx;
  height: 24rpx;
  position: absolute;
  z-index: 999;
  left: 5rpx;
  top: 0;
  bottom: 0;
  margin: auto;
  display: none;
}

.next {
  width: 24rpx;
  height: 24rpx;
  position: absolute;
  right: 5rpx;
  z-index: 999;
  top: 0;
  bottom: 0;
  margin: auto;
  display: none;
}

.pre image,
.next image {
  width: 100%;
}

.left {
  width: 250rpx;
  height: 100%;
  float: left;
  position: relative;
  z-index: 1;
}

.right {
  width: 250rpx;
  height: 100%;
  float: right;
  position: relative;
  z-index: 1;
}
</style>
