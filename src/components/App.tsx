import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps){
    super(props);

    this.state = { fetching: false };
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({fetching: true});
  }

  componentDidUpdate(prevProps: AppProps):void {
    if(!prevProps.todos.length && this.props.todos.length){
      this.setState({fetching: false});
    }
  }

  onTodoClick = (id:number): void => {
    this.props.deleteTodo(id);
  }
  
  renderList(): JSX.Element[]{
    return this.props.todos.map((todo:Todo) => {
      return (
        <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>{todo.title}</div>
      );
    });
  }

  render() {
    return <div>
      <button onClick={this.onButtonClick}>Fetch!</button>
      {this.state.fetching ? "LOADING..." : null}
      {this.renderList()}
    </div>
  }
}

const mapStateToProps = ({todos}: StoreState): {todos: Todo[]} => {
  return { todos };
};  

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);



//FUNCTIONAL COMPONENT

// import React, { useState, useRef, useEffect } from 'react';
 
// interface Todo {
//     id: number;
//     title: string;
//     completed: boolean;
// }
 
// interface AppProps {
//     todos: Todo[],
//     fetchTodos: () => void;
//     deleteTodo: () => void;
// }
 
// const _App: React.FC<AppProps> = ({ todos, fetchTodos, deleteTodo }) => {
//   const [isLoading, setIsLoading] = useState(false);
 
 
//   useEffect(() => {
//     // Logic in here that rusn when the # of todos has changed
//   }, [todos.length]);

// USE EFFECT LOGIC
// useEffect(() => {
//   setIsLoading(false);
// }, [todos]);
 
//   const onButtonClick = (): void => {
//     setIsLoading(true);
//     fetchTodos();
//     };
 
//   return <div />;
// }
 
// console.log(_App);