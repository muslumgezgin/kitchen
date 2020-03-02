/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


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
});

class GetPersonalInfo extends Component {


    render() {
        return (
            <div style={{ marginLeft: '5%', marginRight: '5%', marginTop: '3%' }}>
                <TextField
                    id="filled-with-placeholder"
                    label="With placeholder"
                    placeholder="Placeholder"
                    margin="normal"
                    variant="filled"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    fullWidth

                />
                <br />
                <TextField
                    id="filled-with-placeholder"
                    label="With placeholder"
                    placeholder="Placeholder"
                    margin="normal"
                    variant="filled"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    fullWidth
                />
            </div>
        )
    }
}

export default withStyles(styles)(GetPersonalInfo)
