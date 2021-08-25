import React, { memo } from 'react'
import { HotRecommendWrapper } from './style'
import ThemeHeaderRcm from '@/components/theme-header-rcm/index'
export default memo(function HotRecommend() {
  return (
    <HotRecommendWrapper>
      <ThemeHeaderRcm title='热门推荐' keyWords={["华语", "流行", "摇滚", "民谣", "电子"]} moreLink={'/discover/songs'} >
      </ThemeHeaderRcm>
    </HotRecommendWrapper>
  )
})
