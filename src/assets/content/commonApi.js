import {
  _getPlaying,
  _getSongsData,
  SongData,
  Playing,
} from '@/network/musicSheet'

function tenThousand(num) {
  return num > 10000 ? num.toString().substring(0, num.toString().length - 4) + '万' : num
}

function ten(index) {
  return index < 9 ? '0' + (index + 1) : index + 1
}

async function addAllPlayingMusic(ids) {
  let songs = {};
  for (let i of ids) {
    await _getSongsData(i.id).then(async res => {
      songs = await new SongData(res.songs[0]);
    })
    await _getPlaying(i.id).then(async res => {
      songs = await new Playing(this.$store.state.playList.length, songs, res.data[0].url)
      this.$store.state.index = await this.$store.state.playing.index;
      this.$store.state.playList.push(songs);
    })
  }
  uni.setStorageSync('playList', JSON.stringify(this.$store.state.playList));
  // localStorage.setItem("playList", JSON.stringify(this.$store.state.playList))
}

async function addPlayingMusic(id) {
  let songs = {};
  await _getSongsData(id).then(res => {
    console.log(res.songs[0])
    songs = new SongData(res.songs[0]);
  })
  await _getPlaying(id).then(res => {
    songs = new Playing(this.$store.state.playList.length, songs, res.data[0].url)
    this.$store.state.playing = songs;
    this.$store.state.index = this.$store.state.playing.index;
    this.$store.state.playList.push(songs);
    console.log(this.$store.state.index);
    this.$store.commit("playMusic");
  })
  // localStorage.setItem("playList", JSON.stringify(this.$store.state.playList))
  // localStorage.setItem("playing", JSON.stringify(this.$store.state.playing))
  // localStorage.setItem("index", JSON.stringify(this.$store.state.index))
  uni.setStorageSync('playList', JSON.stringify(this.$store.state.playList));
  uni.setStorageSync('playing', JSON.stringify(this.$store.state.playing));
  uni.setStorageSync('index', JSON.stringify(this.$store.state.index));

}
async function playingMusic(index, id) {
  let songs = {};
  await _getSongsData(id).then(res => {
    songs = new SongData(res.songs[0]);
  })
  await _getPlaying(id).then(res => {
    songs = new Playing(index, songs, res.data[0].url)
    this.$store.state.playing = songs;
    this.$store.state.index = this.$store.state.playing.index;
    console.log(this.$store.state.index);
    this.$store.commit("playMusic");
  })
}
async function nextMusic() {
  if (this.$store.state.playList.length != 1) {
    console.log(this.$store.state.index);
    let index = this.$store.state.index == this.$store.state.playList.length - 1 ? 0 : this.$store.state.index;
    this.$store.state.index = this.$store.state.playList[index + 1].index;
    this.$store.state.playing = this.$store.state.playList[index + 1];
    this.$store.commit("playMusic");
  }
}
async function preMusic() {
  if (this.$store.state.playList.length != 1) {
    let index = this.$store.state.index == 1 ? this.$store.state.playList.length : this.$store.state.index;
    this.$store.state.index = this.$store.state.playList[index - 1].index;
    this.$store.state.playing = this.$store.state.playList[index - 1];
    this.$store.commit("playMusic");
  }
}
export default {
  ten,
  tenThousand,
  playingMusic,
  addPlayingMusic,
  nextMusic,
  preMusic,
  addAllPlayingMusic,
}