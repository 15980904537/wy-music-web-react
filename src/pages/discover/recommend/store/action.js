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

export const getAlbum = () => { 
  return {
    type: CHANGE_NEW_ALBUM,
    payload:null
  }
}

export const getList = () => { 
  return {
    type: CHANGE_TOP_LIST,
    payload: null
  }
}

export const getArtist = () => { 
  return {
    type: CHANGE_ARTIST_LIST,
    payload: null
  }
}