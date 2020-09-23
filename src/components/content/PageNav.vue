<template>
  <view class='page-nav'>
    <view class="page-nav-left">
      <view class="iconfont iconjiantou1"
            @click="toBack"></view>
      <view class="page-nav-left-text">
        <slot name="text">歌单</slot>
      </view>
    </view>
    <slot name="right">
      <view class="page-nav-right">
        <view class="page-nav-right-left iconfont iconsearch"></view>
        <view class="iconfont iconliebiao-dian"></view>
      </view>
    </slot>
  </view>
</template>

<script>
import { uniNavBar } from '@dcloudio/uni-ui'

export default {
  name: 'PageNav',
  components: {
    uniNavBar
  },
  props: {

  },
  data () {
    return {
    };
  },
  computed: {

  },
  watch: {

  },
  created () {

  },
  mounted () {

  },
  methods: {
    toBack () {
      let type = this.$store.state.type[this.$store.state.type.length - 1];
      console.log(this.$store.state[type], type);
      this.$store.commit("hiddenPage", type)
      // else
      // {
      // uni.navigateBack({
      //   delta: 1,
      //   animationType: 'pop-out',
      //   animationDuration: 200
      // });
      // }
      // uni.redirectTo({
      //   url: 'test?id=1'
      // });
    }
  },
};
</script>

<style scoped lang="scss">
.page-nav {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100vw - 60rpx);
  margin: 0 30rpx auto;
  padding-top: 80rpx;
  top: 0;
  // background-image: linear-gradient(
  //   to right,
  //   rgb(213, 212, 210),
  //   rgb(205, 194, 198)
  // );
  // background-image: linear-gradient(
  //   to right,
  //   rgba(213, 212, 210, 0.5),
  //   rgba(205, 194, 198, 0.5)
  // );
  &-left,
  &-right {
    display: flex;
    font-size: 32rpx;
    color: white;
    .iconfont {
      font-size: 32rpx;
    }
  }
  &-left {
    &-text {
      margin-left: 30rpx;
    }
  }
  &-right {
    &-left {
      margin-right: 50rpx;
    }
  }
}
</style>
