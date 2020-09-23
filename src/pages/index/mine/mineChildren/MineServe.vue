<template>
  <view class='mine-serve'>
    <view class="mine-serve-item"
          v-for="(item,index) in list"
          :key="index">
      <view :class="'icon-box iconfont '+item.icon"></view>
      <view>{{item.title}}</view>
    </view>

  </view>
</template>

<script>

export default {
  name: 'MineServe',
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
.mine-serve {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 60rpx;
  padding: 30rpx;
  background-color: #fff;
  border-radius: 10rpx;
  .mine-serve-item {
    text-align: center;
    font-size: 22rpx;
    .icon-box {
      font-size: 50rpx;
      color: red;
    }
  }
}
</style>
