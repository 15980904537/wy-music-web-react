import React, { memo ,useEffect} from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import {SettleSingerWrapper} from './style'

import {getImageSize} from '../../../../../utils/format-utils'
import ThemeHeaderSmall from '../../../../../components/theme-header-small/index'
import {getArtist} from '../../store/action'

export default memo(function SettleSinger() {

    const dispatch=useDispatch();
    const {artistList}=useSelector((state)=>({
        artistList:state.recommendReducer.get('artistList'),
    }),shallowEqual)
    useEffect(()=>{
        dispatch(getArtist(5))
    },[dispatch]);

    console.log(artistList)
    return (
        <SettleSingerWrapper>
          <ThemeHeaderSmall title='入驻歌手' more='查看全部>'/>
          <div className='singer_list'>
              {
                 artistList.map(item=>{
                     return <a href="/singer" key={item.id} className='item'>
                        <img src={getImageSize(item.img1v1Url,62)} alt=""/>
                        <div className='info'>
                            <div className='title'>{item.alias.join("") || item.name}</div>
                            <div className='name'>{item.name}</div>
                        </div>
                     </a>
                 }) 
              }
          </div>
          <div className='apply_for'>
              <a href="/abc">{'申请成为网易音乐人'}</a>
          </div>
        </SettleSingerWrapper>
    )
})
