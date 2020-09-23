import {
  request
} from "./request"

import {
  formatDate
} from "assets/common/time"

// 所有榜单
// 说明 : 调用此接口,可获取所有榜单 接口地址 : /toplist
// 调用例子 : /toplist
export function _getRankList() {
  return request({
    url: '/toplist',
  })
}
