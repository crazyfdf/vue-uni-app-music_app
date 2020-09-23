<template>
  <view class='play-list-header'>
    <view class="play-list-header-top">当前播放({{list.length-1}})</view>
    <view class="play-list-header-bottom">
      <view class="play-list-header-bottom-left">
        <view class="iconfont iconxunhuan1"></view>
        <text class="text">列表循环</text>
      </view>
      <view class="play-list-header-bottom-right">
        <view class="iconfont icontianjiazengjiajia"></view>
        <text class="text">收藏全部</text>
        <view class="iconfont iconlajitong"></view>
      </view>
    </view>
  </view>
</template>

<script>

export default {
  name: 'PlayListHeader',
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
.play-list-header {
  padding: 30rpx;
  &-top {
    font-size: 32rpx;
  }
  &-bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 20rpx;
    font-size: 24rpx;
    color: $text-small;
    .iconfont {
      font-size: 32rpx;
    }
    .text {
      margin-left: 10rpx;
    }
    &-left,
    &-right {
      display: flex;
      align-items: center;
    }
    &-right {
      justify-content: space-between;
      .iconlajitong {
        padding-left: 30rpx;
        border-left: 1px solid black;
        margin-left: 30rpx;
      }
    }
  }
}
</style>
