<template>
  <view class='header'>
    <view class="left">
      <slot name="left">发现好歌单</slot>
    </view>

    <view class="right">
      <slot name="right">查看更多</slot>
    </view>

  </view>
</template>

<script>

export default {
  name: 'Header',
  components: {

  },
  props: {

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
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50rpx;
  .left {
    @include ellipsis(1);
    max-width: 80%;
    overflow: hidden;
    font-size: 34rpx;
    font-weight: 800;
  }
  .right {
    @include ellipsis(1);
    overflow: hidden;
    padding: 10rpx;
    font-size: 24rpx;
    border: 1px solid #e6e6e6;
    border-radius: 25rpx;
    box-sizing: border-box;
  }
}
</style>
