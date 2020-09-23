import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)
const state = {
  isLoading: false, //显示加载loading
  isMusicList: false, //显示列表
  isLogin: true, //是否登录
  isPlay: false, //是否在播放
  isPlayer: false, //显示播放器
  isMusicSheet: false, //显示歌单
  musicSheetId: 0, //歌单ID
  type: [], //需要关闭的页面
  index: 0, //当前音乐序号
  user: {}, //用户信息
  audio: uni.createInnerAudioContext(), //播放器
  playList: JSON.parse(uni.getStorageSync('playList')) || [{ //当前的音乐列表
    index: 0, //当前歌单顺序
    id: 0, //用户id
    name: "", //歌名
    album: "", //专辑名
    song: "", //用户名
    picUrl: "", //用户头像
    time: "00:00", //音乐时间
    url: "", //歌曲地址
  }],
  playing: JSON.parse(uni.getStorageSync('playing')) || { //当前播放的音乐
    index: 0, //当前歌单顺序
    id: 0, //用户id
    name: "", //歌名
    album: "", //专辑名
    song: "", //用户名
    picUrl: "", //用户头像
    time: "00:00", //音乐时间
    url: "", //歌曲地址
  },
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})

export default store