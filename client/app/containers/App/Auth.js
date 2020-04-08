import React from "react";
import { Switch, Route } from "react-router-dom";
import Outer from "../Templates/Outer";
import {
  Login,
  LoginV2,
  LoginV3,
  Register,
  RegisterV2,
  RegisterV3,
  ResetPassword,
  LockScreen,
  ComingSoon,
  Maintenance,
  NotFound
} from "../pageListAsync";

class Auth extends React.Component {
  render() {
    return (
      <Outer>
        <Switch>
          <Route path="/login" component={LoginV2} />
          <Route path="/register" component={RegisterV2} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route component={NotFound} />
        </Switch>
      </Outer>
    );
  }
}

export default Auth;
