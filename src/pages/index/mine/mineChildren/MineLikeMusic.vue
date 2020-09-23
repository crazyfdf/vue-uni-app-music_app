<template>
  <view class='mine-like-music'>
    <view class="mine-like-left">
      <image class="mine-like-left-image"
             :src="likeList.coverImgUrl"></image>
      <view class="mine-like-center">
        <view class="mine-like-center-top">我喜欢的音乐</view>
        <view class="mine-like-center-bottom">{{likeList.trackCount}}首</view>
      </view>
    </view>
    <view class="mine-like-right"><text class="iconfont iconhuaban"></text><text>心动模式</text></view>
  </view>
</template>

<script>

export default {
  name: 'MineLikeMusic',
  components: {

  },
  props: {
    likeList: {
      type: Object,
      default () {
        return {}
      }
    }
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

  },
};
</script>

<style scoped lang="scss">
.mine-like-music {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30rpx;
  background-color: #fff;
  border-radius: 10rpx;
  .mine-like-left {
    display: flex;
    &-image {
      width: 100rpx;
      height: 100rpx;
      background-color: red;
      border-radius: 10rpx;
    }
    .mine-like-center {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 20rpx;
      &-top {
        font-size: 28rpx;
      }
      &-bottom {
        font-size: 24rpx;
        color: $text-small;
      }
    }
  }
  .mine-like-right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150rpx;
    height: 50rpx;
    border: 1px solid $border-color;
    border-radius: 25rpx;
    font-size: 22rpx;
    .iconfont {
      font-size: 28rpx;
    }
  }
}
</style>
