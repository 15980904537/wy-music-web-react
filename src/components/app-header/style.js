import styled from 'styled-components'

export const AppHeaderWrapper = styled.div`
  height:75px;
  background-color:#242424;
  font-size:16px;
  .content{
    display:flex;
    align-items:center;
    justify-content:space-between 
  }
  .divider{
    height:5px;
    background:#C20C0C
  }
`

export const AppHeaderLeft = styled.div`
  display:flex;
  .logo{
    width: 177px;
    height: 70px;
    background-position:0 0;
    text-indent:-9999px
  }
  .select-wrapper{
    display:flex;
    line-height:70px;
    .select-list{
      position:relative;
      a{
        display:block;
        padding:0 20px;
        color:#ccc;
        font-size:16px
      }
      :last-of-type a{
        position: relative;
        ::after{
          position:absolute;
          /* display:block; */
          content:'';
          width: 28px;
          height: 19px;
          top:20px;
          right:-15px;
          background-image:url(${require("@/assets/img/sprite_01.png").default});
          background-position:-190px 0;
        }
      }
      &:hover a,.active{
        background-color:#000;
        color:#fff;
        text-decoration:none;
      }
      .active .icon{
        position:absolute;
        width: 12px;
        height: 7px;
        bottom:-1px;
        left:50%;
        transform:translate(-50%,0);
        background-position:-226px 0
      }
    }
  }
`

export const AppHeaderRight = styled.div`
  display:flex;
  align-items:center;
  color:#ccc;
  font-size:12px;
  .search{
    width: 158px;
    height: 32px;
    border-radius:32px
  }
  .center{
    width: 90px;
    height: 32px;
    border-radius:32px;
    line-height:32px;
    margin:0 12px;
    text-align:center;
    border:1px solid #666;
    cursor: pointer;
  }
  .login{
    cursor: pointer;
  }
`