import React, { memo } from 'react'
import { AppHeaderWrapper, AppHeaderLeft, AppHeaderRight } from './style'
import { navLinks } from '@/servers/local-data.js'
import { NavLink } from 'react-router-dom'
import classnames from 'classnames'
import { Input } from 'antd'
import { SearchOutlined} from '@ant-design/icons';
const AppHeader = memo(function AppHeader() {
  const renderItem = (item,index) => { 
    if (index < 3) {
      return <NavLink to={item.link}>
        {item.title}
        <i className="icon sprite_01"></i>
      </NavLink>
    } else { 
      return <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
    }
  }
  return (
    <AppHeaderWrapper>
      <div className="wrap-v1 content">
        <AppHeaderLeft>
          <a href="#/" className='sprite_01 logo'>网易云音乐</a>
          <div className='select-wrapper'>
            {navLinks.map((item, index) => {
              return <div key={item.title} className={classnames('select-list')}>
                {renderItem(item,index)}
              </div>
            })}
          </div>
        </AppHeaderLeft>
        <AppHeaderRight>
          <Input
            placeholder='音乐/视频/电台'
            className='search'
            prefix={<SearchOutlined />}
            size={"small"}
          />
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
        </AppHeaderRight>
      </div>
      <div className="divider"></div>
    </AppHeaderWrapper>
  )


})

export default AppHeader
