/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { Grid } from '@material-ui/core';
import BlankPage from '../BlankPage';
import OffersListKlantTable from '../../Tables/kitchen/OffersListKlantTable';
import CompanyNiewOffersTable from '../../Tables/kitchen/CompanyNiewOffersTable';

import css from 'dan-styles/TableHeader.scss';

class CompaniesOffers extends React.Component {
    state = {
        status: 'new'
    }
    render() {
        const title = brand.name + ' - Blank Page';
        const { status } = this.state;
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
                    <Grid className={css.headerComponent} container spacing={1}>
                        <Grid item xs={1}>
                            <span onClick={() => { this.setState({ status: "new" }) }}>Nieuw</span>
                        </Grid>
                        <Grid item xs={1}>
                            <span onClick={() => { this.setState({ status: "myOffers" }) }}>MIJN OFFERTES</span>
                        </Grid>
                        <Grid item xs={1}>
                            <span onClick={() => { this.setState({ status: "arranged" }) }}>GEREAGEERD</span>
                        </Grid>
                        <Grid item xs={1}>
                            <span onClick={() => { this.setState({ status: "handled" }) }} >AFGEHANDELD</span>
                        </Grid>
                    </Grid>
                    <hr />
                    {
                        status === 'new' && <CompanyNiewOffersTable />
                    }
                    {
                        status === 'myOffers' && <OffersListKlantTable />
                    }
                </BlankPage>
            </div>
        );
    }
}

export default CompaniesOffers;
