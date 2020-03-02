/* eslint-disable quotes */
/* eslint-disable react/no-multi-comp */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */


import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Chip from '@material-ui/core/Chip';
import MUIDataTable from 'mui-datatables';
import css from 'dan-styles/Buttons.scss';
import Button from '@material-ui/core/Button';
import css2 from './index.scss';

import { Link } from 'react-router-dom';
import pdfImage from './images/pdf.svg';
import idealImage from './images/ideal.svg';


let counter = 0;
function createData(offertetype, datum, reacties, status, link) {
    counter += 1;
    return {
        id: counter,
        offertetype,
        datum,
        reacties,
        status: renderStatus(status),
        link
    };
}










const styles = theme => ({
    table: {
        '& > div': {
            overflow: 'auto'
        },
        '& table': {
            minWidth: 500,
            [theme.breakpoints.down('md')]: {
                '& td': {
                    height: 40
                }
            }
        }
    }
});
const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
    return <Link to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});
/*
  It uses npm mui-datatables. It's easy to use, you just describe columns and data collection.
  Checkout full documentation here :
  https://github.com/gregnb/mui-datatables/blob/master/README.md
*/
class AdvFilter extends React.Component {
    state = {
        columns: [
            {
                name: 'Offerte type',
                options: {
                    filter: true
                }
            },
            {
                name: 'Datum',
                options: {
                    filter: true,
                }
            },
            {
                name: 'Plaats',
                options: {
                    filter: true,
                }
            },
            {
                name: 'Waarde',
                options: {
                    filter: true,
                }
            },
            {
                name: 'Bijlage',
                options: {
                    filter: false,
                    customBodyRender: (value) => (
                        <Link to="">
                            <img src={pdfImage} alt="pdf" />
                        </Link>
                    )
                }
            },
            {
                name: 'Kopen',
                options: {
                    filter: false,
                    customBodyRender: (value) => this.renderBuy(value)
                }
            },
        ],
        data: [
            ['Modernkeuken 23 Offerte vergelijken', '18-08-2019', 'Amsterdam', '€ 12.500', "pdf", 50],
            ['Modernkeuken 23 Offerte vergelijken', '18-08-2019', 'Amsterdam', '€ 12.500', "pdf", 49],
            ['Modernkeuken 23 Offerte vergelijken', '18-08-2019', 'Amsterdam', '€ 12.500', "pdf", 50],
            ['Modernkeuken 23 Offerte vergelijken', '18-08-2019', 'Amsterdam', '€ 12.500', "pdf", 50],
            ['Modernkeuken 23 Offerte vergelijken', '18-08-2019', 'Amsterdam', '€ 12.500', "pdf", 50],
            ['Modernkeuken 23 Offerte vergelijken', '18-08-2019', 'Amsterdam', '€ 12.500', "pdf", 50],
            ['Modernkeuken 23 Offerte vergelijken', '18-08-2019', 'Amsterdam', '€ 12.500', "pdf", 50],
            ['Modernkeuken 23 Offerte vergelijken', '18-08-2019', 'Amsterdam', '€ 12.500', "pdf", 50],
            ['Modernkeuken 23 Offerte vergelijken', '18-08-2019', 'Amsterdam', '€ 12.500', "pdf", 50],
            ['Modernkeuken 23 Offerte vergelijken', '18-08-2019', 'Amsterdam', '€ 12.500', "pdf", 50],
            ['Modernkeuken 23 Offerte vergelijken', '18-08-2019', 'Amsterdam', '€ 12.500', "pdf", 50],
            ['Modernkeuken 23 Offerte vergelijken', '18-08-2019', 'Amsterdam', '€ 12.500', "pdf", 50],
            ['Modernkeuken 23 Offerte vergelijken', '18-08-2019', 'Amsterdam', '€ 12.500', "pdf", 50],
            ['Modernkeuken 23 Offerte vergelijken', '18-08-2019', 'Amsterdam', '€ 12.500', "pdf", 50],
            ['Modernkeuken 23 Offerte vergelijken', '18-08-2019', 'Amsterdam', '€ 12.500', "pdf", 50],
            ['Modernkeuken 23 Offerte vergelijken', '18-08-2019', 'Amsterdam', '€ 12.500', "pdf", 50]
        ]
    }


    renderBuy(value) {
        let name = '€' + value + ',-';
        return (
            <div
                className={css2.buyButton}
            >
                <span>{name}</span> &nbsp;
                <img src={idealImage} alt="" />
            </div>
        )
    }

    render() {
        const { columns, data } = this.state;
        const { classes } = this.props;
        const options = {
            onRowsDelete:
                (e) => {
                    console.log(e);
                    console.log("shfeu");
                },
            filterType: 'dropdown',
            responsive: 'stacked',
            print: true,
            rowsPerPage: 10,
            page: 0
        };
        return (
            <div className={css2.multiTableContainer}>
                <MUIDataTable
                    title="Employee list"
                    data={data}
                    columns={columns}
                    options={options}
                />
            </div>
        );
    }
}

AdvFilter.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdvFilter);
