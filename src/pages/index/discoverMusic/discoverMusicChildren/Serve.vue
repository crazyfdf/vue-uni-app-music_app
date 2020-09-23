<template>
  <view class='serve'>
    <scroll-view scroll-x="true"
                 style="white-space:nowrap;">
      <view class="serve-li"
            v-for="(item,index) in list"
            :key="index">
        <view class="serve-li-header">
          <view class="text"
                v-if="index==0">{{day}}</view>
          <image class="iconfont"
                 :src="item.iconUrl"></image>
        </view>
        <view class="serve-li-bottom">{{item.name}}</view>
      </view>
    </scroll-view>
  </view>
</template>

<script>

export default {
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  name: 'Serve',
  data () {
    return {
      day: new Date().getDate()
    }
  },
  methods: {

  }
};
</script>

<style scoped lang="scss">
.serve-li {
  display: inline-block;
  widows: 85rpx;
  margin-right: 65rpx;
  text-align: center;
  &:last-child {
    margin-right: 0;
  }
  .serve-li-header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85rpx;
    height: 85rpx;
    border-radius: 50%;
    background-color: red;
    .iconfont {
      width: 85rpx;
      height: 85rpx;
      color: white;
    }
    .text {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -40%);
      display: inline-block;
      color: red;
      font-size: 24rpx;
      z-index: 99;
    }
  }
  .serve-li-bottom {
    margin-top: 15rpx;
    font-size: 20rpx;
  }
}
</style>
