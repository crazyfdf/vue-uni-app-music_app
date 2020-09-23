<template>
  <view class='mine' id="mine">
    <view class="mine-view-box"></view>
    <view class="mine-view-box">
      <mine-user-header :list="userInfo"></mine-user-header>
    </view>
    <view class="mine-view-box">
      <mine-serve :list="serveList"></mine-serve>
    </view>
    <view class="mine-view-box">
      <mine-like-music :likeList="userList[0]"></mine-like-music>
    </view>
    <view class="mine-view-box">
      <mine-music-sheet-nav :list="navList"></mine-music-sheet-nav>
      <mine-music-sheet :list="userList.slice(1)"></mine-music-sheet>
    </view>
    <view class="mine-view-box">
      <mine-music-collection id="mine-music-collection"></mine-music-collection>
    </view>
  </view>
</template>

<script>
import MineUserHeader from "@/pages/index/mine/mineChildren/MineUserHeader.vue";
import MineServe from "@/pages/index/mine/mineChildren/MineServe.vue";
import MineLikeMusic from "@/pages/index/mine/mineChildren/MineLikeMusic.vue";
import MineMusicSheetNav from "@/pages/index/mine/mineChildren/MineMusicSheetNav.vue";
import MineMusicSheet from "@/pages/index/mine/mineChildren/MineMusicSheet.vue";
import MineMusicCollection from "@/pages/index/mine/mineChildren/MineMusicCollection.vue";
import { _UserLogin, _getUserDetail, _getUserStatus, _getUserPlaylist, _getUserLikeList, User } from '@/network/user.js'


export default {
  name: 'Mine',
  components: {
    MineUserHeader,
    MineServe,
    MineLikeMusic,
    MineMusicSheetNav,
    MineMusicSheet,
    MineMusicCollection,
  },
  props: {

  },
  data () {
    return {
      serveList: [
        { title: "本地音乐", link: "", icon: "icondownload" },
        { title: "云盘", link: "", icon: "iconshangchuan" },
        { title: "已购", link: "", icon: "icondui" },
        { title: "最近播放", link: "", icon: "iconbofang" },
        { title: "我的关注", link: "", icon: "iconyinlemusic216" },
        { title: "收藏和赞", link: "", icon: "iconshoucang" },
        { title: "我的电台", link: "", icon: "iconmusic" },
        { title: "音乐应用", link: "", icon: "iconwebicon308" },
      ],
      navList: [
        { index: 0, title: "创建歌单", link: "" },
        { index: 1, title: "收藏歌单", link: "" },
      ],
      userList: [],
      userInfo: {}
    };
  },
  computed: {
  },
  watch: {

  },
  onLoad () {

  },
  created () {

  },
  mounted () {
    _getUserPlaylist().then(async res => {
      this.userList = await res.playlist;
      this.userList[0].name = "我喜欢的音乐"
    })
    _getUserDetail().then(async res => {
      let userInfo = await new User(res);
      this.userInfo = userInfo;
    });
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.mine {
  padding-top: 30rpx;
  .mine-view-box {
    margin: 30rpx 30rpx auto;
  }
}
</style>
