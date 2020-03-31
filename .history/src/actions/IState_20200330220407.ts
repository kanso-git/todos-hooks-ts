export interface INote {
  id: string;
  task: string;
  completed: boolean;
  toggleEditForm?: boolean;
}

export interface IState {
  notes: INote[];
}

export const state0: IState = {
  notes: []
};
