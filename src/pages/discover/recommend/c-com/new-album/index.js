import React, { memo, useEffect, useRef } from 'react'

import ThemeHeaderRcm from '../../../../../components/theme-header-rcm/index'
import AlbumCover from '../../../../../components/album-cover/index'
import { AlbumWrapper } from './style'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getAlbum } from '../../store/action'
import * as type from './const'
import { Carousel } from 'antd';
export default memo(function NewAlbum() {
  const carouselRef = useRef();
  const { newAlbum } = useSelector((state) => {
    return {
      newAlbum: state.recommendReducer.get('newAlbum')
    }
  })
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAlbum(type.ALBUM_MAX_LIMIT));
  }, [dispatch])
  console.log(newAlbum)
  return (
    <AlbumWrapper>
      <ThemeHeaderRcm title='新碟上架'></ThemeHeaderRcm>
      <div className='content'>
        <div className='arrow arrow-left sprite_02'
          onClick={() => { carouselRef.current.prev() }}
        ></div>
        <div className='album'>
          <Carousel ref={carouselRef} dots={false}>
            {[0, 1].map(item => {
              return <div key={item} className="page">
                {
                  newAlbum.slice(item * 5, (item + 1) * 5).map(v => {
                    return <AlbumCover key={v.id} info={v} />
                  })
                }
              </div>
            })}
          </Carousel>
        </div>

        <div
          className='arrow arrow-right sprite_02'
          onClick={() => { carouselRef.current.next() }}
        ></div>
      </div>
    </AlbumWrapper>
  )
})
