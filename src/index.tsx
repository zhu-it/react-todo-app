import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import './index.css';
import './App.css';

ReactDOM.render(
	<React.StrictMode>
		<Router basename="/react-todo-app">
			<TodoContainer />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
