export interface INote {
  id: string;
  title: string;
  body: string;
  priority: number;
}

export interface IState {
  notes: INote[];
}

export const state0: IState = {
  notes: []
};
