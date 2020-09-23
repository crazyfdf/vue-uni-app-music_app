<template>
  <view class="index"
        :class="{minecolor:current===0}">
    <index-nav class="index-nav"
               :list="navList"
               :current="current"
               @changeIndex="changeIndex1($event)" />
    <view class="music-content"
          v-show="!$store.state.type.length">
      <swiper class="swiper"
              @change="changePage"
              :current="current"
              :indicator-dots="indicatorDots"
              :interval="interval"
              :duration="duration"
              style="height:1880rpx">
        <swiper-item>
          <!-- <view class="swiper-item"
                v-show="current === 0"> -->
          <mine />
          <!-- </view> -->
        </swiper-item>
        <swiper-item>
          <!-- <view class="swiper-item"
                v-show="current === 1"> -->
          <discover-music />
          <!-- </view> -->
        </swiper-item>
        <swiper-item>
          <!-- <view class="swiper-item"
                v-show="current === 2"> -->
          <cloudVillage />
          <!-- </view> -->
        </swiper-item>
        <swiper-item>
          <!-- <view class="swiper-item"
                v-show="current === 3"> -->
          <music-video />
          <!-- </view> -->
        </swiper-item>
      </swiper>
    </view>
    <music-bottom v-show="isPlay"></music-bottom>
    <play-list v-show="isMusicList"></play-list>
    <player v-show="isPlayer"></player>
    <music-sheet v-show="isMusicSheet&&!isPlayer"></music-sheet>
  </view>

</template>

<script>
import IndexNav from '@/components/content/IndexNav';


import MusicBottom from '@/components/content/MusicBottom';
import PlayList from '@/components/content/playList/PlayList';
import Player from '@/pages/player/Player'
import MusicSheet from '@/pages/musicSheet/MusicSheet.vue'


import mine from '@/pages/index/mine/Mine'
import discoverMusic from '@/pages/index/discoverMusic/DiscoverMusic'
import cloudVillage from '@/pages/index/cloudVillage/CloudVillage'
import musicVideo from '@/pages/index/musicVideo/MusicVideo'
import { mapState } from 'vuex'

export default {
  components: {
    IndexNav,
    mine,
    discoverMusic,
    cloudVillage,
    musicVideo,
    MusicBottom,
    PlayList,
    Player,
    MusicSheet
  },
  data () {
    return {
      navList: [
        { index: 0, title: "我的", link: "/pages/mine/Mine" },
        { index: 1, title: "发现", link: "/pages/discoverMusic/DiscoverMusic" },
        { index: 2, title: "云村", link: "/pages/cloudVillage/CloudVillage" },
        { index: 3, title: "视频", link: "/pages/musicVideo/MusicVideo" },
      ],
      indicatorDots: false,
      interval: 1000,
      duration: 500,
      current: 1,
      isPlay: false,
      isMusicList: false,
      isPlayer: false,
      isMusicSheet: false,
    }
  },
  watch: {
    '$store.state.playing': function () {
      this.isPlay = this.$store.state.playing.index >= 1 ? true : false;
    },
    '$store.state.isMusicList': function () {
      this.isMusicList = this.$store.state.isMusicList;
    },
    '$store.state.isPlayer': function () {
      this.isPlayer = this.$store.state.isPlayer;
    },
    '$store.state.isMusicSheet': function () {
      this.isMusicSheet = this.$store.state.isMusicSheet;
    },
  },
  onLoad: function (options) {
    setTimeout(function () {
      console.log('start pulldown');
    }, 1000);
  },
  onPullDownRefresh () {
    console.log('refresh');
    setTimeout(function () {
      uni.stopPullDownRefresh();
    }, 1000);
  },
  onLoad () {
    console.log("onLoad 页面加载完毕");
    uni.startPullDownRefresh();
  },
  methods: {
    changePage (e) {
      this.current = e.detail.current;
      // uni.setNavigationBarColor({
      //   frontColor: '#ffffff',
      //   backgroundColor: "#ffffff"
      // })
      // if (this.current == 0)
      // {
      //   uni.setNavigationBarColor({
      //     frontColor: '#ffffff',
      //     backgroundColor: "#F2F2F2"
      //   })
      // }
    },
    changeIndex1 (index) {
      this.current = index;
    }
  },
}
</script>

<style lang="scss">
.index {
  padding-top: 80rpx;
  overflow: auto;
}
.music-content {
  padding-top: 30rpx;
}
.minecolor {
  background-color: $mine-bgc;
}
</style>