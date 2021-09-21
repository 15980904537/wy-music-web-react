import React, { memo } from 'react'

import {AppPlayerBarWeapper,Control,PlayInfo,Operator} from './style'

import { Slider} from 'antd';
import {getImageSize} from '../../../utils/format-utils'
export default memo(function AppPlayerBar() {
    return (
        <AppPlayerBarWeapper className='sprite_playbar'>
            <div className='content wrap-v2'>
               <Control>
                    <button className='sprite_playbar btn prev'></button>
                    <button className='sprite_playbar btn play'></button>
                    <button className='sprite_playbar btn next'></button>
               </Control>
              <PlayInfo>
                <div className='image'>
                    <img src='https://p2.music.126.net/OVkXDNmbk2uj6wE1KTZIwQ==/109951165203334337.jpg?param=34y34' alt=""/>
                </div>
                <div className='info'>
                    <div className='song'>
                        <span clsasName='song-name'>{'张惠妹'}</span>
                        <span className='singer-name'>{'张惠妹'}</span>
                    </div>
                    <div className='progress'>
                        <Slider defaultValue={30} disabled={false} />
                        <div className='time'>
                            <span className='now-time'>{'00:00'}</span>
                            <span className='divider'>{'/'}</span>
                            <span className='duration'>{'12:12'}</span>
                        </div>
                    </div>
                </div>
              </PlayInfo>

              <Operator>
                <div className='left'>
                    <button className="sprite_playbar btn favor"></button>
                    <button className="sprite_playbar btn share" ></button>
                </div>
                <div className='right'>
                    <button className="sprite_playbar btn volume"></button>
                    <button className="sprite_playbar btn loop"></button>
                    <button className="sprite_playbar btn playList"></button>
                </div>
              </Operator>
            </div>
        </AppPlayerBarWeapper>
    )
})
