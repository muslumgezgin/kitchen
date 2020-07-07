import styled from 'styled-components';

export const DetailsContainer = styled.div`
    margin-top:40px;
    margin-bottom:40px;

    h1{
        font-size: 24px;
        font-weight: 800;
        font-stretch: normal;
        font-style: normal;
        line-height: 0.58;
        letter-spacing: normal;
        text-align: left;
        color: #000000;
    }

    & .blueDiv{
        height: 71px;
        border: solid 1px #ffffff;
        background-color: #0090e3;
        padding:15px 20px 10px 20px;

        span{
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.38;
            letter-spacing: normal;
            text-align: center;
            color: #ffffff;
            padding-top:5px;
        }
        h1{
            font-size: 28px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.36;
            letter-spacing: normal;
            text-align: left;
            color: #ffffff;
        }
    
    }

    & .lightBlueDiv{
        height: 82px;
        border: solid 1px #ffffff;
        background-color: #e3f2fd;
        padding:15px 20px 10px 20px;
        .firstDiv
        {
            img{
                height:40px;
                margin-right:10px
            }
            font-weight:600;
        }
        .lastDiv{
            span{
                font-weight: 600;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.36;
                letter-spacing: normal;
                text-align: center;
                margin-right:5px;
                text-decoration:underline;
            }
            .oval{
                width: 16px;
                height: 16px;
                background-color: #ff6600;
                font-size: 11px;
                color:#ffffff;
                text-align:center;
                border-radius:50%;
                padding-left:4px;
                margin-top:4px
            }
        }
    }
    & div
    {
        display:flex;
        justify-content:space-between;
    }

    & .middleContainer{
        display: inline-block;
        padding:50px;
        margin-left:20%;
        margin-right:5%;
        @media screen and (max-width: 1261px) {
        margin-left: 0px;
    }

        div,.button{
            margin-left:20px;
            margin-top:20px;
            justify-content:space-around;
            padding:10px;
            font-size: 14px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.36;
            letter-spacing: normal;
            text-align: center;
            color: #0090e3;
            width: 244px;
            height: 41px;
            border-radius: 18px;
            border: solid 1px #0090e3;
        }
    }

    & .lastContainer{
        display: block;
        width:100%;
        border-radius: 20px;
        background-color: #e3f2fd;
        div{
            display: block;
            margin-left:20%;
            padding:50px;
            @media screen and (max-width: 1261px) {
               margin-left: 0px;
            }
        }
     

        div.lasttContainer,.button{
            margin-left:20px;
            margin-top:20px;
            justify-content:space-around;
            padding:10px;
            font-size: 14px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.36;
            letter-spacing: normal;
            text-align: center;
            border-radius: 18px;
            border: solid 1px #0090e3;
        }
        .button{
            width: 374px;
            height: 40px;
            margin-left:-10%;
            border-radius: 20px;
            background-color: #ff6600;
            @media screen and (max-width: 1261px) {
                width: 274px;
                margin-left:0px

              }
        }
    }
`;