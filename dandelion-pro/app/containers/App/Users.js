import React from "react";
import { PropTypes } from "prop-types";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../Templates/DashboardUsers";
import {
  PersonalDashboard,
  CrmDashboard,
  CryptoDashboard,
  Infographics,
  MiniApps,
  Analytics,
  InfoUpdates,
  Status,
  Parent,
  AppLayout,
  Responsive,
  Grid,
  SimpleTable,
  AdvancedTable,
  TablePlayground,
  TreeTable,
  EditableCell,
  ReduxForm,
  DateTimePicker,
  CheckboxRadio,
  Switches,
  Selectbox,
  Rating,
  SliderRange,
  Buttons,
  DialButton,
  ToggleButton,
  Textbox,
  Autocomplete,
  Upload,
  TextEditor,
  Avatars,
  Accordion,
  Badges,
  List,
  PopoverTooltip,
  Snackbar,
  Typography,
  Tabs,
  Cards,
  ImageGrid,
  Progress,
  DialogModal,
  Steppers,
  Paginations,
  DrawerMenu,
  Breadcrumbs,
  Icons,
  IonIcons,
  SliderCarousel,
  Tags,
  Dividers,
  LineCharts,
  BarCharts,
  AreaCharts,
  PieCharts,
  RadarCharts,
  ScatterCharts,
  CompossedCharts,
  DoughnutCharts,
  BarDirection,
  LineScatterChart,
  AreaFilledChart,
  RadarPolarCharts,
  Contact,
  Chat,
  Email,
  TaskBoard,
  Ecommerce,
  Timeline,
  Calendar,
  ProductPage,
  Invoice,
  Profile,
  BlankPage,
  Photos,
  Pricing,
  CheckoutPage,
  Error,
  Settings,
  HelpSupport,
  MapMarker,
  MapDirection,
  SearchMap,
  TrafficIndicator,
  StreetViewMap,
  NotFound
} from "../pageListAsync";

class Users extends React.Component {
  render() {
    const { changeMode, history } = this.props;
    return (
      <Dashboard history={history} changeMode={changeMode}>
        <Switch>
          {/* Home */}
          <Route exact path="/users/dashboard" component={BlankPage} />
          <Route path="/users/offers" component={BlankPage} />
          <Route path="/users/messages" component={Chat} />
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