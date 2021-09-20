import React, { memo } from 'react'


import {ThemeHeaderSmallWrapper} from './style'
export default memo(function ThemeHeaderSmall(props) {
    const {title,more}=props
    return (
        <ThemeHeaderSmallWrapper>
            <h3>{title}</h3>
            <a href="/abc">{more}</a>
        </ThemeHeaderSmallWrapper>
    )
})
