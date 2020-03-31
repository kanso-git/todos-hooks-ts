export enum EActionType {
  ADD = "ADD",
  REMOVE = "REMOVE",
  EDIT = "EDIT",
  TOGGLE = "TOGGLE"
}
export default interface IAction {
  type: EActionType;
  payload: any;
}
