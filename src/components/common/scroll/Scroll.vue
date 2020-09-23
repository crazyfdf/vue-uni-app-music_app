<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props:{

  },
  name: "Scroll",
  components: {
    BScroll,
  },
  data() {
    return {
      scroll: null,
      probeType:3,
      pullUpLoad:true,

    };
  },
  created() {},
  methods: {},
  mounted() {
    //1创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType:this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    //2.监听滚动的位置
    if(this.probeType===2||this.probeType===3){
      this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position)
      })
    };
    //3.监听scroll滚动到底部
    if(this.pullUpLoad){
      this.scroll.on('pullingUp',()=>{
        console.log('到底了··········');
        this.$emit('pullingUp')
      })
    }
  },
};
</script>
<style lang='less' scoped>
.wrapper {
  height: 500px;
}
</style>