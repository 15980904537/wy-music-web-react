import React, { memo, useEffect } from 'react'
import { HotRecommendWrapper } from './style'
import ThemeHeaderRcm from '@/components/theme-header-rcm/index'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { getRecommend} from '../../store/action'
import ThemeCover from '../../../../../components/theme-cover'
export default memo(function HotRecommend() {
  const state = useSelector((state) => {
    return {
      recommend: state.recommendReducer.get('hotRecommend')
    }
  }, shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecommend())
  }, [dispatch])
  console.log(state);
  return (
    <HotRecommendWrapper>
      <ThemeHeaderRcm title='热门推荐' keyWords={["华语", "流行", "摇滚", "民谣", "电子"]} moreLink={'/discover/songs'} >
      </ThemeHeaderRcm>
      <div className='recommend-list'>
        {
          state.recommend.slice(0,8).map((item) => { 
            return <ThemeCover key={item.id} info={item}></ThemeCover>
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
