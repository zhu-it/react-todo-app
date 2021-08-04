import TodoItem from './TodoItem';
import { ITodo, IState } from './TodoContainer';

const TodoList = (props: IState) => {
	return (
		<ul>
			{props.todos.map((todo: ITodo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					handleChangeProps={props.handleChangeProps}
					deleteTodoProps={props.deleteTodoProps}
					setUpdateProps={props.setUpdateProps}
				/>
			))}
		</ul>
	);
};

export default TodoList;
