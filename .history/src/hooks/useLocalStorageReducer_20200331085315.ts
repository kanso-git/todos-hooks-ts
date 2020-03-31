import { useReducer, useEffect, Dispatch } from "react";
import { IState } from "../actions/IState";
import IAction from "../actions/IAction";
function useLocalStorageReducer(
  key: string,
  defaultVal: IState,
  reducer: any
): [IState, Dispatch<IAction>] {
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let value: IState;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultVal)
      );
    } catch (e) {
      value = defaultVal;
    }

    return value;
  });
  useEffect(() => {
    console.log(JSON.stringify(state, undefined, 4));
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state as IState, dispatch];
}
export { useLocalStorageReducer };
