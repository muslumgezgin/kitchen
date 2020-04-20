/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { Grid } from '@material-ui/core';
import { OffersList, MessagesList, RectangleBlock } from 'dan-components';
import BlankPage from '../BlankPage';


class UserDashBoard extends React.Component {
    render() {
        const title = brand.name + ' - Blank Page';
        const description = brand.desc;
        const datas = [
            { number: 9, title: 'Nieuwe offertes', link: 'Bekijken' },
            { number: 8, title: 'Bedrijven', link: 'Bekijken' },
            { number: 20, title: 'Klanten', link: 'Bekijken' },
            { number: 45, title: 'Reacties', link: 'Bekijken' }];


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
                        <Grid item xs={1} />
                        <Grid item xs={11}>
                            <Grid container>
                                {datas.map((data, index) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <Grid item xs={3} key={index}>
                                        <RectangleBlock data={data}>
                                            Content
                                        </RectangleBlock>
                                    </Grid>
                                ))}

                            </Grid>
                        </Grid>
                        <Grid item xs={0} />
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={1} />
                        <Grid item xs={9}>
                            <Grid container>
                                <Grid item xs={1} />
                                <Grid item xs={5}>
                                    <MessagesList data={messagesData} />
                                </Grid>
                                <Grid item xs={1} />
                                <Grid item xs={5}>
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
