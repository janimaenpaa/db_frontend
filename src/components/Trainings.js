import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ReactTable from 'react-table-v6'
import moment from 'moment';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '5% 20% 20% 20%',
        padding: theme.spacing(3, 2),

    },
}));

const Trainings = () => {
    const classes = useStyles();

    const [trainings, setTrainings] = useState([])

    useEffect(() => fetchData(), [])

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
            .then(response => response.json())
            .then(data => setTrainings(data))
    }

    const columns = [
        {
            Header: 'ID',
            accessor: 'id'
        },
        {
            Header: 'Date',
            accessor: 'date',
            Cell: row => {
                return (
                    <div>{moment(row.row.date).format("YYYY-MM-DD hh:mm")}</div>
                )
            }
        },
        {
            Header: 'Duration',
            accessor: 'duration'
        },
        {
            Header: 'Activity',
            accessor: 'activity'
        },
        {
            Header: 'Activity',
            accessor: 'activity'
        },
        {
            Header: 'Customer',
            accessor: 'customer',
            Cell: row => {
                let customer = ""
                if (row.row.customer !== null) {
                    customer = `${row.row.customer.firstname} ${row.row.customer.lastname}`
                } else {
                    customer = "null"
                }
                return (
                    <div>
                        {customer}
                    </div>
                )
            }
        },
    ]

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    Trainings
                </Typography>
                <Typography component="p">
                    Trainings listed.
                </Typography>
                <ReactTable filterable={true} data={trainings} columns={columns} defaultPageSize={10} />
            </Paper>
        </div>
    )
}

export default Trainings