<template>
  <view class='songs-list-header'>
    <view class="songs-list-header-item">
      <view class="iconfont iconbofang"></view>
      <view class="songs-list-header-item-text">
        <view class="title">播放全部</view>
        <view class="content">(共{{musicList.length}}首)</view>
      </view>
    </view>
  </view>
</template>

<script>

export default {
  name: 'SongsListHeader',
  components: {

  },
  props: {
    musicList: {
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
.songs-list-header {
  padding: 0 30rpx;
  &-item {
    display: flex;
    align-items: center;
    height: 90rpx;
    .iconfont {
      font-size: 40rpx;
    }
    &-text {
      display: flex;
      align-items: center;
      .title {
        font-size: 32rpx;
        margin-left: 20rpx;
      }
      .content {
        font-size: 24rpx;
        color: $text-small;
      }
    }
  }
}
</style>
