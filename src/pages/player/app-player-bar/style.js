import styled from 'styled-components'


export const  AppPlayerBarWeapper=styled.div`
    position:fixed;
    z-index:999;
    left:0;
    right:0;
    bottom:0;
    height:52px;
    background-position:0 0;
    background-repeat:repeat;
    .content{
        display:flex;
        justify-content: space-between;
        align-items:center;
        position:absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        height: 47px;
    }
`

export const Control=styled.div`
        display:flex;
        align-items:center;
        .prev,.next{
            width:28px;
            height:28px;
        }
        .play{
            width: 36px;
            height: 36px;
            margin: 0 8px;
            background-position:0 -165px;
        }
        .prev{
            background-position:0 -130px;
        }
        .next{
            background-position:-80px -130px;
        }
`

export const PlayInfo=styled.div`
        display:flex;
        align-items:center;
        width:642px;
        .image{
            width:34px;
            height:34px;
            border-radio:4px;
        }
        .info{
            flex:1;
            color:#a1a1a1;
            margin-left:10px;
            .song{
                color:#e1e1e1;
                position:relative;
                top:8px;
                left:8px;
                .singer-name {
                    color: #a1a1a1;
                    margin-left: 10px;
                }
            }
        }
        .progress{
            display:flex;
            align-items:center;
            .ant-slider {
                width: 493px;
                margin-right: 10px;
                .ant-slider-rail{
                     height: 9px;
                     background: url(${require("@/assets/img/progress_bar.png").default}) right 0;
                }
                .ant-slider-track{
                    height: 9px;
                    background: url(${require("@/assets/img/progress_bar.png").default}) right -66px;
                }
                .ant-slider-handle{
                        width: 22px;
                        height: 24px;
                        border: none;
                        margin-top: -8px;
                        background: url(${require("@/assets/img/sprite_icon.png").default}) 0 -250px;
                }  
            }
            .time{
                .now-time {
                    color: #e1e1e1;
                }
                .divider {
                    margin: 0 3px;
                }
            }
        }
`

export const Operator=styled.div`
        display:flex;
        align-items:center;
        position: relative;
        top: 5px;
        .left{
            .btn{
                width:25px;
                height:25px;
            }
            .favor{
                 background-position: -88px -163px;
            }
            .share{
                 background-position: -114px -163px;         
            }
        }
        .right{
            /* display:flex;
            align-items:center;
            width:126px; */
            padding-left:13px;
            background-position: -147px -248px;
            .btn{
                width:25px;
                height:25px;
            }
            .volume{
                background-position: -2px -248px;
            }
            .loop{
                background-position: -66px -248px;
            }
            .playList{
                background-position: -42px -68px;
            }

        }
`