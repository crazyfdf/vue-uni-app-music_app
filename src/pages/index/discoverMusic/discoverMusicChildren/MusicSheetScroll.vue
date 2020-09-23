<template>
  <view class='music-sheet-scroll'>
    <scroll-view scroll-x="true"
                 style="white-space:nowrap;">
      <view class="music-sheet-li"
            v-for="(item,index) in list"
            :key="index">
        <view class="music-sheet-li-header">
          <image class="music-sheet-li-image"
                 :src="item.picUrl"
                 alt=""></image>
        </view>
        <view class="music-sheet-li-bottom">{{item.name}}</view>
      </view>
    </scroll-view>
  </view>
</template>

<script>

export default {
  name: 'MusicSheetScroll',
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

  },
};
</script>

<style scoped lang="scss">
.music-sheet-li {
  vertical-align: top;
  display: inline-block;
  width: 210rpx;
  margin-right: 20rpx;
  &:last-child {
    margin-right: 0;
  }
  .music-sheet-li-header {
    width: 210rpx;
    height: 210rpx;
    .music-sheet-li-image {
      width: 100%;
      height: 100%;
      border-radius: 10rpx;
    }
  }
  .music-sheet-li-bottom {
    padding-top: 10rpx;
    font-size: 24rpx;
    white-space: pre-wrap;
    @include ellipsis(2);
  }
}
</style>
