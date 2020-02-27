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

function createData(type, datum, reactions) {
  return {
    type,
    datum,
    reactions
  };
}

const data = [
  createData('Modernkeuken 23', '18-08-201917:30 uur', 3),
  createData('Modernkeuken 25', '18-08-201917:30 uur', 3),
];

function DashBoardOffersTable(props) {
  const { classes } = props;
  return (
    <Fragment>
      <div className={classes.rootTable}>
        <Table >
          <TableBody>
            {data.map((n,index) => ([
              <TableRow key={n.index}>
                <TableCell>{n.type}</TableCell>
                <TableCell>{n.datum}</TableCell>
                <TableCell>{n.reactions} reacties</TableCell>
              </TableRow>
            ]))}
          </TableBody>
        </Table>
      </div>
    </Fragment>
  );
}

DashBoardOffersTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashBoardOffersTable);