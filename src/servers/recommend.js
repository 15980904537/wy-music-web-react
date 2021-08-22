import { request } from "./axios";
 

//轮播图
export function getTopBanner() {
  return request({
    url: "/banner"
  })
}
//热门推荐
export function getHotRecommend() {
  return request({
    url: "/personalized",
  })
}
//新喋上架

export function getNewAlbum(limit, offset) {
  return request({
    url: "/top/album",
    params: {
      limit,
      offset
    }
  })
}

//榜单
export function getTopList(idx) {
  return request({
    url: "/top/list",
    params: {
      idx
    }
  })
}

//入驻歌手
export function getArtistList(limit, cat) {
  return request({
    url: "/artist/list",
    params: {
      cat,
      limit
    }
  })
}