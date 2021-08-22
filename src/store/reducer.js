import { combineReducers } from 'redux'
import { recommend } from '../pages/discover/recommend/store/index'
const recommendReducer = recommend.recommendReducer;
export default combineReducers({
  recommendReducer,
})