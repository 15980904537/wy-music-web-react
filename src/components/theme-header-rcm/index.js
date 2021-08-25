import React, { memo } from 'react'
import PropTypes from "prop-types";

import {
  ThemeHeaderWrapper,
  ThemeHeaderLeft,
  ThemeHeaderRight
} from './style'
import { Link } from 'react-router-dom'
const ThemeHeaderRcm= memo(function ThemeHeaderRcm(props) {
  const { title, keyWords, morelink } = props;
  return (
    <ThemeHeaderWrapper className="sprite_02">
      <ThemeHeaderLeft>
        <h3 className='title'>{title}</h3>
        <div className='keyWords'>
          {keyWords.map((item, index) => {
            return <div className='item' key={item}>
              <span className="link">{item}</span>
              <span className='divider'>|</span>
            </div>
          })}
        </div>

      </ThemeHeaderLeft>
      <ThemeHeaderRight>
        <Link to={morelink}>更多</Link>
        <i className="icon sprite_02"></i>
      </ThemeHeaderRight>
    </ThemeHeaderWrapper>
  )
})
ThemeHeaderRcm.defaultProps = {
  keyWords: []
}
ThemeHeaderRcm.propTypes= {
  title: PropTypes.string.isRequired,
  keyWords:PropTypes.array
}
export default ThemeHeaderRcm
