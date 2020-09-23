<template>
  <view class='dicover-music'>
    <view class="view-box">
      <swiper :banner="banner" />
    </view>
    <view class="view-box">
      <serve :list="serveList" />
    </view>
    <view class="view-box">
      <music-head />
    </view>
    <view class="view-box">
      <music-sheet-scroll :list="songsList" />
    </view>
    <view class="view-box">
      <music-head>
        <view slot="left">
          {{titleText[1]}}
        </view>
        <view slot="right">
          {{buttonText[1]}}

        </view>
      </music-head>
    </view>
    <view class="view-box">
      <songs-sheet-swiper :list="styleList" />
    </view>
    <view class="view-box">
      <music-head>
        <view slot="left">
          {{titleText[2]}}
        </view>
        <view slot="right">
          {{buttonText[2]}}
        </view>
      </music-head>
    </view>
    <view class="view-box">
      <music-sheet-scroll :list="sceneList" />
    </view>
  </view>
</template>

<script>
import { uniBadge } from '@dcloudio/uni-ui'
import Swiper from 'components/content/Swiper.vue'
import Serve from '@/pages/index/discoverMusic/discoverMusicChildren/Serve.vue'
import MusicHead from '@/pages/index/discoverMusic/discoverMusicChildren/MusicHead.vue'
import MusicSheetScroll from '@/pages/index/discoverMusic/discoverMusicChildren/MusicSheetScroll.vue'
import SongsSheetSwiper from '@/pages/index/discoverMusic/discoverMusicChildren/SongsSheetSwiper.vue'
import {
  _getBanner,
  _getSongsList,
  _getMusicMV,
  _getNewMusic,
  _getBall,
  _getHomepage,
  StyleRecommendation,
  SceneRecommendation,
} from "network/discoverMusic"
export default {
  name: 'DiscoverMusic',
  components: {
    uniBadge,
    Swiper,
    Serve,
    MusicHead,
    MusicSheetScroll,
    SongsSheetSwiper
  },
  props: {

  },
  data () {
    return {
      banner: [],
      titleText: [],
      buttonText: [],
      songsList: [],//歌单推荐
      serveList: [],//功能服务
      styleList: [],//风格推荐
      sceneList: [],//场景推荐
    };
  },
  computed: {

  },
  watch: {

  },
  created () {

  },
  mounted () {
    _getBall().then(res => {
      this.serveList = res.data
    })
    _getBanner().then(res => {
      this.banner = res.banners;
    })
    _getSongsList().then(res => {
      this.songsList = res.result.slice(0, 10)
    })
    _getHomepage().then(async res => {
      for (let i of res.data.blocks)
      {
        this.titleText.push(i.uiElement.subTitle.title);
        this.buttonText.push(i.uiElement.button.text)
      }
      for (let i of res.data.blocks[1].creatives)
      {
        let songs = await [];
        for (let j of i.resources)
        {
          let song = await new StyleRecommendation(j);
          songs.push(song);
        }
        this.styleList.push(songs)
      }
      for (let i of res.data.blocks[2].creatives)
      {
        let song = await new SceneRecommendation(i);
        this.sceneList.push(song)
      }
    })
  },
  methods: {

  },
};
</script>

<style scoped lang="scss">
.dicover-music {
  .view-box {
    margin: 30rpx 30rpx auto;
  }
}
</style>
