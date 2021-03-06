/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { Grid } from '@material-ui/core';
import { RectangleBlock, OffersList, MessagesList } from 'dan-components';
import BlankPage from '../BlankPage';

class UserDashBoard extends React.Component {
    render() {
        const title = brand.name + ' - Blank Page';
        const description = brand.desc;
        const datas = [
            { number: 3, title: 'Offerte', link: 'Bekijken' },
            { number: 5, title: 'Berichten', link: 'Bekijken' },
            { number: 0, title: 'BEOORDELING', link: 'Bekijken' }];


        let id = 0;
        function createData(logo, name, status) {
            id += 1;
            return {
                id,
                logo,
                name,
                status
            };
        }

        let id2 = 0;
        function createUserData(type, datum, reactions) {
            id2 += 1;
            return {
                id2,
                type,
                datum,
                reactions
            };
        }

        const UserData = [
            createUserData('Modernkeuken 23', '18-08-2019', 3),
            createUserData('Modernkeuken 25', '18-08-2019', 3),
        ];

        const messagesData = [
            createData('logo', 'Keukenconcurrent', 'Tot ziens..'),
            createData('logo', 'Superkeukens', 'is aan het typen'),
            createData('logo', 'Superkeukens', 'is aan het typen')
        ];
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
                <BlankPage desc="Some text description" link="/users/newOffer">
                    <Grid container spacing={3}>
                        <Grid item xs={0} md={1} />
                        <Grid item xs={12} md={9}>
                            <Grid container>
                                {datas.map((data, index) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <Grid item xs={12} md={4} key={index}>
                                        <RectangleBlock data={data}>
                                            Content
                                        </RectangleBlock>
                                    </Grid>
                                ))}

                            </Grid>
                        </Grid>
                        <Grid item md={1} xs={0} />
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={0} md={1} />
                        <Grid item xs={12} md={9}>
                            <Grid container>
                                <Grid item xs={0} md={1} />
                                <Grid item xs={12} md={5}>
                                    <MessagesList data={messagesData} />
                                </Grid>
                                <Grid item xs={0} md={1} />
                                <Grid item md={5} xs={12}>
                                    <OffersList data={UserData} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={1} />
                    </Grid>
                </BlankPage>
            </div>
        );
    }
}

export default UserDashBoard;
