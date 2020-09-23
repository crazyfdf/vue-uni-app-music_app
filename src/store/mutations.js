export default {

  login(state, provider) {
    state.isLogin = true;
    state.user = provider;
    uni.setStorage({
      key: 'user',
      data: provider
    });
    uni.setStorageSync('cookie', provider.cookie);

  },
  logout(state) {
    state.isLogin = false;
    state.user = {};
    uni.removeStorage({
      key: 'user',
      data: provider
    })
  },
  showLoading(state) {
    state.isLoading = true;
  },
  hiddenLoading(state) {
    state.isLoading = false;
  },
  showMusicList(state) {
    state.isMusicList = true;
  },
  hiddenMusicList(state) {
    state.isMusicList = false;
  },
  showMusicSheet(state) {
    state.isMusicSheet = true;
  },
  showPlayer(state) {
    state.isPlayer = true;
  },
  hiddenPage(state, type) {
    state[type] = false;
    state.type.pop();
  },
  addPlayList(state, list) {
    state.playList = list;
  },
  changeCurrentTime(state, currentTime) {
    state.audio.currentTime = currentTime;
  },
  playMusic(state) {
    // state.isPlay = true
    // console.log(state.audio)
    // setTimeout(() => {
    //   state.audio.play();
    // }, 0);
    state.audio.autoplay = true;
    state.audio.src = state.playing.url;
    state.audio.onPlay(() => {
      console.log('开始播放');
      state.isPlay = true;
    });
    state.audio.onError((res) => {
      console.log(res.errMsg);
      console.log(res.errCode);
    });
  },
}