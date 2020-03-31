import React, { useContext } from "react";
import { useTextInputState } from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";
import { DispatchContext } from "./context/todo.context";
import { INote } from "./actions/IState";
import { EActionType } from "./actions/IAction";

const EditTodoForm = ({ id, task, completed, toggleEditForm }: INote) => {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useTextInputState(task);
  console.log("EDIT FORM RE-RENDER");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({
          type: EActionType.ADD,
          payload: {}
        });
        reset();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        fullWidth
        autoFocus
      />
    </form>
  );
};

export default EditTodoForm;
