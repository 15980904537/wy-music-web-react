import React, { memo, useEffect } from 'react'
// import useSelection from 'antd/lib/table/hooks/useSelection'

import TopBanner from './c-com/top-banner/index'
import { RecommendWrapper } from './style'
export default memo(function Recommend() {
  
  return (
    <RecommendWrapper>
      <TopBanner>
      </TopBanner>
    </RecommendWrapper>
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
