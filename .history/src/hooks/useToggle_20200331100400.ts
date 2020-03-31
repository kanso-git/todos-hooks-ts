import { useState } from "react";

function useToggle(initialState: boolean = false): [boolean, () => void] {
  const [state, setstate] = useState<boolean>(initialState);
  const toggle = (): void => setstate(!state);
  return [state, toggle];
}

export default useToggle;
