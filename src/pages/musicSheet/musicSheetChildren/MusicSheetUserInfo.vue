<template>
  <view class='music-sheet-user-info'>
    <image class="music-sheet-user-info-left"
           :src="list.coverImgUrl"></image>
    <view class="music-sheet-user-info-right">
      <view>
        <view class="music-sheet-user-info-right-sheet-name">{{list.name}}</view>
        <view class="music-sheet-user-info-right-user">
          <image class="user-image"
                 :src="list.avatarUrl"></image>
          <view class="user-name">{{list.nickname}} ></view>
        </view>
      </view>
      <view class="edit-information">编辑信息 ></view>
    </view>
  </view>
</template>

<script>

export default {
  name: 'MusicSheetUserInfo',
  components: {

  },
  props: {
    list: {
      type: Object,
      default () {
        return {}
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
.music-sheet-user-info {
  display: flex;
  margin-top: 60rpx;
  padding: 0 30rpx;
  &-left {
    width: 240rpx;
    height: 240rpx;
    border-radius: 10rpx;
    background-color: #fff;
    margin-right: 30rpx;
  }
  &-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 30rpx;
    &-sheet-name {
      font-size: 32rpx;
      font-weight: 800;
      margin-bottom: 20rpx;
    }
    &-user {
      display: flex;
      align-items: center;
      .user-image {
        width: 50rpx;
        height: 50rpx;
        border-radius: 50%;
        background-color: #fff;
        margin-right: 20rpx;
      }
      .user-name {
        font-size: 24rpx;
      }
    }
    .edit-information {
      font-size: 24rpx;
    }
  }
}
</style>
