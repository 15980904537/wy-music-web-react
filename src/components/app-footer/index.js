import React, { memo, Fragment } from 'react'
import { AppFooterWrapper, AppFooterLeft,AppFooterRight } from './style'
import { footerLinks, footerImages } from '@/servers/local-data'
const AppFooter = memo(function AppHeader() {
  const renderLinks = (item, index) => {
    return <Fragment key={item.title} >
      <a href={item.link}>{item.title}</a>
      {index === item.length - 1 ? null
        : <span className="line">|</span>}
    </Fragment>
  }
  const renderImages = (item) => { 
    return <li className="item" key={item.link}>
      <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"> </a>
      <span className="title"></span>
    </li>
  }
  return (
    <AppFooterWrapper>
      <div className="wrap-v2 content">
        <AppFooterLeft>
          <div className="links">
            {footerLinks.map((item, index) =>
              renderLinks(item, index)
            )}
          </div>
          <div className="infoLeft">
            <span>{'网易公司版权所有©1997-2020'}</span>
            <span>{'杭州乐读科技有限公司运营:'}
              <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png" rel="noopener noreferrer" target="_blank">浙网文[2018]3506-263号</a>
            </span>
          </div>
          <div className="infoLeft">
            <span>{'违法和不良信息举报电话:0571-89853516'}</span>
            <span>{'举报邮箱:'}
              <a href="mailto:ncm5990@163.com" target="_blank" rel="noopener noreferrer">{'ncm5990@163.com'}</a>
            </span>
          </div>
          <div className="infoLeft">
            <span>{'粤B2-20090191-18'}</span>
            <a href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action" rel="noopener noreferrer" target="_blank">
              工业和信息化部备案管理系统网站
            </a>
          </div>
        </AppFooterLeft>
        <AppFooterRight>
          {footerImages.map((item) => { 
            return renderImages(item)
          })}  
        </AppFooterRight>
      </div>

    </AppFooterWrapper>
  )
})

export default AppFooter
