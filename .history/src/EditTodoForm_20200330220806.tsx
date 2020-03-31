import React, { useContext } from "react";
import { useTextInputState } from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";
import { DispatchContext } from "./context/todo.context";
import { INote } from "./actions/IState";
import IAction from "./actions/IAction";

const EditTodoForm = ({ id, task, completed, toggleEditForm }: INote) => {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useTextInputState(task);
  console.log("EDIT FORM RE-RENDER");
  return (
    <form
      onSubmit={(e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        reset();
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
