<template>
  <view class='songs-list-bottom'>
    <view class="songs-list-bottom-li"
          v-for="(item,index) in musicList"
          :key="index"
          @click="toPath(item)">
      <view class="songs-list-bottom-li-left">
        <view class="songs-list-bottom-li-left-index">{{index+1}}</view>
        <view class="songs-list-bottom-li-left-center">
          <view class="songs-list-bottom-li-left-center-top">{{item.name}}</view>
          <view class="songs-list-bottom-li-left-center-bottom">{{item.song}}</view>
        </view>

      </view>
      <view class="songs-list-bottom-li-right">
        <view class="songs-list-bottom-add iconfont iconzhibo_huaban1"></view>
        <view class="songs-list-bottom-list iconfont iconliebiao-dian"></view>
      </view>
    </view>
  </view>
</template>

<script>

export default {
  name: 'SongsListBottom',
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
    toPath (item) {
      // uni.navigateTo({
      //   url: `/pages/player/Player?id=${item.id}`
      // });
      this.$store.state.type.push("isPlayer");
      this.$store.commit("showPlayer")

      console.log(item.id);
      this.$commonApi.addPlayingMusic.call(this, item.id);
    }
  },
};
</script>

<style scoped lang="scss">
.songs-list-bottom {
  padding: 30rpx;
  &-li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30rpx;
    height: 60rpx;
    &-left {
      display: flex;
      align-items: center;
      font-size: 24rpx;
      color: $text-small;
      &-center {
        margin-left: 20rpx;
        &-top,
        &-bottom {
          @include ellipsis(1);
        }
        &-top {
          font-size: 32rpx;
          color: black;
        }
      }
    }
    &-right {
      display: flex;
      .iconfont {
        font-size: 36rpx;
        padding-left: 30rpx;
        color: $text-small;
      }
    }
  }
}
</style>
