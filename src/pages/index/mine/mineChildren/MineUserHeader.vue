<template>
  <view class='user'>
    <view class="user-left">
      <image class="user-image" :src="list.avatarUrl"></image>
      <view class="user-center">
        <view class="user-name">{{list.nickname}}</view>
        <view class="user-icon">
          <view class="user-vip iconfont iconliebiaoye-VIPjiaobiao"></view>
          <view class="user-level">lv.{{list.level}}</view>
        </view>
      </view>
    </view>
    <view class="user-right">></view>
  </view>
</template>

<script>

export default {
  name: 'MineUserHeader',
  components: {

  },
  props: {
    list:{
      type:Object,
      default(){
        return {}
      }
    },

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
.user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30rpx;
  &-left {
    display: flex;
    .user-image {
      width: 100rpx;
      height: 100rpx;
      border-radius: 50%;
      background-color: #fff;
    }
    .user-center {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      height: 100rpx;
      margin-left: 30rpx;
      .user-name {
        font-size: 32rpx;
        font-weight: 800;
      }
      .user-icon {
        display: flex;
        align-items: center;
      }
      .user-vip {
        font-size: 24rpx;
        border-radius: 2rpx;
      }
      .user-level {
        width: 60rpx;
        height: 32rpx;
        text-align: center;
        line-height: 32rpx;
        font-size: 18rpx;
        font-weight: 800;
        background-color: #fff;
        border-radius: 18rpx;
        margin-left: 10rpx;
      }
    }
  }
}
</style>
