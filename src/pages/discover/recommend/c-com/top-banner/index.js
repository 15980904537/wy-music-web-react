import React, { memo, useEffect,useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getBanner } from '../../store/action'

import { Carousel } from 'antd'
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'
export default memo(function TopBanner() {
  const state = useSelector((state) => {
    return {
      banner: state.recommendReducer.get('topBanner')
    }
  }, shallowEqual);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBanner())
  }, [dispatch])

  const CarouselRef = useRef();
  console.log(state)
  return (
    <BannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" ref={CarouselRef}>
            {state.banner.map(item => {
              return <div key={item.imageUrl} className="image-item">
                <img className="image" src={item.imageUrl} alt={item.typeTitle} />
              </div>
            })}

          </Carousel>
        </BannerLeft>
        <BannerRight>
        </BannerRight>
        <BannerControl>
          <button className='btn left' onClick={e=>CarouselRef.current.prev()}></button>
          <button className='btn right' onClick={e=>CarouselRef.current.next()}></button>
        </BannerControl>

      </div>

    </BannerWrapper>
  )
})
