import { CHANGE_TOP_BANNER, CHANGE_HOT_RECOMMEND, CHANGE_NEW_ALBUM, CHANGE_TOP_LIST, CHANGE_ARTIST_LIST } from './actionType';

export const getBanner = () => { 
  return {
    type: CHANGE_TOP_BANNER,
    payload:null
  }
}

export const getRecommend = () => { 
  return {
    type: CHANGE_HOT_RECOMMEND,
    payload: null
  }
}

export const getAlbum = (limit) => { 
  return {
    type: CHANGE_NEW_ALBUM,
    payload:limit
  }
}

export const getList = (num) => { 
  return {
    type: CHANGE_TOP_LIST,
    payload: num
  }
}

export const getArtist = () => { 
  return {
    type: CHANGE_ARTIST_LIST,
    payload: null
  }
}