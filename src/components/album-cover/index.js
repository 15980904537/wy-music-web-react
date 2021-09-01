import React, { memo } from 'react'

import { getImageSize} from '../../components/../utils/format-utils'
import { AlbumCoverWrapper } from './style'
export default memo(function AlbumCover(props) {

  const { info, size = "100px", width = "118px", bgp = "-570px" } = props;
  return (
    <AlbumCoverWrapper size={size} width={width} bgp={bgp}>
      <div className='album-image'>
        <img src={getImageSize(info.picUrl, 150)} alt="" />
        <a href="/abc" className='cover sprite_covor'>{info.name}</a>
      </div>
      <div className='album-info'>
        <div className='name'>{info.name}</div>
        <div className="artist">{info.artist.name}</div>
      </div>
    </AlbumCoverWrapper>
  )
})
