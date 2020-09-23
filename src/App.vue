<script>
import { _UserLogin } from '@/network/user.js'

export default {
  onLaunch: function () {
    _UserLogin().then(res => {
      this.$store.commit("login", res)
    })
    console.log('App Launch 应用启动')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  methods: {

  },
}
</script>

<style>
/*每个页面公共css */
/* @import "./assets/css/base.css"; */
@import "./assets/css/iconfont.css";
</style>
