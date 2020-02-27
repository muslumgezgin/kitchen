import React, { Component } from 'react';
import css from './index.scss';
import DashBoardOffersTable from '../../containers/Tables/demos/DashBoardOffersTable'

export default class index extends Component {
    render() {
        return (
            <div className={css.componentOfferList}>
                <div className={css.listContent}>
                    <h2>Mijn Offers </h2>
                    <DashBoardOffersTable/>
                </div>
            </div>
        )
    }
}
