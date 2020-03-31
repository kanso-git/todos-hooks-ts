import { useState } from "react";

type InputState<T> = (
  initialState: T
) => [T, (e: React.ChangeEvent<HTMLInputElement> | string) => void, () => void];

const useTextInputState: InputState<string> = (
  initialState: string
): [
  string,
  (e: React.ChangeEvent<HTMLInputElement> | string) => void,
  () => void
] => {
  const [state, setState] = useState<string>(initialState);

  const update = (e: React.ChangeEvent<HTMLInputElement> | string) =>
    setState(typeof e === "string" ? e : e.target.value);

  const reset = () => setState("");

  return [state, update, reset];
};

const useNumberInputState: InputState<number> = (
  initialState: number
): [
  number,
  (e: React.ChangeEvent<HTMLInputElement> | string) => void,
  () => void
] => {
  const [state, setState] = useState<number>(initialState);

  const update = (e: React.ChangeEvent<HTMLInputElement> | string) =>
    setState(typeof e === "string" ? parseInt(e) : parseInt(e.target.value));
  const reset = () => setState(0);

  return [state, update, reset];
};

export { useTextInputState, useNumberInputState };
