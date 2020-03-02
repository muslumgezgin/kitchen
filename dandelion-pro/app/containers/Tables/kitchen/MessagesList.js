import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import styles from 'dan-components/Tables/tableStyle-jss';
import css from './index.scss';
import { Grid } from '@material-ui/core';


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

const datasss = [
    createData('logo', 'Keukenconcurrent', "Tot ziens.."),
    createData('logo', 'Superkeukens', "is aan het typen"),
    createData('logo', 'Superkeukens', "is aan het typen")
];

function MessagesList(props) {
    const { classes, data } = props;
    return (
        <Fragment>
            <div className={css.messagesComponent}>
                {data && data.map(n => ([
                    <Grid container className={css.messagesRow}>

                        {n.logo &&
                            <Grid item xs={3} >
                                {n.logo}
                            </Grid>
                        }
                        <Grid item xs={8} >
                            <div className={css.companyCell}>
                                <h3>{n.name}</h3>
                                <span>{n.status}</span>
                            </div>
                        </Grid>
                    </Grid>
                ]))}
            </div>
        </Fragment >
    );
}

MessagesList.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired
};

export default withStyles(styles)(MessagesList);