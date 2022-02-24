import { Todo, Action, ActionTypes } from '../actions'


export const todosReducer = (state: Todo[] = [], action: Action) => {
//state is going to be an array of Todos and if we dont provide a state
// then just make it an empty array
  switch(action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo:Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};