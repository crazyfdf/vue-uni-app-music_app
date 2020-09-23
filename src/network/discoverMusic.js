import {
  request
} from "./request"


/**banner
说明 : 调用此接口 , 可获取 banner( 轮播图 ) 数据
可选参数 :
type:资源类型,对应以下类型,默认为 0 即PC
0: pc 1: android 2: iphone 3: ipad */
export function _getBanner(type = 2) {
  return request({
    url: '/banner',
    method: 'post',
    params: {
      type: type
    }
  })
}

// 首页-发现-圆形图标入口列表
// 说明 : 调用此接口 , 可获取APP首页圆形图标入口列表
// 接口地址 : /homepage/dragon/ball
export function _getBall() {
  return request({
    url: '/homepage/dragon/ball',
    method: 'post',
  })
}

// 首页-发现
// 说明 : 调用此接口 , 可获取APP首页信息
// 接口地址 : /homepage/block/page
// 可选参数 : refresh: 是否刷新数据,默认为true
export function _getHomepage(limit = 30, refresh = true) {
  return request({
    url: '/homepage/block/page',
    method: 'post',
    params: {
      limit,
      refresh
    }
  })
}


/*推荐歌单
说明 : 调用此接口 , 可获取推荐歌单
可选参数 : limit: 取出数量 , 默认为 30 (不支持 offset) */
export function _getSongsList(limit = 30) {
  return request({
    url: '/personalized',
    method: 'post',
    params: {
      limit: limit
    }
  })
}
/*独家放送(入口列表)
说明 : 调用此接口 , 可获取独家放送 */
export function _getMusicMV() {
  return request({
    url: '/personalized/privatecontent',
    method: 'post',
  })
}
/*推荐新音乐
说明 : 调用此接口 , 可获取推荐新音乐*/
export function _getNewMusic() {
  return request({
    url: '/personalized/newsong',
    method: 'post',
  })
}

/*获取精品歌单
说明 : 调用此接口 , 可获取精品歌单
可选参数 : cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)
limit: 取出歌单数量 , 默认为 20
before: 分页参数,取上一页最后一个歌单的 updateTime 获取下一页数据
接口地址 : /top/playlist/highquality
调用例子 : http://localhost:3000/top/playlist/highquality?before=1503639064232&limit=3*/
export function _getSongSheet(limit = 20, tag = "全部") {
  return request({
    url: '/top/playlist/highquality',
    method: 'post',
    params: {
      limit: limit,
      cat: tag,
      time: new Date().getTime()
    }
  })
}

//风格推荐
export class StyleRecommendation {
  constructor(resources) {
    this.id = resources.resourceExtInfo.songData.id //音乐id
    this.image = resources.uiElement.image.imageUrl; //音乐头像
    this.songsName = resources.resourceExtInfo.songData.name; //歌名
    this.artistsName = resources.resourceExtInfo.songData.artists[0].name; //歌手名
    try {
      this.subTitle = resources.uiElement.subTitle.title ? resources.uiElement.subTitle.title : ""; //备注
    } catch (err) {
      this.subTitle = ""
    }
  };
}
//场景推荐
export class SceneRecommendation {
  constructor(creatives) {
    this.name = creatives.uiElement.mainTitle.title //音乐描述
    this.id = creatives.resourceId //歌单id
    this.picUrl = creatives.uiElement.image.imageUrl; //音乐头像
    this.playCount = creatives.resources[0].resourceExtInfo.playCount; //播放量
  };
}
//云村精选
export class CloudVillageSelection {
  constructor(blocks) {
    this.mainTitle = blocks[1].creatives[1].resources[0].uiElement.mainTitle.title //音乐描述
    this.id = blocks[3].extInfo.squareFeedViewDTOList[0].id //云村id
    this.talkId = blocks[3].extInfo.squareFeedViewDTOList[2].resource.mlogBaseData.talk.talkId
    this.text = blocks[3].extInfo.squareFeedViewDTOList[0].resource.mlogBaseData.text //描述
    this.image = blocks[3].extInfo.squareFeedViewDTOList[2].resource.mlogBaseData.coverUrl; //音乐头像
    this.follows = blocks[3].extInfo.squareFeedViewDTOList[2].resource.mlogBaseData.talk.follows; //点赞数
  };
}