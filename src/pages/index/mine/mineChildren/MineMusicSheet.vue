<template>
  <view class='mine-music-sheet'>
    <view class="mine-music-sheet-header">
      <view class="mine-music-sheet-header-left">创建歌单（{{list.length}}个）</view>
      <view class="mine-music-sheet-header-right">
        <view class="mine-music-sheet-add iconfont iconjia"></view>
        <view class="mine-music-sheet-list iconfont iconliebiao-dian"></view>
      </view>
    </view>

    <view class="mine-music-sheet-bottom">
      <view class="mine-music-sheet-bottom-li"
            v-for="(item,index) in list"
            :key="index"
            @click="toPath(item.id)">
        <view class="mine-music-sheet-bottom-li-left">
          <image class="mine-music-sheet-bottom-li-left-image"
                 :src="item.coverImgUrl"></image>
          <view class="mine-music-sheet-bottom-li-left-text">
            <view class="mine-music-sheet-bottom-li-left-text-top">{{item.name}}</view>
            <view class="mine-music-sheet-bottom-li-left-text-bottom">{{item.trackCount}}首</view>
          </view>
        </view>
        <view class="mine-music-sheet-list iconfont iconliebiao-dian"></view>
      </view>
    </view>
  </view>
</template>

<script>

export default {
  name: 'MineMusicSheet',
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
    toPath (id) {
      // uni.navigateTo({
      //   url: `/pages/musicSheet/MusicSheet?id=${id}`
      // });
      this.$store.state.type.push('isMusicSheet');
      this.$store.state.musicSheetId = id;
      console.log(this.$store.state.musicSheetId);
      this.$store.commit("showMusicSheet")
    }
  },
};
</script>

<style scoped lang="scss">
.mine-music-sheet {
  background-color: #fff;
  border-radius: 10rpx;
  padding: 30rpx;
  margin-top: 20rpx;
  &-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30rpx;
    &-left {
      font-size: 28rpx;
    }
    &-right {
      display: flex;
      .iconfont {
        font-size: 28rpx;
        padding-left: 30rpx;
      }
    }
  }
  &-bottom {
    &-li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20rpx;
      &-left {
        display: flex;
        &-image {
          width: 100rpx;
          height: 100rpx;
          border-radius: 5rpx;
          background-color: red;
        }
        &-text {
          display: flex;
          justify-content: space-around;
          flex-direction: column;
          margin-left: 20rpx;
          &-top {
            font-size: 32rpx;
            font-weight: 800;
          }
          &-bottom {
            font-size: 22rpx;
            color: $text-small;
          }
        }
      }
      .iconfont {
        font-size: 28rpx;
      }
    }
  }
}
</style>
