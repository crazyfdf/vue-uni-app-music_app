<template>
  <view :class="{page:current===0}">
    <view class="music-nav-title">
      <view class="iconfont iconbars-solid"></view>
      <view class="title-inner">
        <uni-segmented-control :current="current"
                               :values="items.map(v=>v.title)"
                               @clickItem="onClickItem"
                               style-type="text"
                               active-color="#C62F2F"></uni-segmented-control>
      </view>
      <view class="iconfont iconsearch"></view>
    </view>
    <view class="content">
      <view v-if="current === 0">
        <mine />
      </view>
      <view v-if="current === 1">
        <discover-music />
      </view>
      <view v-if="current === 2">
        <cloudVillage />
      </view>
      <view v-if="current === 3">
        <music-video />
      </view>
    </view>
  </view>

</template>

<script>
import { uniSegmentedControl } from '@dcloudio/uni-ui';


import mine from '@/pages/mine/Mine'
import discoverMusic from '@/pages/discoverMusic/DiscoverMusic'
import cloudVillage from '@/pages/cloudVillage/CloudVillage'
import musicVideo from '@/pages/musicVideo/MusicVideo'
export default {
  name: 'MusicNav',
  components: {
    uniSegmentedControl,
    mine,
    discoverMusic,
    cloudVillage,
    musicVideo,
  },
  props: {

  },
  data () {
    return {
      items: [
        { title: "我的" },
        { title: "发现" },
        { title: "云村" },
        { title: "视频" },
      ],
      current: 0
    };
  },
  created () {
    uni.setNavigationBarTitle({
      title: this.items[this.current].title
    })
    if (this.current == 0)
    {
      uni.setNavigationBarTitle({
        title: ""
      })
      uni.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: "#F2F2F2"
      })
    }
  },
  methods: {
    onClickItem (e) {
      if (this.current !== e.currentIndex)
      {
        this.current = e.currentIndex;
      }
      uni.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: "#ffffff"
      })
      uni.setNavigationBarTitle({
        title: this.items[this.current].title
      })
      if (this.current == 0)
      {
        uni.setNavigationBarTitle({
          title: ""
        })
        uni.setNavigationBarColor({
          frontColor: '#ffffff',
          backgroundColor: "#f2f2f2"
        })
      }


    }

  },
};
</script>

<style scoped lang="scss">
.page {
  background-color: $mine-bgc;
}
.music-nav-title {
  position: relative;
  .iconbars-solid {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 5%;
  }
  .title-inner {
    width: 60%;
    margin: 0 auto;

  }
  .iconsearch {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 5%;
  }
}
.content {
  margin-top: 30rpx;
}
</style>
