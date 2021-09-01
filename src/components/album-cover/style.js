import styled from 'styled-components'

export const AlbumCoverWrapper = styled.div`
  .album-image{
    position: relative;
    width:${prop => prop.width};
    height: ${props => props.size};
    overflow: hidden;
    margin-top: 15px;

    img{
      width:${prop=>prop.size};
      height:${prop=>prop.size}
    }
    .cover{
      position: absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      background-position:0 ${props => props.bgp};
      text-indent:-9999px
    }
  }
  .album-info{
    font-size: 12px;
    width: ${props => props.size};
    .name{
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .artist{
      color:#666
    }
  }
`