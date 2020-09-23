<template>
  <view class='songs-list'>
    <songs-list-header :musicList="musicList"></songs-list-header>
    <songs-list-bottom :musicList="musicList"></songs-list-bottom>
  </view>
</template>
<script>
import SongsListHeader from './songsListChildren/SongsListHeader'
import SongsListBottom from './songsListChildren/SongsListBottom'
export default {
  name: 'SongsList',
  components: {
    SongsListHeader,
    SongsListBottom
  },
  props: {
    musicList: {
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
  onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
    console.log(option.id); //打印出上个页面传递的参数。
  },
  created () {

  },
  mounted () {
  },
  methods: {
  }
};
</script>

<style scoped lang="scss">
.songs-list {
  overflow-y: auto;
  height: calc(100vh - 150rpx);
  border-top-left-radius: 50rpx;
  border-top-right-radius: 50rpx;
  background-color: #fff;
}
</style>
