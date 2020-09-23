<template>
  <view class='music-sheet'>
    <page-nav></page-nav>
    <view class="music-sheet-header">
      <view class="music-sheet-user-info">
        <music-sheet-user-info :list="list"></music-sheet-user-info>
      </view>
      <serve-icon :list="iconList"
                  :columns="columns"></serve-icon>
    </view>
    <view>
      <songs-list :musicList="musicList"></songs-list>
    </view>
    <!-- <music-bottom v-show="$store.state.isPlay"></music-bottom> -->
  </view>
</template>

<script>
import PageNav from '@/components/content/PageNav.vue'
import ServeIcon from '@/components/content/ServeIcon.vue'
import SongsList from '@/components/content/songList/SongsList.vue'
import MusicBottom from '@/components/content/MusicBottom';

import MusicSheetUserInfo from './musicSheetChildren/MusicSheetUserInfo'

import {
  _getPlayList,
  _getSongsData,
  MusicSheet,
  SongData,
} from "network/musicSheet"

export default {
  name: 'MusicSheet',
  components: {
    PageNav,
    ServeIcon,
    SongsList,
    MusicSheetUserInfo,
    MusicBottom

  },
  props: {

  },
  data () {
    return {
      iconList: [
        { title: "评论", link: "", icon: "iconpinglun" },
        { title: "分享", link: "", icon: "iconfenxiang" },
        { title: "下载", link: "", icon: "iconxiazai" },
        { title: "多选", link: "", icon: "iconshow_duoxuan" },
      ],
      columns: "grid-template-columns: 1fr 1fr 1fr 1fr;",
      id: 0,
      list: {},//歌单信息
      musicList: [],//歌单
      trackIds: []//歌单id
    };
  },
  onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
    this.id = option.id; //打印出上个页面传递的参数。
  },
  computed: {

  },
  watch: {
    '$store.state.musicSheetId': function () {
      this.getData()
    }
  },

  created () {
  },
  mounted () {

  },
  onShow () {
    // console.log(1111);
    // this.getData()
  },
  activated () {
    // console.log(1111);
    // this.getData()
  },
  methods: {
    async getData () {
      this.musicList = [];
      let songs = [];
      await _getPlayList(this.$store.state.musicSheetId).then(async res => {
        this.list = await new MusicSheet(res.playlist);
        for (let i of res.playlist.trackIds)
        {
          this.trackIds.push(i.id);
        }
        await _getSongsData(this.trackIds.join(",")).then(res => {
          this.musicList = res.songs;
          this.musicList.map(item => {
            let song = new SongData(item);
            songs.push(song)
          })
        });
        this.musicList = songs;
      })
    }
  },
};
</script>

<style scoped lang="scss">
.music-sheet {
  position: absolute;
  padding-top: 150rpx;
  background-image: linear-gradient(to right, #d6d2d1, #cdc2c6);
  width: 100vw;
  height: 100vh;
  z-index: 9998;
  top: 0;
  &-header {
    padding: 0 30rpx;
    color: white;
  }
}
</style>
