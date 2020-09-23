<template>
  <div id="loading-model">
    <div class="text-loading">
      <div class="text-loading-head">
        <span><strong>L</strong></span>
        <span><strong>O</strong></span>
        <span><strong>A</strong></span>
        <span><strong>D</strong></span>
        <span><strong>I</strong></span>
        <span><strong>N</strong></span>
        <span><strong>G</strong></span>
      </div>
      <div class="text-loading-bottom">
        正在加载中，请您耐心等待...
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Loading',
  components: {},
  data () {
    return {
    }
  },
  created () {
    let that = this;
  },

  methods: {},
  mounted () {
  },

}
</script>
<style lang='less' scoped>
@import url("./loading.css");
</style>