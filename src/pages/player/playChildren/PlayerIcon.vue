<template>
  <view class='player-icon'
        :style="columns">
    <view class="player-icon-item">
      <view class="icon-box iconfont iconxunhuan1"></view>
    </view>
    <view class="player-icon-item"
          @click="preMusic()">
      <view class="icon-box iconfont iconshangyishoushangyige"></view>
    </view>
    <view class="player-icon-item player"
          @click="toggle()">
      <view v-show="!isPlay"
            class="icon-box iconfont iconbofang1"></view>
      <view v-show="isPlay"
            class="icon-box iconfont iconzanting"></view>
    </view>

    <view class="player-icon-item"
          @click="nextMusic()">
      <view class="icon-box iconfont iconxiayigexiayishou"></view>
    </view>
    <view class="player-icon-item">
      <view class="icon-box iconfont iconbofangliebiao"
            @click="showPlayList"></view>
    </view>
  </view>
</template>

<script>

export default {
  name: 'playerIcon',
  components: {

  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
  },
  data () {
    return {
      columns: "grid-template-columns: 1fr 1fr 1fr 1fr 1fr;",
      isPlay: false,
    };
  },
  computed: {

  },
  watch: {
    '$store.state.isPlay': function () {
      this.isPlay = this.$store.state.isPlay;
    }
  },
  created () {

  },
  mounted () {
  },
  methods: {
    preMusic () {
      this.$emit("preMusic")
    },
    toggle () {
      this.$emit("toggle")
    },
    nextMusic () {
      this.$emit("nextMusic")
    },
    showPlayList () {
      this.$store.commit("showMusicList")
    }
  },
};
</script>

<style scoped lang="scss">
.player-icon {
  display: grid;
  padding: 30rpx;
  align-items: center;
  .player-icon-item {
    text-align: center;
    font-size: 22rpx;
    .icon-box {
      font-size: 50rpx;
      color: #fff;
    }
  }
  .player {
    .icon-box {
      font-size: 100rpx;
    }
  }
}
</style>
