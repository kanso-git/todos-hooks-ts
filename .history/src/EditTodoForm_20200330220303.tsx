import React, { useContext } from "react";
import { useTextInputState } from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";
import { DispatchContext } from "./context/todos.context";
import { INote } from "./actions/IState";

const EditTodoForm = ({ id, task, toggleEditForm }: INote) => {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useTextInputState(task);
  console.log("EDIT FORM RE-RENDER");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: id, newTask: value });
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
};

export default EditTodoForm;
