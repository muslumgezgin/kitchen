/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { Grid } from '@material-ui/core';
import RectangleBlock from '../../../components/RectangleBlock/RectangleBlock';
import BlankPage from '../BlankPage';
import OffersList from '../../OffersList';
class UserDashBoard extends React.Component {
    render() {
        const title = brand.name + ' - Blank Page';
        const description = brand.desc;
        const datas = [
            { number: 3, title: "Offerte", link: "Bekijken" },
            { number: 5, title: "Berichten", link: "Bekijken" },
            { number: 0, title: "BEOORDELING", link: "Bekijken" }];
        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                    <meta property="twitter:title" content={title} />
                    <meta property="twitter:description" content={description} />
                </Helmet>
                <BlankPage desc="Some text description">
                    <Grid container spacing={3}>
                        <Grid item xs={1} />
                        <Grid item xs={9}>
                            <Grid container>
                                {datas.map((data, index) => {
                                    return (
                                        <Grid item xs={4} key={index}>
                                            <RectangleBlock data={data}>
                                                Content
                                            </RectangleBlock>
                                        </Grid>
                                    );
                                })}

                            </Grid>
                        </Grid>
                        <Grid item xs={1} />
                    </Grid>
                    <Grid container spacing={3}>
                    <Grid item xs={1} />
                        <Grid  xs={9}>
                            <OffersList />
                        </Grid>
                        <Grid item xs={1} />
                    </Grid>

                </BlankPage>
            </div>
        );
    }
}

export default UserDashBoard;
