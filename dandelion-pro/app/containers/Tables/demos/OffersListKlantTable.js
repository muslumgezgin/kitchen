import React from 'react';
import { AdvTable } from 'dan-components';
import Button from '@material-ui/core/Button';
import css from 'dan-styles/Buttons.scss'
import { Link } from 'react-router-dom';

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

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
    return <Link to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
  });

function renderStatus(status) {
    return (
        <Button
            variant="contained"
            color=""
            className={css.status+"Button"}
        >
           {status.toUpperCase()}
  </Button>
    )
}



function renderLink(link) {
    return (
        <Button
            variant="contained"
            color=""
            className={css.seeButton}
            component={LinkBtn}
            to={link}
        >
            BEKIJKEN &nbsp; &#x279C;
  </Button>
    )
}

class OffersList extends React.Component {
    state = {
        order: 'asc',
        orderBy: 'calories',
        selected: [],
        columnData: [
            {
                id: 'offertetype',
                numeric: false,
                disablePadding: true,
                label: 'Offertetype'
            }, {
                id: 'datum',
                numeric: false,
                disablePadding: false,
                label: 'Datum'
            }, {
                id: 'reacties',
                numeric: false,
                disablePadding: false,
                label: 'Reacties'
            }, {
                id: 'status',
                numeric: false,
                disablePadding: false,
                label: 'Status'
            }, {
                id: 'link',
                numeric: false,
                disablePadding: false,
                label: ''
            },
        ],
        data: [
            createData('Offerte vergelijking 1', "18-08-2019", "3 reacties", "active", "/users/dashboard"),
            createData('Offerte aanvrag 1', "18-08-2019", "5 reacties", "concept", "/users/dashboard"),
            createData('3d ontwerp 1', "18-08-2019", "0 reacties", "settle", "/users/dashboard")
        ],
        page: 0,
        rowsPerPage: 5,
        defaultPerPage: 5,
        filterText: '',
    };

    render() {
        const {
            order,
            orderBy,
            selected,
            data,
            page,
            rowsPerPage,
            defaultPerPage,
            filterText,
            columnData
        } = this.state;

        return (
            <AdvTable
                order={order}
                orderBy={orderBy}
                selected={selected}
                data={data}
                page={page}
                rowsPerPage={rowsPerPage}
                defaultPerPage={defaultPerPage}
                filterText={filterText}
                columnData={columnData}
            />
        );
    }
}


export default OffersList;
