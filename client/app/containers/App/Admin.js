import React from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import dataMenu from 'dan-api/ui/adminMenu';
import Dashboard from '../Templates/DashboardUsers';

import {
  Chat,
  UserDashboardPage,
  UserOffersPage,
  BlankPage,
  NotFound,
  UserNewOfferPage
} from '../pageListAsync';

class Admin extends React.Component {
  render() {
    const { changeMode, history } = this.props;
    return (
      <Dashboard history={history} changeMode={changeMode} dataMenu={dataMenu}>
        <Switch>
          {/* Home */}
          <Route exact path="/admin/dashboard" component={UserDashboardPage} />
          <Route path="/admin/offers" component={UserOffersPage} />
          <Route path="/admin/messages" component={Chat} />
          <Route path="/admin/newOffer" component={UserNewOfferPage} />
          <Route path="/app/pages/blank-page" component={BlankPage} />
          {/* Default */}
          <Route component={NotFound} />
        </Switch>
      </Dashboard>
    );
  }
}

Admin.propTypes = {
  changeMode: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default Admin;
