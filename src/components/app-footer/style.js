import styled from 'styled-components'

export const AppFooterWrapper = styled.div`
    height: 173px;
    border-top:1px solid #d3d3d3;
    background:#f2f2f2;
    color:#333;
    .content{
      display:flex;
      justify-content:space-between;
    }
`
export const AppFooterLeft = styled.div`
    padding-top:15px;
    line-height:24px;
    .links{
      a{
        color:#999;
      }
      .line{
        color:#999;
        padding:0 10px;
      }
      
    }
    .infoLeft{
     span{
       margin-right:15px;
     }
    }
`

export const AppFooterRight = styled.ul`
    display:flex;
    align-items:center;
    .item{
      display:flex;
      flex-direction:column;
      align-items:center;
      margin-right:30px;
      .link{
        display:block;
        width: 50px;
        height: 45px;
        background-image:url(${require("@/assets/img/sprite_footer_02.png").default});
        background-size:110px 450px;
      }
      :nth-child(1) .link{
        background-position: -60px -101px;
      }
      :nth-child(2) .link{
        background-position: 0px 0px;
      }
      :nth-child(3) .link{
        background-position: -60px -50px;
      }
      :nth-child(4) .link{
        background-position: 0px -101px;
      }

      .title {
      margin-top: 5px;
      display: block;
      width: 52px;
      height: 10px;
      background-image: url(${require("@/assets/img/sprite_footer_01.png").default});
      background-size: 180px 100px;
    }

    :nth-child(1) .title {
      background-position: -1px -90px;
    }
    :nth-child(2) .title {
      background-position: 0 0;
      margin-top: 7px;
    }
    :nth-child(3) .title {
      background-position: 0 -54px;
      margin-top: 6px;
    }

    :nth-child(4) .title {
      background-position: -1px -72px;
      margin-top: 6px;
    }
    }

`