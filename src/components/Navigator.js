import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    nav: {
        padding: '0 30px',
        margin: '10px',
    }
}));

const Navigator = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar style={{ backgroundColor: '#363636' }} position="static">
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        PT-Database
                    </Typography>
                    
                    <Typography variant="h6" className={classes.nav}>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/">Customers</Link>
                    </Typography>

                    <Typography variant="h6" className={classes.nav}>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to="/trainings">Trainings</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div >
    )
}

export default Navigator