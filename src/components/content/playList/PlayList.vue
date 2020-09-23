<template>
  <view class='play-list'
        @click="hiddenMusicList">
    <view class="play-list-box"
          @click.stop="show">
      <play-list-header :list="playList"></play-list-header>
      <play-list-bottom :list="playList"></play-list-bottom>
    </view>
  </view>
</template>

<script>
import PlayListHeader from './playListChildren/PlayListHeader'
import PlayListBottom from './playListChildren/PlayListBottom'
export default {
  name: 'PlayList',
  components: {
    PlayListHeader,
    PlayListBottom
  },
  props: {

  },
  data () {
    return {
      playList: JSON.parse(uni.getStorageSync('playList')),
    };
  },
  computed: {

  },
  watch: {
    '$store.state.playList': function () {
      this.playList = this.$store.state.playList;
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    hiddenMusicList () {
      this.$store.commit("hiddenMusicList")
    },
    show () { }
  },
};
</script>

<style scoped lang="scss">
.play-list {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  &-box {
    position: absolute;
    overflow-y: auto;
    width: calc(100vw - 30px);
    height: 940rpx;
    bottom: 50rpx;
    margin: 0 30rpx auto;
    border-radius: 30rpx;
    background-color: #fff;
    z-index: 999999;
  }
}
</style>
