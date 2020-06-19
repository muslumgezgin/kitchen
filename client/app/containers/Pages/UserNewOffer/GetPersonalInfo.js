/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { Component } from 'react'
import { TextField, Typography, LinearProgress, Button, GridList, Grid, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { withStyles, lighten } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { MaterialDropZone } from 'dan-components';
import css2 from 'dan-styles/Buttons.scss';

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
            value: 10,
            count: 1,
            answer_one: "6 maanden",
            answer_second: "6 maanden"
        }
        this.handlePageStatus = this.handlePageStatus.bind(this);
        this.handlePageBack = this.handlePageBack.bind(this);
    }

    getFiles = (files) => {
        this.setState({ files });
    }
    handlePageStatus() {
        let { count, value } = this.state;
        if (count === 1) {
            value = 70;
        }
        count++;
        this.setState({ count, value })
    }

    handlePageBack() {
        let { count, value } = this.state;
        if (count === 2) {
            value = 10
        }
        count--;
        this.setState({ count, value })
    }

    render() {
        const { classes } = this.props;
        const { files, value, count, answer_one, answer_second } = this.state;
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
                        <Typography className={classes.label} variant="button">
                            Naam
                        </Typography>
                        <TextField
                            id="outlined-full-width"
                            style={{ margin: 8 }}
                            placeholder="Uw naam en achternaam"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <br />
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
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <div className={classes.upload}>
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
                                />
                            </Grid>
                            <Grid md={6} xs={12}>
                                <FormControl>
                                    <Typography className={classes.label} variant="button">
                                        Wat is de gewenste termijn
                                </Typography>
                                <InputLabel htmlFor="uncontrolled-native'">Namess</InputLabel>
                                    <Select
                                        labelId="demo-customized-select-label"
                                        id="demo-customized-select"
                                        value={answer_one}
                                        defaultValue={"6 maanden"}
                                        id='uncontrolled-native'
                                        onChange={() => { }}

                                    >
                                        <MenuItem value={"6 manden"}>6 maanden</MenuItem>
                                        <MenuItem value={"9 manden"}>9 maanden</MenuItem>
                                        <MenuItem value={"1 jaar"}>1 jaar</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid md={6} xs={12}>
                                <Typography className={classes.label} variant="button">
                                    Wat is de gewenste termijn
                                </Typography>
                                <Select
                                    labelId="demo-customized-select-label"
                                    id="demo-customized-select"
                                    value={answer_second}
                                    onChange={() => { }}
                                >
                                    <MenuItem value={"6 manden"}>6 maanden</MenuItem>
                                    <MenuItem value={"9 manden"}>9 maanden</MenuItem>
                                    <MenuItem value={"1 jaar"}>1 jaar</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>
                    </div>
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

            </div>
        );
    }
}

GetPersonalInfo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GetPersonalInfo)
