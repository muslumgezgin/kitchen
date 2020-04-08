/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import css2 from 'dan-styles/Buttons.scss';
import css from './index.scss';

import RectangleBlock from '../../../components/RectangleBlock/RectangleBlock';
import BlankPage from '../BlankPage';
import OffersList from '../../OffersList';
import MessagesList from '../../MessagesList';
import GetPersonalInfo from './GetPersonalInfo';

class UserNewOffer extends React.Component {
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
                <BlankPage desc="Some text description" link="/users/newOffer">
                    <div className={css.newOfferComponent}>
                        <GetPersonalInfo />
                        <Button
                            variant="contained"
                            color=""
                            className={css2.seeButton}
                        >
                            BEKIJKEN &nbsp; &#x279C;
                        </Button>
                    </div>
                </BlankPage>
            </div>

        );
    }
}

export default withStyles({})(UserNewOffer);
