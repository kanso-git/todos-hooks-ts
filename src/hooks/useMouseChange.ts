import { useState, useEffect } from "react";

interface IPosition {
  x: number;
  y: number;
}
const useMouseChange = (
  initialState: IPosition = { x: 0, y: 0 }
): [IPosition] => {
  const [state, setState] = useState<IPosition>(initialState);
  const trackMouse = (e: MouseEvent) => {
    console.log("moving ....");
    setState({
      x: e.pageX,
      y: e.pageY
    });
  };
  useEffect(() => {
    console.log("setting up ....");
    document.addEventListener("mousemove", trackMouse);
    return () => {
      console.log(" cleaned ............");
      document.removeEventListener("mousemove", trackMouse);
    };
  }, []);
  return [state];
};

export default useMouseChange;
