import { useReducer, useEffect, Dispatch } from "react";
import { INote } from "../actions/IState";
function useLocalStorageReducer(
  key: string,
  defaultVal: INote[],
  reducer: any
) {
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let value: INote[];
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
