import React, { memo ,useEffect} from 'react'
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import TopRanking from '../../../../../components/top-ranking/index'
import {getList} from '../../store/action' 

import {RankingWrapper} from './style'
import ThemeHeaderRcm from '../../../../../components/theme-header-rcm/index'
export default memo(function RankingList() {
    const dispatch=useDispatch();
    const {newList,upList,originList}=useSelector(state=>({
      newList:state.recommendReducer.get('newList'),
      originList:state.recommendReducer.get('originList'),
      upList:state.recommendReducer.get('upList')
    }))
    useEffect(()=>{
        dispatch(getList(0))
        dispatch(getList(2))
        dispatch(getList(3))
    },[dispatch])
    console.log(newList,originList,upList)
    return (
        <RankingWrapper>
            <ThemeHeaderRcm title='榜单' morelink='/discover/ranking'/>
            <div className='tops'>
                <TopRanking info={newList}></TopRanking>
                <TopRanking info={originList}></TopRanking>
                <TopRanking info={upList}></TopRanking>
            </div>
        </RankingWrapper>
    )
})
