import React, { memo } from 'react'
import { ThemeCoverWrapper } from './style'
import { getImageSize } from '../../utils/format-utils';
export default memo(function ThemeCover(props) {
  const { info,right } = props;
  return (
    <ThemeCoverWrapper right={right}>
      <div className='cover-top'>
        <img src={getImageSize(info.picUrl || info.coverImgUrl, 140)} alt='' />
        <div className='cover sprite_cover'>
          <div className='info sprite_cover'>
            <span>
              <i className="sprite_icon erji"></i>
            </span>
            <i className="sprite_icon play"> </i>
          </div>
        </div>
      </div>
      <div className='cover-bottom text-nowrap'>
        {info.name}
      </div>
      <div className='cover-source'>
        by {info.copywriter || info.creator.nickname}
      </div>
    </ThemeCoverWrapper>
  )
})
