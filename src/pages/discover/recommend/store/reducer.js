import {
  PUT_LOADING, CHANGE_PUT_TOP_BANNER,
  CHANGE_PUT_HOT_RECOMMEND, CHANGE_PUT_NEW_ALBUM,
  CHANGE_PUT_ARTIST_LIST,CHANGE_PUT_NEW_LIST,CHANGE_PUT_ORIGINAL_LIST,
  CHANGE_PUT_UP_LIST
} from './actionType'
import { Map} from 'immutable'
const initialState = Map({
  topBanner: [],
  hotRecommend: [],
  newAlbum: [],
  artistList: [],
  newList: {},
  originList:{},
  upList:{},
  loading:true
})
export const recommendReducer = function recommendReducer(state = initialState, action) {
  switch (action.type) { 
    case PUT_LOADING:
      return state.set('loading',action.payload)
    case CHANGE_PUT_TOP_BANNER:
      return state.set('topBanner',action.payload)
    case CHANGE_PUT_HOT_RECOMMEND:
      return state.set('hotRecommend',action.payload)
    case CHANGE_PUT_NEW_ALBUM:
      return state.set('newAlbum',action.payload)
    
    case CHANGE_PUT_ARTIST_LIST:
      return state.set('artistList',action.payload)
    case CHANGE_PUT_NEW_LIST:
        console.log(action.payload)
      return state.set('newList',action.payload)
    case CHANGE_PUT_ORIGINAL_LIST:
        console.log(action.payload)
      return state.set('newList',action.payload)
    case CHANGE_PUT_UP_LIST:
        console.log(action.payload)
      return state.set('newList',action.payload)
    default:
      return state
  }
}