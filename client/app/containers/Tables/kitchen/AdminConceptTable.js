/* eslint-disable class-methods-use-this */
/* eslint-disable quotes */
/* eslint-disable react/no-multi-comp */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */


import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MUIDataTable from 'mui-datatables';
import { Link } from 'react-router-dom';
import { Button, Dialog, Slide, AppBar, IconButton, Typography, Toolbar, Grid, Table, Paper, TableBody, TableCell, TableRow, TableHead } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import css from 'dan-styles/Buttons.scss';
import css2 from './index.scss';
import { MaterialDropZone } from 'dan-components';


import pdfImage from './images/pdf.svg';
import Axios from 'axios';


const styles = theme => ({
    table: {
        '& > div': {
            overflow: 'auto'
        },
        '& table': {
            minWidth: 500,
            [theme.breakpoints.down('md')]: {
                '& td': {
                    height: 40
                }
            }
        }
    },
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    }
});
const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
    return <Link to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
/*
  It uses npm mui-datatables. It's easy to use, you just describe columns and data collection.
  Checkout full documentation here :
  https://github.com/gregnb/mui-datatables/blob/master/README.md
*/
class AdvFilter extends React.Component {
    state = {
        open: false,
        files: [],
        columns: [
            {
                name: 'Offerte type',
                options: {
                    filter: true,
                    customBodyRender: (value) => this.renderType(value)
                }
            },
            {
                name: 'Datum',
                options: {
                    filter: true,
                }
            },
            {
                name: 'Gebruiker',
                options: {
                    filter: true,
                }
            },
            {
                name: 'Plaats',
                options: {
                    filter: true,
                }
            },
            {
                name: 'Termijn',
                options: {
                    filter: true,
                }
            },
            {
                name: 'Bijlage',
                options: {
                    filter: false,
                    customBodyRender: () => (
                        <Link to="">
                            <img src={pdfImage} alt="pdf" />
                        </Link>
                    )
                }
            },
            {
                name: "",
                options: {
                    filter: false,
                    customBodyRender: (value) => this.renderLink(value)
                }
            },
        ],
        data: [
            ['Offerte vergelijkiing', '18-08-2019', 'Ali Oz', 'Amsterdam', '3 manden', 'pdf', 'link'],
            ['3d ontwerp offerte ', '18-08-2019', 'Ali Oz', 'Amsterdam', '6 manden', 'pdf', 'link']

        ]
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    getFiles = (files) => {
        this.setState({ files });
    }

    renderLink(link) {
        return (
            <Button
                variant="contained"
                color=""
                className={css.seeButton}
                onClick={this.handleClickOpen}
            >
                BEWERKEN &nbsp; &#x279C;
            </Button>
        );
    }

    renderType(value) {
        return (
            <div>
                {value}
            </div>
        );
    }

    download(url) {
        // fake server request, getting the file url as response
        setTimeout(() => {
            const response = {
                file: url,
            };
            // server sent the url to the file!
            // now, let's download:
            window.open(response.file);
            // you could also do:
            // window.location.href = response.file;
        }, 100);
    }

    handleClick1 = (urls) => {

        Axios({

            url: urls,

            method: 'GET',

            responseType: 'blob', // important

        }).then((response) => {

            const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/octet-stream', responseType: 'arraybuffer' }));

            const link = document.createElement('a');

            link.href = url;

            link.setAttribute('download', 'JSONSearchResultsData.zip');

            document.body.appendChild(link);

            link.click();

        });

    };

    render() {
        const { columns, data, files } = this.state;
        const { classes } = this.props;
        const options = {
            onRowsDelete:
                (e) => {
                    console.log(e);
                    console.log("shfeu");
                },
            filterType: 'dropdown',
            responsive: 'stacked',
            print: true,
            rowsPerPage: 10,
            page: 0
        };
        return (
            <div className={css2.multiTableContainer}>
                <Dialog fullScreen open={this.state.open} onClose={this.handleClose} Transition={Transition}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                Sound
                            </Typography>
                            <Button autoFocus color="inherit" onClick={this.handleClose}>
                                save
                            </Button>
                        </Toolbar>
                    </AppBar>

                    <Grid container>

                        <Grid xs={6}>
                            <ul>
                                <li onClick={() => this.handleClick1("https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/ac/b2/be/acb2beec-515f-96e4-8041-c779b44fc0b0/AppIcon-0-1x_U007emarketing-0-7-0-0-85-220.png/1200x630wa.png")}>file to download</li>
                            </ul>
                        </Grid>
                        <Grid xs={6}>
                            <MaterialDropZone
                                files={files}
                                showPreviews
                                maxSize={5000000}
                                filesLimit={5}
                                text="Sleep bestanden hierheen
                            of klik op bladeren"
                                header='Upload'
                                showButton={true}
                                getFiles={this.getFiles}
                            />
                        </Grid>
                    </Grid>

                </Dialog>
                <MUIDataTable
                    title=""
                    data={data}
                    columns={columns}
                    options={options}
                />
            </div>
        );
    }
}

AdvFilter.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdvFilter);
