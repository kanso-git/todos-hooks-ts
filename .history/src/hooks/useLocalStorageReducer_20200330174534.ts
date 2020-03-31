import { useReducer, useEffect, Dispatch } from "react";
import { IState } from "../actions/IState";
import IAction from "../actions/IAction";
function useLocalStorageReducer(
  key: string,
  defaultVal: IState,
  reducer: Dispatch<IAction>
) {
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultVal.notes)
      );
    } catch (e) {
      value = defaultVal.notes;
    }
    return value;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state.notes));
  }, [state.notes]);

  return [state, dispatch];
}
export { useLocalStorageReducer };
