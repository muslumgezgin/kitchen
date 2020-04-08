/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { Component } from 'react'
import { TextField, Typography, LinearProgress } from '@material-ui/core';
import { withStyles, lighten } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { MaterialDropZone } from 'dan-components';


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
    upload:{
        marginLeft: '10px',
        marginTop: '20px'
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
    state = {
        files: []
    }

    render() {
        const { classes } = this.props;
        const { files } = this.state;

        return (
                <div style={{ marginLeft: '5%', marginRight: '5%', marginTop: '3%' }}>
                    <div className={classes.margin}>
                        <BorderLinearProgress
                            className={classes.margin}
                            variant="determinate"
                            color="secondary"
                            value={10}
                        />
                    </div>

                    <Typography className={classes.label} variant="button">
                        Naam
                    </Typography>

                    <TextField
                        id="outline        const { classes } = this.props;
                        d-full-width"
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
                            showButton
                        />
                    </div>

                </div>
        );
    }
}

GetPersonalInfo.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(GetPersonalInfo)
