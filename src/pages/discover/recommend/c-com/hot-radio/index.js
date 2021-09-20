import React, { memo } from 'react'

import {hotRadios} from '../../../../../servers/local-data'
import {HotRadioWrapper} from './style'

import ThemeHeaderSmall from '../../../../../components/theme-header-small/index'
import {getImageSize} from '../../../../../utils/format-utils'

export default memo(function HotRadio() {
    return (
        <HotRadioWrapper>
            <ThemeHeaderSmall title='热门主播'></ThemeHeaderSmall>
            <div className='radio_list'>
                {
                    hotRadios.map(item=>{
                        return  <div className="item" key={item.picUrl}>
                            <a href="/abc" className="image">
                                <img src={getImageSize(item.picUrl,40)} alt="" />
                            </a>
                            <div className="info">
                                <div className="name">{item.name}</div>
                                <div className="position text-nowrap">{item.position}</div>
                            </div>
                        </div>
                    })
                }
            </div>
        </HotRadioWrapper>
    )
})
