<template>
  <view class="music-nav">
    <view class="music-nav-title">
      <view class="iconfont iconbars-solid"></view>
      <view class="title-inner">
        <view v-for="(item,index) in list"
              :key="index"
              @click="onClickItem(index)"
              :class="{after:item.index===current}"
              class="list-item">{{item.title}}</view>
      </view>
      <view class="iconfont iconsearch"></view>
    </view>
  </view>

</template>

<script>
// import { uniSegmentedControl } from '@dcloudio/uni-ui';


// import mine from '@/pages/index/mine/Mine'
// import discoverMusic from '@/pages/index/discoverMusic/DiscoverMusic'
// import cloudVillage from '@/pages/index/cloudVillage/CloudVillage'
// import musicVideo from '@/pages/index/musicVideo/MusicVideo'
export default {
  name: 'IndexNav',
  components: {
    // uniSegmentedControl,
    // mine,
    // discoverMusic,
    // cloudVillage,
    // musicVideo,
  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    current: {
      type: Number,
      default () {
        return 1
      }
    }
  },
  data () {
    return {
    };
  },
  created () {

  },
  methods: {
    onClickItem (index) {
      this.$emit("changeIndex", index)

    }
  },
};
</script>

<style scoped lang="scss">
.music-nav {
  position: relative;
  width: 100vw;
  z-index: 999;
  .music-nav-title {
    position: relative;
    .iconbars-solid {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 5%;
      font-size: 38rpx;
    }
    .title-inner {
      display: flex;
      justify-content: space-around;
      width: 60%;
      margin: 0 auto;
      .list-item {
        font-size: 32rpx;
        text-align: center;
        padding: 10rpx 0;
        box-sizing: border-box;
      }
      .after {
        position: relative;
        color: #c62f2f;
        font-weight: 800;
        &::after {
          content: "";
          display: inline-block;
          position: absolute;
          width: 100%;
          height: 4px;
          left: 0;
          bottom: 0px;
          background-color: #c62f2f;
        }
      }
    }
    .iconsearch {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 5%;
      font-size: 38rpx;
    }
  }
}
</style>
