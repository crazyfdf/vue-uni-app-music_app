import {
  request
} from './request'


// 登录
// 说明 : 登录有两个接口,建议使用encodeURIComponent对密码编码或者使用POST请求,避免某些特殊字符无法解析,如#(#在url中会被识别为hash,而不是query)
// 1. 手机登录
// 必选参数 :
// phone: 手机号码
// password: 密码
// 可选参数 :
// countrycode: 国家码，用于国外手机号登陆，例如美国传入：1
// md5_password: md5加密后的密码,传入后 password 将失效
// 接口地址 : /login/cellphone
// 调用例子 : /login/cellphone?phone=xxx&password=yyy /login/cellphone?phone=xxx&md5_password=yyy
export function _UserLogin(phone = 18359619325, password = 'sy.sy258321') {
  return request({
    url: '/login/cellphone',
    params: {
      phone,
      password
    },
    method: 'post'

  })
}

// 退出登录
// 说明 : 调用此接口 , 可退出登录
// 调用例子 : /logout
export function _UserLogout() {
  return request({
    url: '/logout',
    method: 'post'

  })
}

// 登录状态
// 说明 : 调用此接口,可获取登录状态
// 接口地址 : /login/status
export function _getUserStatus() {
  return request({
    url: '/login/status',
    method: 'post'

  })
}

// 获取用户详情
// 说明 : 登陆后调用此接口 , 传入用户 id, 可以获取用户详情
// 必选参数 : uid : 用户 id
// 接口地址 : /user/detail
// 调用例子 : /user/detail?uid=32953014
export function _getUserDetail(uid = 536334074) {
  return request({
    url: '/user/detail',
    params: {
      uid: uid,
    },
    method: 'post'
  })
}

// 获取用户歌单
// 说明 : 登陆后调用此接口 , 传入用户 id, 可以获取用户歌单
// 必选参数 : uid : 用户 id
// 可选参数 :
// limit : 返回数量 , 默认为 30
// offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
// 接口地址 : /user/playlist
// 调用例子 : /user/playlist?uid=32953014
export function _getUserPlaylist(uid = 536334074, limit = 30, offset = 0) {
  return request({
    url: '/user/playlist',
    params: {
      uid,
      limit,
      offset
    }
  })
}

// 获取用户信息 , 歌单，收藏，mv, dj 数量
// 说明 : 登陆后调用此接口 , 可以获取用户信息
// 接口地址 : /user/subcount
// 调用例子 : /user/subcount



// 喜欢音乐列表
// 说明 : 调用此接口 , 传入用户 id, 可获取已喜欢音乐id列表(id数组)
// 必选参数 : uid: 用户 id
// 接口地址 : /likelist
// 调用例子 : /likelist?uid=32953014
export function _getUserLikeList(uid = 536334074) {
  return request({
    url: '/likelist',
    params: {
      uid: uid,
    }
  })
}

//用户信息
export class User {
  constructor(user) {
    this.level = user.level; //用户等级
    this.listenSongs = user.listenSongs; //用户累计听歌数
    this.userId = user.profile.userId; //用户id
    this.nickname = user.profile.nickname; //用户名
    this.avatarUrl = user.profile.avatarUrl; //用户头像
    this.description = user.profile.description; //用户描述
    this.province = user.profile.province; //用户所在省
    this.city = user.profile.city; //用户所在城市
    this.follows = user.profile.follows; //关注数
    this.followeds = user.profile.followeds; //粉丝数
    this.eventCount = user.profile.eventCount; //动态数
  }
}