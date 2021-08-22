import styled from 'styled-components'

export const BannerWrapper = styled.div`  
  display:flex;
  .banner{
    height:270px;
    background-color:red;
    display:flex;
    position: relative;
  }
`

export const BannerLeft = styled.div`
  width: 730px;
  .image-item{
    overflow:hidden;
    height:270px;
    .image{
      width:100%;
    }
  }
`

export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: '_blank'
})`
  width: 254px;
  height: 270px;
  background: url(${require("@/assets/img/download.png").default});
`

export const BannerControl = styled.div`
  position: absolute;
  left:0;
  right:0;
  top:50%;
  transform:translate(0,-50%);
  .btn{
    position: absolute;
    width: 37px;
    height: 63px;
    background-image:url(${require("@/assets/img/banner_sprite.png").default});
    background-color:transparent;
    cursor:pointer;
    &:hover{
      background-color:rgba(0,0,0,0.1);
    }
  }
  .left{
      left: -68px;
      background-position: 0 -360px;
  }
  .right{
      right: -68px;
      background-position: 0 -508px;
  }
`