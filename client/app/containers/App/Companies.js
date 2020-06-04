/* eslint-disable padded-blocks */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { PropTypes } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import dataMenu from 'dan-api/ui/companyMenu';
import Dashboard from '../Templates/DashboardUsers';

import {
  Chat,
  CompaniesDashBoardPage,
  CompaniesOffersPage,
  BlankPage,
  NotFound
} from '../pageListAsync';

class Companies extends React.Component {

  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.redirect(user.type);
    }
  }

  redirect(type) {
    if (type === 'admin') {
      this.props.history.push('/admin');

    } else if (type === 'company') {
      this.props.history.push('/companies');

    } else if (type === 'user') {
      this.props.history.push('/users');
    } else {
      this.props.history.push('/login');
    }
  }

  render() {
    const { changeMode, history } = this.props;
    return (
      <Dashboard history={history} changeMode={changeMode} dataMenu={dataMenu}>
        <Switch>
          <Route exact path="/companies/dashboard" component={CompaniesDashBoardPage} />
          <Route path="/companies/offers" component={CompaniesOffersPage} />
          <Route path="/companies/messages" component={Chat} />
          <Route path="/app/pages/blank-page" component={BlankPage} />
          <Route component={NotFound} />
        </Switch>
      </Dashboard>
    );
  }
}

Companies.propTypes = {
  changeMode: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default Companies;
