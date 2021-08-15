import { Input, Button, List, ListItem, ListItemAvatar, ListItemText, Modal } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react'
import './Todo.css';
import db from './firebase'

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        marginLeft: 450
    },
}));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState('');

    const handleOpen = () => {
        setOpen(true);
    }
    const updateTask = () => {
        db.collection('todos').doc(props.task.id).set({
            task: input
        }, { merge: true });
        setOpen(false);
    }
    return (
        <>
            <Modal open={open} onClose={e => setOpen(false)}>
                <div className={classes.paper}>
                    <h3>Update My Task</h3>
                    <Input placeholder={props.task.task} value={input} onChange={e => setInput(e.target.value)} /><br /><br />
                    <Button type="submit" onClick={updateTask} disabled={!input} variant="contained" color="primary">Update Task</Button>
                </div>
            </Modal>
            <List>
                <ListItem>
                    <ListItemAvatar>

                    </ListItemAvatar>
                    <ListItemText primary={props.task.task} secondary="your todo" />
                </ListItem>
                <Button onClick={handleOpen} variant="contained" color="secondary" >Edit</Button>&nbsp;
                <DeleteForeverIcon onClick={e => db.collection('todos').doc(props.task.id).delete()} />
            </List>
        </>

    )
}

export default Todo
