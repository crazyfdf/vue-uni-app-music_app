<template>
  <view class='music-bottom'>
    <view class="music-bottom-li"
          @click="toPath(id)">
      <view class="music-bottom-li-left">
        <image class="music-bottom-li-left-image"
               :src="picUrl"></image>
        <view class="music-bottom-li-left-text">
          <view class="music-bottom-li-left-text-top">{{name}}</view>
          <view class="music-bottom-li-left-text-bottom">{{song}}</view>
        </view>
      </view>
      <view class="music-bottom-li-right">
        <view @click.stop="play">
          <view v-show="isPlay"
                class="music-list iconfont iconzanting"></view>
          <view v-show="!isPlay"
                class="music-list iconfont iconbofang1"></view>
        </view>
        <view class="music-list iconfont iconbofangliebiao"
              @click.stop="showPlayList"></view>
      </view>
    </view>
  </view>
</template>

<script>

export default {
  name: 'MusicBottom',
  components: {

  },
  props: {

  },
  data () {
    return {
      id: 0,
      picUrl: "",
      name: "",
      song: "",
      isPlay: false,
    };
  },
  computed: {

  },
  watch: {
    "$store.state.playing": function () {
      this.id = this.$store.state.playing.id;
      this.picUrl = this.$store.state.playing.picUrl;
      this.name = this.$store.state.playing.name;
      this.song = this.$store.state.playing.song;
    },
    "$store.state.isPlay": function () {
      this.isPlay = this.$store.state.isPlay;
    },
  },
  created () {

  },
  mounted () {

  },
  methods: {
    showPlayList () {
      this.$store.commit("showMusicList")
    },
    play(){   
      this.$bus.$emit("toggle")
    },
    toPath (id) {
      this.$store.commit("showPlayer");

      console.log(this.$store.state.type, typeof (this.$store.state.type));
      this.$store.state.type.push("isPlayer");
      // uni.navigateTo({
      //   url: `/pages/player/Player?id=${id}`
      // });
    }
  },
};
</script>

<style scoped lang="scss">
.music-bottom {
  position: fixed;
  width: 100vw;
  height: 100rpx;
  bottom: 0;
  background-color: #fff;
  &-li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20rpx;
    &-left {
      display: flex;
      &-image {
        width: 70rpx;
        height: 70rpx;
        border-radius: 50%;
        background-color: red;
      }
      &-text {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        margin-left: 20rpx;
        &-top {
          @include ellipsis(1);
          font-size: 32rpx;
          font-weight: 800;
        }
        &-bottom {
          font-size: 22rpx;
          color: $text-small;
        }
      }
    }
    &-right {
      display: flex;
      .iconfont {
        margin-right: 30rpx;
        font-size: 58rpx;
      }
    }
  }
}
</style>
