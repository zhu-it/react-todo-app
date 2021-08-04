import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';
import { v4 as uuidV4 } from 'uuid';
import { Route, Switch } from 'react-router-dom';

import About from '../pages/About';
import NoMatch from '../pages/NoMatch';
import Navbar from './Navbar';

export interface ITodo {
	userId: number;
	id: string;
	title: string;
	completed: boolean;
}

export interface IState {
	todos: Array<ITodo>;
	handleChangeProps(id: string): void;
	deleteTodoProps(id: string): void;
	setUpdateProps(updatedTitle: string, id: string): void;
}

const TodoContainer = () => {
	const getInitialTodos = () => {
		const temp = localStorage.getItem('todos');
		// console.log('temp', temp);
		let loadedTodos: ITodo[] = JSON.parse(temp!);
		// console.log('loadedTodos', loadedTodos);
		return loadedTodos || [];
	};

	const [todos, setTodos] = useState<any>(getInitialTodos());

	useEffect(() => {
		if (todos.length === 0) {
			fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
				.then((response) => response.json())
				.then((data: ITodo[]) => setTodos(data));
		}
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleChange = (id: string) => {
		setTodos((prevState: any) =>
			prevState.map((todo: ITodo) => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed,
					};
				}
				return todo as ITodo;
			})
		);
	};

	const delTodo = (id: string) => {
		setTodos([
			...todos.filter((todo: ITodo) => {
				return todo.id !== id;
			}),
		]);
	};

	const setUpdate = (updatedTitle: string, id: string) => {
		setTodos(
			todos!.map((todo: ITodo) => {
				if (todo.id === id) {
					todo.title = updatedTitle;
				}
				return todo;
			})
		);
	};

	const addTodoItem = (title: string) => {
		const newTodo: ITodo = {
			userId: 1,
			id: uuidV4(),
			title: title,
			completed: false,
		};
		setTodos([...todos, newTodo]);
	};

	return (
		<>
			<Navbar />
			<Switch>
				<Route path="/" exact>
					<div className="container">
						<div className="inner">
							<Header />
							<InputTodo addTodoProps={addTodoItem} />
							<TodoList todos={todos as ITodo[]} handleChangeProps={handleChange} deleteTodoProps={delTodo} setUpdateProps={setUpdate} />
						</div>
					</div>
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="*">
					<NoMatch />
				</Route>
			</Switch>
		</>
	);
};

export default TodoContainer;
