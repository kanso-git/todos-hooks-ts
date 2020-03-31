export enum EActionType {
  POPULATE_NOTES = "POPULATE_NOTES",
  ADD_NOTE = "ADD_NOTE",
  DELETE_NOTE = "DELETE_NOTE",
  DELETE_NOTE_2 = "DELETE_NOTE_2",
  MODIFY_NOTE = "MODIFY_NOTE"
}
export default interface IAction {
  type: EActionType;
  payload: any;
}
