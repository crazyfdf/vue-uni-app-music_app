<template>
  <view class='mine-music-collection'>
    <view class="mine-music-collection-header">
      <view class="mine-music-collection-header-left">收藏歌单</view>
      <view class="mine-music-collection-header-right iconfont iconliebiao-dian"></view>
    </view>
    <view class="mine-music-collection-bottom">
      暂无收藏的歌单
    </view>
  </view>
</template>

<script>

export default {
  name: 'MineMusicCollection',
  components: {

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

  },
};
</script>

<style scoped lang="scss">
.mine-music-collection {
  min-height: 220rpx;
  padding: 30rpx;
  margin-top: 20rpx;
  border-radius: 10rpx;
  background-color: #fff;
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30rpx;
    &-left {
      font-size: 28rpx;
    }
    &-right {
      font-size: 28rpx;
    }
  }
  &-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
