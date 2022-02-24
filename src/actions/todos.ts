import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types'

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
//This interface base on the data in response from json

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type:ActionTypes.deleteTodo;
  payload: number;
}

//SOMETHING TO CONSIDER SO WE DONT REPEAT CONSTANT INTERFACES

// interface Action<T, P> {
//   type: T,
//   payload: P
// }

// interface FetchTodosAction extends Action<'fetchTodos', number[]> { }
// interface DeleteTodosAction extends Action<'deleteTodos', number> { }

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async(dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      //Passing in the correct types and properties
      type: ActionTypes.fetchTodos,
      payload: response.data
    });
  };
};

export const deleteTodo = (id:number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id
  };
};