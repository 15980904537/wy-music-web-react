import {
  CHANGE_TOP_BANNER,
  CHANGE_HOT_RECOMMEND,
  CHANGE_NEW_ALBUM,
  CHANGE_TOP_LIST,
  CHANGE_ARTIST_LIST,
  PUT_LOADING,
  CHANGE_PUT_TOP_BANNER,
  CHANGE_PUT_HOT_RECOMMEND,
  CHANGE_PUT_TOP_LIST,
  CHANGE_PUT_NEW_ALBUM,
  CHANGE_PUT_ARTIST_LIST
} from './actionType';
// import { takeEvery} from 'redux-saga'
import { put,call,takeEvery} from 'redux-saga/effects'
// import { getBanner, getRecommend, getAlbum, getList, getArtist } from './action'
import { getTopBanner,getHotRecommend,getNewAlbum,getTopList,getArtistList } from '../../../../servers/recommend'
function *initTopBanner() { 
  // yield put(PUT_LOADING, false);
  yield put({ type: PUT_LOADING, payload: false });
  //发送请求
  const data = yield call(getTopBanner);
  // yield put(PUT_LOADING, true);
  yield put({ type:PUT_LOADING, payload: true });
  yield put({ type: CHANGE_PUT_TOP_BANNER, payload: data.banners});
  // yield put(CHANGE_PUT_TOP_BANNER,data)
}

function* initHotRecommend() {
  yield put({ type: PUT_LOADING, payload: false });
  //发送请求
  const data = yield call(getHotRecommend);
  yield put({ type: PUT_LOADING, payload: true });
  yield put({ type: CHANGE_PUT_HOT_RECOMMEND, payload:data.result })
}

function* initNewAlbum() {
  yield put({ type: PUT_LOADING, payload: false });
  //发送请求
  const data = yield call(getNewAlbum);
  yield put({ type: PUT_LOADING, payload: true });
  yield put({ type: CHANGE_PUT_NEW_ALBUM, payload:data.albums })
}

function* initTopList() {
  yield put({ type: PUT_LOADING, payload: false });
  //发送请求
  const data = yield call(getTopList);
  yield put({ type: PUT_LOADING, payload: true });
  yield put({ type: CHANGE_PUT_TOP_LIST, payload:data.paylist })
}

function* initArtistList() {
  yield put({ type: PUT_LOADING, payload: false});
  //发送请求
  const data = yield call(getArtistList);
  yield put({ type: PUT_LOADING, payload: true });
  yield put({ type: CHANGE_PUT_ARTIST_LIST, payload: data.artists })
}
function* rootSagaRecommend() {     // 在store.js中，执行了 sagaMiddleware.run(rootSaga)
  //获取轮播图
  yield takeEvery(CHANGE_TOP_BANNER,initTopBanner)   // 如果有对应type的action触发，就执行goAge()函数
  yield takeEvery(CHANGE_HOT_RECOMMEND,initHotRecommend)
  yield takeEvery(CHANGE_NEW_ALBUM,initNewAlbum)
  yield takeEvery(CHANGE_TOP_LIST,initTopList)
  yield takeEvery(CHANGE_ARTIST_LIST,initArtistList)
}

export default rootSagaRecommend