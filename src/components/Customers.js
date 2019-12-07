import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'

const useStyles = makeStyles(theme => ({
    root: {
        margin: '5% 20% 20% 20%',
        padding: theme.spacing(3, 3),

    },
}));

const Customers = () => {
    const [customers, setCustomers] = useState([])

    const classes = useStyles();

    useEffect(() => fetchData(), [])

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
            .then(response => response.json())
            .then(data => setCustomers(data.content))
    }

    const columns = [
        {
            Header: 'First name',
            accessor: 'firstname'
        },
        {
            Header: 'Last name',
            accessor: 'lastname'
        },
        {
            Header: 'Street address',
            accessor: 'streetaddress'
        },
        {
            Header: 'Postcode',
            accessor: 'postcode'
        },
        {
            Header: 'City',
            accessor: 'city'
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'Phone number',
            accessor: 'phone'
        },
    ]

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    Customers
                </Typography>
                <Typography component="p">
                    Customers listed.
                </Typography>
                <ReactTable filterable={true} data={customers} columns={columns} defaultPageSize={10} />
            </Paper>
        </div>
    )
}

export default Customers