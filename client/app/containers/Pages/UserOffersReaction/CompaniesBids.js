import React, { Component } from 'react';
import pdfImage from '../../../../images/pdf.svg';
import styled from 'styled-components';


const Rectangle = styled.div`
    border-radius: 20px;
    border: solid 1px #0090e3;
    background-color: #ffffff;
    padding:30px 20px 20px 20px;
    height:100%;
    margin-left: 25%;

    @media screen and (max-width: 961px) {
        margin-top: 30px;
        margin-left: 0px;
    }
    & .headerReactangle{
        font-size:24px;
        font-stretch: normal;
        font-style: normal;
        line-height: 0.58;
        letter-spacing: normal;
        text-align: left;
        color: #0090e3;
    }
    
    & .offersList{
        margin-top:30px;
        margin-bottom:40px;
        display:flex;
        font-size:14px;
        justify-content:space-around;
        .firstDiv
        {
            img{
                height:40px;
                margin-right:10px
            }
            font-weight:600;
        }

        .secondDiv{
            margin-left:'20px !important';
            span{
                display:block;
                &:last-child{
                font-weight: 600;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.36;
                letter-spacing: normal;
                color: #ff6600;
                margin-right:5px;
                &:hover{
                    text-decoration:underline;

                }
                }
            };
        }
        .lastDiv{
            float: right;
            span{
                font-weight: 600;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.36;
                letter-spacing: normal;
                text-align: center;
                color: #ff6600;
                margin-right:5px;
                &:hover{
                    text-decoration:underline;

                }
            }
        }
    }

`;
export default class CompaniesBids extends Component {
    render() {
        return (
            <Rectangle>
                <div className='offersList'>
                    <div className='firstDiv'>
                        <img src={pdfImage}></img
                        >

                    </div>

                    <div className='secondDiv'>
                        <span>Keukenconcurrent</span>
                        <span>€ 9.950</span>
                    </div>
                    <div className='lastDiv'>
                        <span>Bekijken</span>
                    </div>
                </div>
            </Rectangle>
        )
    }
}
