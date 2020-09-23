<template>
  <view class='songs-sheet-swiper'>
    <swiper class="swiper">
      <swiper-item v-for="(item,index) in list"
                   :key="index"
                   class="swiper-box">
        <view class="swiper-item"
              v-for="(item1,index1) in item"
              :key="index1"
              style="display:flex">
          <image class="image-left"
                 :src="item1.image"
                 style="width:105rpx;height:105rpx;border-radius:10rpx"></image>
          <view class="shongs-text">
            <view class="shongs-text-item">{{item1.songsName}}-{{item1.artistsName}}</view>
            <view class="shongs-text-item">{{item1.subTitle}}</view>
          </view>
          <view class="iconfont iconbofang"></view>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>

export default {
  name: 'SongsSheetSwiper',
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
.swiper {
  height: 350rpx;
  &-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 350rpx;
    .iconbofang {
      font-size: 50rpx;
      color: red;
      line-height: 2;
    }
    .shongs-text {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .shongs-text-item {
        width: 450rpx;
        padding: 0 20rpx;
        @include ellipsis(1);
        &:nth-child(1) {
          font-size: 30rpx;
        }
        &:nth-child(2) {
          font-size: 24rpx;
          color: $text-small;
        }
      }
    }
  }
}
</style>
