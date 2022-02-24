import { FetchTodosAction, DeleteTodoAction } from ".";

export enum ActionTypes {
  fetchTodos,
  //redux type must just be a unique value leaving the enum value
  //like this assigns fetchTodos to a number index wise 
  deleteTodo
}

export type Action = FetchTodosAction | DeleteTodoAction
//For the reducer for all the different actions in switch