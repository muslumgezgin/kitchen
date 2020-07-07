import React, { Component } from 'react';
import Image from './example.png';
import styled from 'styled-components';
import { Divider } from '@material-ui/core';


const Rectangle = styled.div`
    border-radius: 20px;
    border: solid 1px #0090e3;
    background-color: #ffffff;
    padding:30px 20px 20px 20px;
    height:100%;
    margin-left: 25%;
    position: relative;
    @media screen and (max-width: 961px) {
        margin-top: 30px;
        margin-left: 0px;
    }
    h1{
        font-size: 20px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 0.7;
        letter-spacing: normal;
        text-align: left;
        color: #0090e3;
        margin-bottom:20px;
    }

    h2{
        font-size: 14px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.43;
        letter-spacing: normal;
        text-align: left;
        color: #2196f3;
        margin-bottom:20px;
    }
    img{
        margin:10px 20px 40px 0px;
        width: 124px;
        height: 82px;
    }
    span{
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.43;
        letter-spacing: normal;
        text-align: left;
    }
    .openWorks{
        margin-bottom:20px
    }
    .ratings{
        width: 50px;
        height: 50px;
        background-color: #7ed321;
        font-size: 21px;
        border-radius:50%;
        padding:15px 0px 0px 10px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 0.57;
        letter-spacing: normal;
        text-align: left;
        color: #ffffff;
        margin-right:5px;
    }
    .ratingBox{
        display: flex;
    }
    .ratingsText{
        margin-top:15px;
    }
    .bottomFix{
        position: absolute;
        bottom: 70px;
        width:100%;
        padding-right:12%;
        hr{
            border:1px solid #E0E0E0 !important;    
        }
    }
   

`;
export default class CompaniesProfile extends Component {
    render() {
        return (
            <Rectangle>
                <h1>Bedrijsprofiel</h1>
                <img src={Image}></img>
                <h1>Over Keukenconcurrent</h1>
                <div className="openWorks">
                    <span>Maandag t/m Vrijdag 12:00 - 18:00</span><br />
                    <span>Zaterdag 12:00 - 17:00</span><br />
                    <span>Zondag gesloten!</span>
                </div>
                <h2>www.keukenconcurrent.nl</h2>
                <div className="ratingBox">
                    <div className="ratings">8.6</div>
                    <div className="ratingsText">Beoordeling</div>
                </div>
                <div className="bottomFix">
                    <hr />
                    <h1>Afspraken</h1>
                U heeft nog geen afspraken.
                </div>
            </Rectangle>
        )
    }
}
