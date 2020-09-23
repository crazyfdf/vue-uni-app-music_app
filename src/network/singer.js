import {
  request
} from './request'


/*获取歌手分类列表
说明 : 调用此接口,可获取歌手分类列表
可选参数 :
limit : 返回数量 , 默认为 30
offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0 initial: 按首字母索引查找参数,如 /artist/list?type=1&area=96&initial=b 返回内容将以 name 字段开头为 b 或者拼音开头为 b 为顺序排列, 热门传-1,#传0
type 取值:-1:全部1:男歌手2:女歌手3:乐队
area 取值:-1:全部7华语96欧美8:日本16韩国0:其他
接口地址 : /artist/list
调用例子 : /artist/list?type=1&area=96&initial=b /artist/list?type=2&area=2&initial=b*/
export function _getSingerList(limit = 30, type = -1, area = -1) {
  return request({
    url: '/artist/list',
    method: 'post',
    params: {
      limit: limit,
      type: type,
      area: area,
    }
  })
}
/*获取歌手单曲
说明 : 调用此接口 , 传入歌手 id, 可获得歌手部分信息和热门歌曲
必选参数 : id: 歌手 id, 可由搜索接口获得
接口地址 : /artists
调用例子 : /artists?id=6452
返回数据如下图 : 获取歌手单曲*/
export function _getSinger(id) {
  return request({
    url: '/artists',
    method: 'post',
    params: {
      id: id,
    }
  })
}

// 获取歌手专辑
// 说明 : 调用此接口 , 传入歌手 id, 可获得歌手专辑内容
// 必选参数 : id: 歌手 id
// 可选参数 : limit: 取出数量 , 默认为 50
// offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
// 接口地址 : /artist/album
// 调用例子 : /artist/album?id=6452&limit=30 ( 周杰伦 )
export function _getSingerAlbum(id,limit=30) {
  return request({
    url: '/artist/album',
    method: 'post',
    params: {
      id: id,
      limit:limit,
    }
  })
}


// 获取专辑内容
// 说明 : 调用此接口 , 传入专辑 id, 可获得专辑内容
// 必选参数 : id: 专辑 id
// 接口地址 : /album
// 调用例子 : /album?id=32311
export function _getSingerSheet(id) {
  return request({
    url: '/album',
    method: 'post',
    params: {
      id: id,
    }
  })
}

/*歌手热门50首歌曲
说明 : 调用此接口,可获取歌手热门50首歌曲
必选参数 :
id : 歌手 id
接口地址 : /artist/top/song
调用例子 : /artist/top/song?id=6452*/

//歌手信息
export class SingerData {
  constructor(singer, url = "") {
    this.id = singer.id; //歌手id
    this.name = singer.name; //歌手名
    this.song = singer.song; //用户名
    this.picUrl = singer.img1v1Url; //歌手头像
    this.musicSize = singer.musicSize; //音乐数量
    this.albumSize = singer.albumSize; //专辑数量
    this.mvSize = singer.mvSize; //MV数量
    this.briefDesc=singer.briefDesc//简介
  };
}

//专辑数据
export class MusicSheet {
  constructor(playlist) {
    this.coverImgUrl = playlist.picUrl; //歌单封面
    this.nickname=playlist.artist.name//用户名
    this.avatarUrl = playlist.artists[0].img1v1Url //用户头像
    this.description = playlist.description; //歌单简介
    this.name = playlist.name; //歌单名
    this.shareCount = playlist.shareCount; //歌单分享数
    this.subscribedCount = playlist.subscribedCount; //歌单收藏数
    this.playCount = playlist.playCount; //歌单播放数
    this.trackCount = playlist.trackCount; //歌曲总数
    this.tags = playlist.tags[0]; //标签
    this.createTime = formatDate(new Date(playlist.createTime), 'yyyy-MM-dd') //歌单创建时间
  }
}