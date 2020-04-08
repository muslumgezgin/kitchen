import React from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import dataMenu from 'dan-api/ui/userMenu';
import Dashboard from '../Templates/DashboardUsers';

import {
  Chat,
  UserDashboardPage,
  UserOffersPage,
  BlankPage,
  NotFound,
  UserNewOfferPage
} from '../pageListAsync';

class Users extends React.Component {
  render() {
    const { changeMode, history } = this.props;
    return (
      <Dashboard history={history} changeMode={changeMode} dataMenu={dataMenu}>
        <Switch>
          {/* Home */}
          <Route exact path="/users/dashboard" component={UserDashboardPage} />
          <Route path="/users/offers" component={UserOffersPage} />
          <Route path="/users/messages" component={Chat} />
          <Route path="/users/newOffer" component={UserNewOfferPage} />
          <Route path="/app/pages/blank-page" component={BlankPage} />

          {/* Default */}
          <Route component={NotFound} />
        </Switch>
      </Dashboard>
    );
  }
}

Users.propTypes = {
  changeMode: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default Users;
