import React, { useContext } from "react";
import Todo from "./Todo";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { TodosContext } from "./context/todo.context";

const TodoList = () => {
  const notes = useContext(TodosContext);
  if (notes)
    return (
      <Paper>
        <List>
          {notes.map(
            (todo, i) =>
              todo && (
                // To add a key to a fragment, we have to use the long-hand version
                // rather than <> </>, we have to use <React.Fragment>
                <React.Fragment key={i}>
                  <Todo {...todo} key={todo.id} />
                  {i < notes.length - 1 && <Divider />}
                </React.Fragment>
              )
          )}
        </List>
      </Paper>
    );
  return null;
};

export default TodoList;
