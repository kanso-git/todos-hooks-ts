import { createContext, Dispatch } from "react";
import { IState, INote } from "../actions/IState";
import IAction from "../actions/IAction";

export const TodosContext = createContext<Partial<IState>>({});
export const DispatchContext = createContext<Partial<Dispatch<IAction>>>({});
