import {
  request
} from "./request"

import {
  formatDate
} from "@/assets/common/time"
/*
说明 : 歌单能看到歌单名字, 但看不到具体歌单内容 , 调用此接口 , 传入歌单 id, 可 以获取对应歌单内的所有的音乐(未登录状态只能获取不完整的歌单,登录后是完整的)，但是返回的trackIds是完整的，tracks 则是不完整的，可拿全部 trackIds 请求一次 song/detail 接口获取所有歌曲的详情 (https://github.com/Binaryify/NeteaseCloudMusicApi/issues/452)
必选参数 : id : 歌单 id
可选参数 : s : 歌单最近的 s 个收藏者,默认为8
接口地址 : /playlist/detail
调用例子 : /playlist/detail?id=24381616*/
export function _getPlayList(id, s = 8) {
  return request({
    url: '/playlist/detail?id=' + id,
    method: 'get',
    params: {
      id: id,
      s: s,
    }
  })
}

/*获取歌曲详情
说明 : 调用此接口 , 传入音乐 id(支持多个 id, 用 , 隔开), 可获得歌曲详情(注意:歌曲封面现在需要通过专辑内容接口获取)
必选参数 : ids: 音乐 id, 如 ids=347230
接口地址 : /song/detail
调用例子 : /song/detail?ids=347230,/song/detail?ids=347230,347231*/
export function _getSongsData(ids) {
  return request({
    url: '/song/detail',
    params: {
      ids: ids
    }
  })
}

/*获取音乐 url
说明 : 使用歌单详情接口后 , 能得到的音乐的 id, 但不能得到的音乐 url, 调用此接口 , 传入的音乐 id( 可多个 , 用逗号隔开 ), 可以获取对应的音乐的 url( 不需要登录 )
注 : 部分用户反馈获取的 url 会 403,hwaphon找到的解决方案是当获取到音乐的 id 后，将 https://music.163.com/song/media/outer/url?id=id.mp3 以 src 赋予 Audio 即可播放
必选参数 : id : 音乐 id
可选参数 : br: 码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推
接口地址 : /song/url
调用例子 : /song/url?id=33894312 /song/url?id=405998841,33894312*/
export function _getPlaying(id, br = 999000) {
  return request({
    url: '/song/url',
    params: {
      id: id,
    }
  })
}
//单曲数据
export class SongData {
  constructor(songs) {
    this.id = songs.id; //音乐id
    this.name = songs.name; //歌名
    this.album = songs.al.name; //专辑名
    this.song = songs.ar[0].name; //用户名
    this.picUrl = songs.al.picUrl; //用户头像
    this.time = formatDate(new Date(songs.dt), 'mm:ss') //音乐时间
  }
}
//歌单数据
export class MusicSheet {
  constructor(playlist) {
    this.coverImgUrl = playlist.coverImgUrl; //歌单封面
    this.nickname = playlist.creator.nickname //用户名
    this.avatarUrl = playlist.creator.avatarUrl //用户头像
    this.description = playlist.description; //歌单简介
    this.name = playlist.name; //歌单名
    this.shareCount = playlist.shareCount; //歌单分享数
    this.subscribedCount = playlist.subscribedCount; //歌单收藏数
    this.playCount = playlist.playCount; //歌单播放数
    this.trackIds = playlist.trackIds; //歌单id
    this.trackCount = playlist.trackCount; //歌曲总数
    this.commentCount = playlist.commentCount; //歌曲评论数
    this.tags = playlist.tags[0]; //标签
    this.createTime = formatDate(new Date(playlist.createTime), 'yyyy-MM-dd') //歌单创建时间
  }
}
//正在播放的歌的数据
export class Playing {
  constructor(index, songs, url = "") {
    this.index = index; //当前歌单顺序
    this.id = songs.id; //歌id
    this.name = songs.name; //歌名
    this.album = songs.name; //专辑名
    this.song = songs.song; //用户名
    this.picUrl = songs.picUrl; //用户头像
    this.time = songs.time; //音乐时间
    this.url = url; //歌曲地址
  };
}