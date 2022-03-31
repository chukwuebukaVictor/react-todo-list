import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

handleChange = (id) => {
  console.log('clicked', id);
  this.setState((prevState) => ({
    todos: prevState.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }),
  }));
}

delTodo = (id) => {
  this.setState({
    todos: [
      ...this.state.todos.filter((todo) => todo.id !== id),
    ],
  });
}

addTodoItem = (title) => {
  console.log(title);
  const newTodo = {
    id: uuidv4(),
    title,
    completed: false,
  };
  this.setState({
    todos: [...this.state.todos, newTodo],
  });
}

setUpdate = (updatedTitle, id) => {
  this.setState({
		todos: this.state.todos.map(todo => {
			if(todo.id === id){
				todo.title = updatedTitle;
			}
			return todo
		})
	})
}



render() {
  return (
    <div className='container'>
      <div className='inner'>
			<Header />
      <InputTodo addTodoProps={this.addTodoItem} />
      <TodosList
			deleteTodoProps={this.delTodo}
        todos={this.state.todos}
        handleChangeProps={this.handleChange}
				setUpdate={this.setUpdate}
      />
			</div>
    </div>
  );
}
}
export default TodoContainer;
