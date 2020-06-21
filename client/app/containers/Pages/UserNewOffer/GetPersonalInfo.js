/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { Component } from 'react'
import { TextField, Typography, LinearProgress, Button, GridList, Grid, Select, MenuItem, FormControl, InputLabel, StepLabel } from '@material-ui/core';
import { withStyles, lighten } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { MaterialDropZone } from 'dan-components';
import css2 from 'dan-styles/Buttons.scss';
import styled from 'styled-components';
import config from '../../../actions/config';
import { Link } from 'react-router-dom';

const StyledLastPage = styled.div`
  height:"1500px";
  width:'1000px';
  font-size: 28px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
  margin-bottom:45px;
  @media screen and (max-width: 400px) {
        font-size: 24px;

    }
`

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    menu: {
        width: 200,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 1.36,
        marginLeft: '20px'
    },
    margin: {
        marginTop: '20px',
        marginLeft: '20px',
        marginBottom: '30px'
    },
    upload: {
        marginLeft: '10px',
        marginTop: '20px'
    },
    root: {
        flexGrow: 1,
        paddingBottom: theme.spacing(15)
    },
    paper: {
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    formControl: {
        width: '100%',
        paddingTop: theme.spacing(2),
    },
    labelError: {
        marginLeft: "20px",
    },
    selectForm: {
        height: "3.6em"
    },
    pushCenter: {
        marginLeft: '25%',
        marginRight: '25%',
        marginTop: '15%'
    }
});

const BorderLinearProgress = withStyles({
    root: {
        height: 18,
        backgroundColor: lighten('#ff6c5c', 0.5),
    },
    bar: {
        borderRadius: 20,
        backgroundColor: '#ff6600',
    },
})(LinearProgress);

class GetPersonalInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            files: [],
            isError: false,
            value: 10,
            count: 1,
            answer_one: "6 maanden",
            answer_second: "6 maanden",
            email: "",
            isEmail: false,
            name: "",
            street: "",
            land: "",
            city: "",
            postcode: "",
            house_number: "",
            telephone_number: ""
        }
        this.handlePageStatus = this.handlePageStatus.bind(this);
        this.handlePageBack = this.handlePageBack.bind(this);
        this.goToHome = this.goToHome.bind(this);
    }

    getFiles = (files) => {
        this.setState({ files });
    }
    handlePageStatus() {
        let { count, value, isEmail, name, isError, files,
            house_number, postcode, city, land, telephone_number, answer_one, answer_second
        } = this.state;
        if (count === 1) {
            if (name && isEmail && files.length > 0) {
                count++;
                value = 70;
                isError = false;
            } else {
                isError = true
            }
        } else if (count === 2) {
            if (house_number && postcode && city && land
                && telephone_number && answer_one && answer_second) {
                count++;
                value = 100;
                isError = false;
            } else {
                isError = true;
            }
        }
        this.setState({ count, value, isError })
    }

    handlePageBack() {
        let { count, value, isError } = this.state;
        if (count === 2) {
            value = 10
        }
        isError = false;
        count--;
        this.setState({ count, value })
    }

    goToHome(e) {
        console.log(e);
        this.props.history.push(config.baseurl + '/login');
    }

    render() {
        const { classes } = this.props;
        const {
            files,
            value,
            count,
            answer_one,
            answer_second,
            email,
            isEmail,
            name,
            isError,
            land,
            city,
            postcode,
            house_number,
            telephone_number
        } = this.state;
        return (
            <div style={{ marginLeft: '5%', marginRight: '5%', marginTop: '3%' }}>
                <div>
                    <BorderLinearProgress
                        className={classes.margin}
                        variant="determinate"
                        color="secondary"
                        value={value}
                    />
                </div>
                {count === 1 &&
                    <>
                        <Grid container spacing={3}>
                            <Grid xs={12}>
                                <Typography className={classes.label} variant="button">
                                    Naam
                                 </Typography>
                                <TextField
                                    id="outlined-full-width"
                                    placeholder="Uw naam en achternaam"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    style={{ margin: 8 }}
                                    value={name}
                                    className={classes.paper}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(e) => {
                                        let name = e.target.value;
                                        this.setState({ name });
                                    }}
                                />
                            </Grid>
                            <Grid xs={12}>
                                <Typography className={classes.label} variant="button">
                                    E-mail
                                </Typography>
                                <TextField
                                    id="outlined-full-width"
                                    style={{ margin: 8 }}
                                    placeholder="Uw e-mail adres"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    value={email}
                                    className={classes.paper}
                                    onChange={(e) => {
                                        let email = e.target.value;
                                        const isEmail = validateEmail(email)
                                        this.setState({ email, isEmail });
                                    }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                {!isEmail &&
                                    <StepLabel error className={classes.labelError}>
                                        voer het juiste e-mailformaat in
                                </StepLabel>
                                }
                            </Grid>
                            <Grid xs={12}>
                                <div className={classes.upload + " " + classes.paper}>
                                    <MaterialDropZone
                                        files={files}
                                        showPreviews
                                        maxSize={5000000}
                                        filesLimit={5}
                                        text="Drag and drop file(s) here or click button bellow"
                                        showButton={false}
                                        getFiles={this.getFiles}
                                    />
                                </div>
                            </Grid>

                        </Grid>
                    </>
                }

                {count === 2 &&
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid md={7} xs={12}>
                                <Typography className={classes.label} variant="button">
                                    Adres
                                </Typography>
                                <TextField
                                    id="outlined-full-width"
                                    placeholder="Bramzeiil 145"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    className={classes.paper}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={house_number}
                                    onChange={(e) => {
                                        let house_number = e.target.value;
                                        this.setState({ house_number });
                                    }}
                                />
                            </Grid>
                            <Grid md={5} xs={12}>
                                <Typography className={classes.label} variant="button">
                                    Postcode
                                </Typography>
                                <TextField
                                    id="outlined-full-width"
                                    placeholder="1034 LE"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    className={classes.paper}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={postcode}
                                    onChange={(e) => {
                                        let postcode = e.target.value;
                                        this.setState({ postcode });
                                    }}
                                />
                            </Grid>
                            <Grid md={6} xs={12}>
                                <Typography className={classes.label} variant="button">
                                    Woonplaats
                                </Typography>
                                <TextField
                                    id="outlined-full-width"
                                    placeholder="Amsterdam"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    className={classes.paper}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={city}
                                    onChange={(e) => {
                                        let city = e.target.value;
                                        this.setState({ city });
                                    }}
                                />
                            </Grid>
                            <Grid md={6} xs={12}>
                                <Typography className={classes.label} variant="button">
                                    Land
                                </Typography>
                                <TextField
                                    id="outlined-full-width"
                                    placeholder="Nederland"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    className={classes.paper}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={land}
                                    onChange={(e) => {
                                        let land = e.target.value;
                                        this.setState({ land });
                                    }}
                                />
                            </Grid>
                            <Grid md={12} xs={12}>
                                <Typography className={classes.label} variant="button">
                                    Telefoon
                                </Typography>
                                <TextField
                                    id="outlined-full-width"
                                    placeholder="+31621816448"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    className={classes.paper}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={telephone_number}
                                    onChange={(e) => {
                                        let telephone_number = e.target.value;
                                        this.setState({ telephone_number });
                                    }}
                                />
                            </Grid>
                            <Grid md={6} xs={12}>
                                <Typography className={classes.label} variant="button">
                                    Wat is de gewenste termijn
                                    </Typography>
                                <FormControl className={classes.formControl + " " + classes.paper}>
                                    <Select
                                        labelId="demo-customized-select-label"
                                        id="demo-customized-select"
                                        value={answer_one}
                                        defaultValue={"6 maanden"}
                                        id='uncontrolled-native'
                                        className={classes.selectForm}
                                        onChange={(e) => {
                                            let answer_one = e.target.value;
                                            this.setState({ answer_one });
                                        }}
                                    >
                                        <MenuItem value={"6 maanden"}>6 maanden</MenuItem>
                                        <MenuItem value={"9 maanden"}>9 maanden</MenuItem>
                                        <MenuItem value={"1 jaar"}>1 jaar</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid md={6} xs={12}>
                                <Typography className={classes.label} variant="button">
                                    Wat is de gewenste termijn
                                    </Typography>
                                <FormControl className={classes.formControl + " " + classes.paper}>
                                    <Select
                                        labelId="demo-customized-select-label"
                                        id="demo-customized-select"
                                        value={answer_second}
                                        className={classes.selectForm}
                                        defaultValue={"6 maanden"}
                                        id='uncontrolled-native'
                                        onChange={(e) => {
                                            let answer_second = e.target.value;
                                            this.setState({ answer_second })
                                        }}

                                    >
                                        <MenuItem value={"6 maanden"}>6 maanden</MenuItem>
                                        <MenuItem value={"9 maanden"}>9 maanden</MenuItem>
                                        <MenuItem value={"1 jaar"}>1 jaar</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </div>
                }
                {isError &&
                    <StepLabel error className={classes.labelError}>
                        vul de vereiste plaatsen in
                    </StepLabel>
                }


                {count == 2 &&
                    <Button
                        variant="contained"

                        className={css2.vidgetButton}
                        onClick={this.handlePageBack}
                    >
                        VORIGE
                </Button>
                }
                {count <= 2 &&
                    <Button
                        variant="contained"
                        className={css2.seeButton + " " + css2.floatRight + " " + css2.vidgetButton}
                        onClick={this.handlePageStatus}
                    >
                        BEKIJKEN &nbsp; &#x279C;
                </Button>
                }

                {count === 3 &&
                    <div className={classes.pushCenter}>
                        <StyledLastPage>
                            Bedankt voor uw aanvraag!<br />
                            Hier komt een
                            <br />bevestigingsbericht.
                        </StyledLastPage>
                        <Link to={config.baseurl + 'login'}>
                            <Button
                                variant="contained"
                                className={css2.goToLink + " " + css2.seeButton + " " + css2.vidgetButton}
                                onClick={this.goToHome}
                            >
                                NAAR OFFERTE &nbsp; &#x279C;
                        </Button>
                        </Link>
                    </div>
                }

            </div>
        );
    }
}

GetPersonalInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GetPersonalInfo)
