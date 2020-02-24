/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import { Grid } from '@material-ui/core';

class UserDashBoard extends React.Component {
    render() {
        const title = brand.name + ' - Blank Page';
        const description = brand.desc;
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
                <PapperBlock title="Blank Page" desc="Some text description">
                    <Grid container spacing={3}>
                        <Grid item xs={1} />
                        <Grid item xs={9}>
                            <Grid container spacing={9}>
                                <Grid item xs={4}>
                                    <PapperBlock title="Blank Page" desc="Some text description">
                                        Content
                                    </PapperBlock>
                                </Grid>
                                <Grid item xs={4}>
                                    <PapperBlock title="Blank Page" desc="Some text description">
                                        Content
                                    </PapperBlock>
                                </Grid>
                                <Grid item xs={4}>
                                    <PapperBlock title="Blank Page" desc="Some text description">
                                        Content
                                    </PapperBlock>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={1} />
                    </Grid>
                </PapperBlock>
            </div>
        );
    }
}

export default UserDashBoard;
