/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { Tabs, Tab } from '@material-ui/core';
import BlankPage from '../BlankPage';
import AdminConceptTable from '../../Tables/kitchen/AdminConceptTable';
import AdminActifTable from '../../Tables/kitchen/AdminActifTable';
import AdminFinishedTable from '../../Tables/kitchen/AdminFinishedTable';


class AdminOffers extends React.Component {
    state = {
        value: 0
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const title = brand.name + ' - Blank Page';
        const { value } = this.state;
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
                <BlankPage desc="Some text description">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="CONCEPT" />
                        <Tab label="ACTIEF" />
                        <Tab label="KLAAR" />
                    </Tabs>

                    <hr />
                    {
                        value === 0 && <AdminConceptTable />
                    }
                    {
                        value === 1 && <AdminActifTable />
                    }
                    {
                        value === 2 && <AdminFinishedTable />
                    }
                </BlankPage>
            </div>
        );
    }
}

export default AdminOffers;
