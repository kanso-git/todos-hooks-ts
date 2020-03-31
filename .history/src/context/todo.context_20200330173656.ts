import { createContext } from "react";
import { INote } from "../actions/IState";
import IAction from "../actions/IAction";
type Dispatch<A> = (value: A) => void;
type IActionContext = Dispatch<IAction>;

export const TodosContext = createContext({} as INote[]);
export const DispatchContext = createContext({} as IActionContext);
