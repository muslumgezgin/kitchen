import React, { Component } from 'react'
import { Grid, Button } from '@material-ui/core'
import OffersDetails from './OffersDetails'
import CompaniesBids from './CompaniesBids';
import BlankPage from '../BlankPage';

import styled from 'styled-components';
import button from 'dan-styles/Buttons.scss';


const HedearText = styled.div`
font-size:24px;
font-weight:800;
color:#000000;
line-height:0.58;
font-family:openSans;
letter-spacing:normal;
margin-bottom:20px;
& .text-style-1{
    color:#0090e3;
}
`;

export default class UserOffersDetails extends Component {
    renderStatus(status) {
        let name = status + 'Button';
        return (
            <Button
                variant="contained"
                color=""
                className={button[name]}
            >
                {status.toUpperCase()}
            </Button>
        );
    }
    render() {
        return (
            <BlankPage>
                <div>
                <HedearText>
                    <span className="text-style-1">Offertereactie: </span>
                    Keukenconcurrent
                </HedearText>
                {this.renderStatus('actief')}
                    <Grid container spacing={3}>
                        <Grid xs={12} md={5}>
                            <OffersDetails />
                        </Grid>
                        <Grid xs={12} md={5} >
                            <CompaniesBids />
                        </Grid>
                    </Grid>
                </div>
            </BlankPage>
        )
    }
}
