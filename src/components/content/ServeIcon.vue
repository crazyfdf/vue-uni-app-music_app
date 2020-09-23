<template>
  <view class='serve-icon'
        :style="columns">
    <view class="serve-icon-item"
          v-for="(item,index) in list"
          :key="index">
      <view :class="'icon-box iconfont '+item.icon"></view>
      <slot name="serve-icon-text">
        <view class="text">{{item.title}}</view>
      </slot>
    </view>
  </view>
</template>

<script>

export default {
  name: 'ServeIcon',
  components: {

  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    columns: {
      type: String,
      default () {
        return ""
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
.serve-icon {
  display: grid;
  padding: 30rpx;
  .serve-icon-item {
    text-align: center;
    font-size: 22rpx;
    .icon-box {
      font-size: 50rpx;
      color: #fff;
    }
  }
}
</style>
