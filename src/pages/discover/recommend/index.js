import React, { memo, useEffect } from 'react'
// import useSelection from 'antd/lib/table/hooks/useSelection'
import { useDispatch, useSelector, shallowEqual, connect } from 'react-redux'
import { getBanner } from './store/action'

export default memo(function Recommend(props) {
  const state = useSelector((state) => {
    return {
      banner: state.recommendReducer.get('topBanner')
    }
  }, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBanner())
  },[dispatch])
  console.log(state)
  return (
    <div style={{ height: '30px' }}>
      {'推荐'}
    </div>
  )
})
// const mapStateToProps = function mapStateToProps(state) { 
//   return {
//     banner:state.recommendReducer.topBanner
//   }
// }
// const mapDispatchToProps = function mapDispatchToProps(dispatch) { 
//   return {
//     getBanner: () => { 
//       dispatch(getBanner())
//     }
//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Recommend)
