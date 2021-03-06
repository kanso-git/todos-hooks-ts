import React, { useContext, memo } from "react";
import useToggleState from "./hooks/useToggle";
import EditTodoForm from "./EditTodoForm";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { DispatchContext } from "./context/todo.context";
import { INote } from "./actions/IState";
import { EActionType } from "./actions/IAction";

const Todo = ({ id, task, completed }: INote) => {
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggle] = useToggleState(false);
  console.log("render todo", task);

  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleEditForm={toggle} />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() =>
              dispatch({ type: EActionType.TOGGLE, payload: { id } })
            }
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() =>
                dispatch({ type: EActionType.REMOVE, payload: { id } })
              }
            >
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

export default memo(Todo);
