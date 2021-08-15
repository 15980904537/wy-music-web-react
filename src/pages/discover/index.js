import React, { memo } from 'react'
import { DiscoverWrapper, TopMenu } from './style'
import { NavLink } from 'react-router-dom'
import { topMenu} from '@/servers/local-data'
import { renderRoutes } from 'react-router-config'
// import { routes} from '@/route'
const Discover = memo(function Discover(props) {
  const {route } = props;
  const renderTopMenu = (item) => { 
    return <div key={item.title} className="topItem">
      <NavLink to={item.link}>{item.title}</NavLink>
    </div>
  }
  return (
    <DiscoverWrapper>
      <div className='top'>
        <TopMenu className="wrap-v1">
          {topMenu.map(item => { 
            return renderTopMenu(item)
          })}
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
export default Discover

