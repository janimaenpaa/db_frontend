import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

const EditTraining = (props) => {
    const [open, setOpen] = useState(false);
    const [training, setTraining] = useState({
        id: '', date: '', duration: '', activity: '', customer: ''
    })

    const handleClickOpen = () => {
        setTraining({
            id: props.training.id, date: props.training.date, duration: props.training.duration, 
            activity: props.training.activity, customer: props.training.customer
        })
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleInputChange = (event) => {
        setTraining({ ...training, [event.target.name]: event.target.value })
    }

    const updateTraining = () => {
        props.updateTraining(training, props.training.links[0].href)
        handleClose()
    }

    return (
        <div>
            <Button color="primary" onClick={handleClickOpen}>
                Edit
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit Training</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="id"
                        value={training.id}
                        onChange={e => handleInputChange(e)}
                        label="ID"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="date"
                        value={training.date}
                        onChange={e => handleInputChange(e)}
                        label="Date"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="duration"
                        value={training.duration}
                        onChange={e => handleInputChange(e)}
                        label="Duration"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="activity"
                        value={training.activity}
                        onChange={e => handleInputChange(e)}
                        label="Activity"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="customer"
                        value={training.customer}
                        onChange={e => handleInputChange(e)}
                        label="Customer"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={updateTraining} color="primary">
                        Save
          </Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}

export default EditTraining