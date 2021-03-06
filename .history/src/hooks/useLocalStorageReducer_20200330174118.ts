import { useReducer, useEffect, Dispatch } from "react";
import { INote } from "../actions/IState";
import IAction from "../actions/IAction";
function useLocalStorageReducer(
  key: string,
  defaultVal: INote[],
  reducer: Dispatch<IAction>
) {
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let value;
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
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, dispatch];
}
export { useLocalStorageReducer };
