import styled from 'styled-components'

export const SettleSingerWrapper=styled.div`
        padding:20px;
        .singer_list{
            .item{
                display:flex;
                margin-top:14px;
                background-color: #fafafa;
                text-decoration: none;
                border:1px solid #eee;
                :hover{
                    background-color: #f4f4f4;
                }
                .info{
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    /* align-items:center; */
                    margin-left:10px;
                    .title{
                        color:#333;
                        font-size:14px;
                        font-weight:700;
                    }
                    img{
                        width:62px;
                        height:62px;
                    }
                    .name{
                        margin-top:5px;
                    }
                }
            }
        }
        .apply_for{
            margin-top:14px;
            a{
                display:block;
                text-align:center;
                border:1px solid #c3c3c3;
                background-color:#fafafa;
                text-decoration:none;
                color:#333;
                border-radius: 4px;
                height: 31px;
                line-height: 31px;
            }
            
        }
`