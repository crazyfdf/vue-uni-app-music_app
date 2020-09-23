<template>
  <view class='mine-music-sheet-nav'>
    <view v-for="(item,index) in list"
          :key="index">
      <view :class="{after:index==current}"
            @click="changeItem(item)"
            class="mine-music-sheet-nav-li">{{item.title}}</view>
    </view>
  </view>
</template>

<script>

export default {
  name: 'MineMusicSheetNav',
  components: {

  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
  },
  data () {
    return {
      current: 0
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
    changeItem (item) {
      this.current = item.index;
      if (item.title === "收藏歌单")
      {
        uni.createSelectorQuery().select('#mine-music-collection').boundingClientRect(data => {//目标位置节点 类或者 id 
          uni.createSelectorQuery().select("#mine").boundingClientRect((res) => {//最外层盒子节点类或者 id
            uni.pageScrollTo({
              duration: 100,//过渡时间
              scrollTop: data.top - res.top,//到达距离顶部的top值
            })
          }).exec()
        }).exec();
      }
    }
  },
};
</script>

<style scoped lang="scss">
.mine-music-sheet-nav {
  display: flex;
  justify-content: space-between;
  margin: 0 100rpx auto;
  &-li {
    padding: 10rpx 0;
  }
}
.after {
  position: relative;
  color: #c62f2f;
  font-weight: 800;
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 4px;
    left: 0;
    bottom: 0px;
    background-color: #c62f2f;
  }
}
</style>
