import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
  .top{
      height: 30px;
      background:#c20c0c
  }
`

export const TopMenu = styled.div`
  display:flex;
  padding-left:180px;
  align-items:center;
  position: relative;
  top:-4px;
  .topItem{
    a{
      display:inline-block;
      height:20px;
      line-height:20px;
      padding: 0 13px;
      margin: 7px 17px 0;
      color:#fff;
      /* padding:0px 20px; */
    }
    &:hover a{
      background:#9B0909;
      border-radius:20px;
      text-decoration:none
    }
  }
`