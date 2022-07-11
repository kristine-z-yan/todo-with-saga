import * as React from 'react';
import { useDispatch } from "react-redux";
import {IconButton, ListItem} from "@mui/material";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import Task from "../../models/task";
import {COMPLETE_TODO, DELETE_TODO} from "../Todo/reducers/actions";

const ToDoListItem: React.FC<Task> = (props) => {
    const dispatch = useDispatch();

    const completeTaskHandler = (id: number) => {
        dispatch({type: COMPLETE_TODO, id});
    };

    const deleteTaskHandler = (id: number) => {
        dispatch({type: DELETE_TODO, id})
    }

    return (
        <ListItem id={'task-' + props.id}>
            <ListItemButton role={undefined} onClick={() => completeTaskHandler(props.id)} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={props.completed}
                        tabIndex={-1}
                        disableRipple
                    />
                </ListItemIcon>
                <ListItemText  primary={props.title} />
            </ListItemButton>
            <IconButton edge="end" aria-label="delete" onClick={() => deleteTaskHandler(props.id)}>
                <DeleteIcon/>
            </IconButton>
        </ListItem>
    )
}

export default ToDoListItem;