<template>
  <view class='play-list-bottom'>
    <view class='play-list-bottom-li'
          v-for="(item,index) in list"
          :key="index"
          v-show="index"
          @click="PlayList(item)">
      <view class='play-list-bottom-li-left'>{{item.name}}</view>
      <view class='play-list-bottom-li-right'>
        <view class='play-list-bottom-li-right-center'>播放来源</view>
        <view class='play-list-bottom-li-right-right'
              @click="sc(index)">X</view>
      </view>
    </view>

  </view>
</template>

<script>

export default {
  name: 'PlayListBottom',
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
    async sc (index) {
      console.log(1111);
      this.$store.state.playList.splice(index, 1)
      for (let i = 0; i < this.$store.state.playList.length; i++)
      {
        this.$store.state.playList[i].index = await i;
      }
      if (index === this.$store.state.index)
      {
        this.$store.state.index = await this.$store.state.index - 1;
        this.$commonApi.nextMusic.call(this);
      }
      uni.setStorageSync("playList", JSON.stringify(this.$store.state.playList))

    },
    scAll () {
      this.$store.state.playList = [{
        index: 0,
        id: 0,
        name: "",
        album: "",
        song: "",
        picUrl: "",
        time: "00:00",
        url: "",
      }]
      uni.setStorageSync("playList", JSON.stringify(this.$store.state.playList))

    },
    PlayList (list) {
      this.$commonApi.playingMusic.call(this, list.index, list.id);
    }
  },
};
</script>

<style scoped lang="scss">
.play-list-bottom {
  &-li {
    display: flex;
    justify-content: space-between;
    padding: 30rpx;
    &-left {
      width: 390rpx;
      @include ellipsis(1);
      font-size: 32rpx;
    }
    &-right {
      display: flex;
      justify-content: space-between;
      flex: 1 auto;
      margin-left: 50rpx;
      color: $text-small;
      font-size: 24rpx;
      &-right {
        margin-left: 50rpx;
      }
    }
  }
}
</style>
