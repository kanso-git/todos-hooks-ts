import { createContext } from "react";
import { IState } from "../actions/IState";
import IAction from "../actions/IAction";
type Dispatch<A> = (value: A) => void;
type IActionContext = Dispatch<IAction>;

export const TodosContext = createContext<Partial<IState>>({});
export const DispatchContext = createContext({} as IActionContext);
