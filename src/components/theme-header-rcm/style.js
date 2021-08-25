import styled from 'styled-components'

export const ThemeHeaderWrapper = styled.div`
  width:730px;
  height:33px;
  border-bottom:2px solid #C10D0C;
  padding:0px 10px 4px 34px;
  margin-top:20px;
  background-position: -225px -156px;
  display:flex;
  justify-content:space-between;
  align-items:center;
`

export const ThemeHeaderLeft = styled.div`
  display:flex;
  align-items:center;

  .title{
      font-size: 20px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      margin-right: 20px;
  }
  .keyWords{
    display:flex;
    .item{
      display:flex;
      align-items:center;
      :last-of-type .divider{
        display:none
      }
      .divider{
        margin:0 15px;
        color:#ccc;
      }
  }
  }
  
`

export const ThemeHeaderRight = styled.div`
  display:flex;
  align-items:center;
  .icon{
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
  }
`