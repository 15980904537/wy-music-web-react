import { all } from 'redux-saga/effects'
import { recommend } from '../pages/discover/recommend/store/index'
export const rootSage = function* rootSaga() {
  yield all([recommend.rootSagaRecommend()])
}