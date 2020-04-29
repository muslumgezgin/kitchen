import React from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import dataMenu from 'dan-api/ui/adminMenu';
import Dashboard from '../Templates/DashboardUsers';

import {
  Chat,
  AdminDashBoardPage,
  AdminOffersPage,
  AdminUserList,
  AdminCompaniesList,
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
          <Route exact path="/admin/dashboard" component={AdminDashBoardPage} />
          <Route path="/admin/offers" component={AdminOffersPage} />
          <Route path="/admin/messages" component={Chat} />
          <Route path="/admin/users" component={AdminUserList} />
          <Route path="/admin/companies" component={AdminCompaniesList} />
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
