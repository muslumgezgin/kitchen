import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import CreateIcon from "@material-ui/icons/Create";
//
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
//
import dummy from "dan-api/dummy/dummyContents";
import { withStyles } from "@material-ui/core/styles";
import data from "dan-api/apps/timelineData";
import { fetchAction } from "dan-actions/SocmedActions";
import styled from "styled-components";
import styles from "dan-components/SocialMedia/jss/cover-jss";

const ProfileWrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 26px 62px;
  box-shadow: 0 10px 15px 0 rgba(205, 205, 205, 0.5);
  background-color: #ffffff;
`;
const ProfilNavBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button {
    width: 246px;
    height: 41px;
    border-radius: 18px;
    background-color: #ff6600;

    // button text:
    color: white;
    font-family: OpenSans;
    font-size: 14px;
    font-weight: bold;
  }
`;
const ProfilePhotoWrapper = styled.figure`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
`;
const Figcaption = styled.figcaption`
  display: grid;
  margin-left: 18px;
  font-family: SourceSansPro;
  font-size: 14px;
  color: #000000;

  button {
    padding: 0;
  }
  span {
    color: #8b8b8b;
    font-size: 14px;
    font-family: SourceSansPro;
  }
`;
const FormField = styled.section`
  width: 100%;
  margin-top: 35px;
`;

function TabContainer(props) {
  const { children } = props;
  return <div style={{ paddingTop: 8 * 3 }}>{children}</div>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

class UserProfile extends React.Component {
  state = {
    value: 0
  };

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData(data);
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  // todo: implement this to change profile photo
  profilePhotoChange = () => {
    console.log("comming soon");
  };

  handleSubmit = () => {
    console.log("comming soon");
  };

  render() {
    const title = brand.name + " - Profile";
    const description = brand.desc;
    const { dataProps, classes } = this.props;
    const { value } = this.state;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <ProfileWrapper>
          <ProfilNavBar>
            <Button
              size="small"
              className={classes.buttonLink}
              to="/new-offer" // todo: make sure there is a new-offer comp.
            >
              nieuw offerte
              <Icon className={classes.icon}>arrow_forward</Icon>
            </Button>
          </ProfilNavBar>
          <ProfilePhotoWrapper>
            <img src={dummy.user.avatar} alt="" />
            <Figcaption>
              Profielfoto
              <Button
                size="small"
                className={classes.buttonLink}
                onClick={this.profilePhotoChange}
              >
                <CreateIcon fontSize="small" htmlColor="#818181" />
                <span>Wijzigen</span>
              </Button>
            </Figcaption>
          </ProfilePhotoWrapper>
          <FormField>
            <form onSubmit={this.handleSubmit}>
              <div className={classes.fieldBasic}>
                ..form fields..
              </div>
            </form>
          </FormField>
        </ProfileWrapper>
        {/* <Cover
          coverImg={bgCover}
          avatar={dummy.user.avatar}
          name={dummy.user.name}
          desc="Consectetur adipiscing elit."
        /> */}
        {/* <AppBar position="static" className={classes.profileTab}>
          <Hidden mdUp>
            <Tabs
              value={value}
              onChange={this.handleChange}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab icon={<AccountCircle />} />
              <Tab icon={<SupervisorAccount />} />
              <Tab icon={<Favorite />} />
              <Tab icon={<PhotoLibrary />} />
            </Tabs>
          </Hidden>
          <Hidden smDown>
            <Tabs
              value={value}
              onChange={this.handleChange}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab icon={<AccountCircle />} label="ABOUT" />
              <Tab icon={<SupervisorAccount />} label="20 CONNECTIONS" />
              <Tab icon={<Favorite />} label="18 FAVORITES" />
              <Tab icon={<PhotoLibrary />} label="4 ALBUMS" />
            </Tabs>
          </Hidden>
        </AppBar> */}
        {/* {value === 0 && <TabContainer><About data={dataProps} /></TabContainer>}
        {value === 1 && <TabContainer><Connection /></TabContainer>}
        {value === 2 && <TabContainer><Favorites /></TabContainer>}
        {value === 3 && <TabContainer><Albums /></TabContainer>} */}
      </div>
    );
  }
}

UserProfile.propTypes = {
  classes: PropTypes.object.isRequired,
  dataProps: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired
};

const reducer = "socmed";
const mapStateToProps = state => ({
  force: state, // force state from reducer
  dataProps: state.getIn([reducer, "dataTimeline"])
});

const constDispatchToProps = dispatch => ({
  fetchData: bindActionCreators(fetchAction, dispatch)
});

const UserProfileMapped = connect(
  mapStateToProps,
  constDispatchToProps
)(UserProfile);

export default withStyles(styles)(UserProfileMapped);
