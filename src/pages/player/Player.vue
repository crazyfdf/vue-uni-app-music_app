<template>
  <view class='player'>
    <page-nav>
      <text slot="text"
            class="songs-name">{{name}}</text>
      <view slot="right">
        <view class="page-nav-right">
          <view class="page-nav-right-left iconfont iconsearch"></view>
          <view class="iconfont iconfenxiang"></view>
        </view>
      </view>
    </page-nav>
    <player-dish></player-dish>
    <view class="player-bottom">
      <serve-icon :list="iconList"
                  :columns="columns">
        <view slot="serve-icon-text"></view>
      </serve-icon>
      <view class="player-bottom-slider">
        <view>{{currentTime}}</view>
        <slider id="volume"
                v-model="value"
                @change="sliderChange"
                min="0"
                max="100"
                activeColor="#ebe2e2"
                backgroundColor="#908E8F"
                block-color="white"
                block-size="10"
                style="flex:1 auto;margin: 0 20rpx auto;margin-top: 5px;" />
        <view>{{time}}</view>
      </view>

      <player-icon @preMusic="preMusic()"
                   @toggle="toggle()"
                   @nextMusic="nextMusic()"></player-icon>
    </view>

  </view>
</template>

<script>
import PageNav from '@/components/content/PageNav.vue'
import ServeIcon from '@/components/content/ServeIcon.vue'

import PlayerDish from './playChildren/PlayerDish'
import PlayerIcon from './playChildren/PlayerIcon'
import { formatDate } from '@/assets/common/time.js'

export default {
  name: 'Player',
  components: {
    PageNav,
    PlayerDish,
    ServeIcon,
    PlayerIcon
  },
  props: {

  },
  data () {
    return {
      iconList: [
        { link: "", icon: "iconxin" },
        { link: "", icon: "iconxiazai" },
        { link: "", icon: "iconhuabankaobei-" },
        { link: "", icon: "iconpinglun" },
        { link: "", icon: "iconliebiao" },
      ],
      columns: "grid-template-columns: 1fr 1fr 1fr 1fr 1fr;",
      value: 0,//当前进度
      id: 0,
      currentTime: '00:00',//当前时间
      current: 0,//当前时间
      total: 0,//总时间
      time: '00:00',
      name: "",
    };
  },
  watch: {
    '$store.state.playing': function () {
      this.time = this.$store.state.playing.time;
      this.name = this.$store.state.playing.name;
    }
  },
  computed: {

  },
  onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
    this.id = option.id; //打印出上个页面传递的参数。
  },
  created () {

  },
  async mounted () {
    /* bus事件总线暂停播放 */
    this.$bus.$on("toggle", this.toggle)
    /*检查当前播放变化*/
    this.$store.state.audio.src = this.$store.state.playing.url;
    let that = this;
    this.$store.state.audio.onCanplay(() => {
      setTimeout(() => {
        that.total = that.$store.state.audio.duration;
      }, 0);
    });

    this.$store.state.audio.onTimeUpdate(() => {
      that.current = that.$store.state.audio.currentTime;
      that.currentTime = that.getTime(that.current, that.curremtTime)
      that.value = that.current / that.total * 100
    });
    this.$store.state.audio.onEnded(() => {
      that.nextMusic();
    });
  },
  methods: {
    sliderChange (e) {
      console.log('value 发生变化：' + e.detail.value)
      this.value = e.detail.value;
      this.current = e.detail.value * this.total / 100;
      this.$store.commit("changeCurrentTime", this.current)
    },
    getData () {

    },
    toggle () {
      if (this.$store.state.playing.index >= 1)
      {
        if (!this.$store.state.isPlay)
        {
          this.$store.state.audio.play();
          this.$store.state.isPlay = true;
        }
        else
        {
          this.$store.state.audio.pause();
          this.$store.state.isPlay = false;
        }
      }
    },
    preMusic () {
      this.$commonApi.preMusic.call(this);
    },
    nextMusic () {
      this.$commonApi.nextMusic.call(this);
    },
    getTime (time) {
      let hour = Math.floor(time / 3600);
      let minute = Math.floor(time % 3600 / 60);
      let second = Math.floor(time % 60);
      hour = hour < 10 ? '0' + hour : hour;
      minute = minute < 10 ? '0' + minute : minute;
      second = second < 10 ? '0' + second : second;
      let timer = hour == "00" ? (minute + ":" + second) : (hour + ":" + minute + ":" + second)
      return timer
    },
  },
};
</script>

<style scoped lang="scss">
.player {
  position: absolute;
  padding-top: 150rpx;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  top: 0;
  box-sizing: border-box;
  background-image: linear-gradient(
    to bottom right,
    #848484,
    #88807d,
    #887674,
    #434144
  );
  .songs-name {
    @include ellipsis(1);
  }
  .page-nav-right {
    display: flex;
    font-size: 32rpx;
    color: white;
    .iconfont {
      font-size: 32rpx;
    }
    &-left {
      margin-right: 50rpx;
    }
  }
  &-bottom {
    width: 100%;
    height: 300rpx;
    position: absolute;
    bottom: 30rpx;
    &-slider {
      display: flex;
      align-items: center;
      padding: 0 30rpx;
      // width: 100%;
      color: white;
    }
  }
}
</style>
