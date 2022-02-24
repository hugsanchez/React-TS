import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

export interface StoreState {
  todos: Todo[]
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer
  // = { todos: [Todo, Todo, Todo]}
  //TS making sure reducer is lining up with what we want it to be
  //Base on our interface
});

//Describes the entire state of our Redux Store
//Good for other devs to get a good idea of whats going on