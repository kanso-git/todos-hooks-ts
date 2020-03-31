export interface INote {
  id: string;
  task: string;
  completed: boolean;
}

export type IState = INote[];
