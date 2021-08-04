import { useState, KeyboardEvent } from 'react';
import { ITodo } from './TodoContainer';
import { AiOutlineDelete } from 'react-icons/ai';
import styles from './TodoItem.module.css';

interface ITodoItem {
	key: string;
	todo: ITodo;
	handleChangeProps: (id: string) => void;
	deleteTodoProps: (id: string) => void;
	setUpdateProps: (e: string, id: string) => void;
}

const TodoItem = (props: ITodoItem) => {
	const { completed, id, title } = props.todo;

	const completedStyle = {
		fontStyle: 'italic',
		color: '#595959',
		opacity: 0.4,
		textDecoration: 'line-through',
	};

	const [editing, setEditing] = useState(false);

	const handleEditing = () => {
		setEditing(true);
	};

	const handleUpdateDone = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			setEditing(false);
		}
	};

	let viewMode: any = {};
	let editMode: any = {};

	if (editing) {
		viewMode.display = 'none';
	} else {
		editMode.display = 'none';
	}

	// useEffect(() => {
	// 	console.log('Render Item...', id);
	// 	return () => {
	// 		console.log('Porządki...', id);
	// 	};
	// }, [id]);

	return (
		<li className={styles.item}>
			<div onDoubleClick={handleEditing} style={viewMode}>
				<input type="checkbox" className={styles.checkbox} checked={completed} onChange={() => props.handleChangeProps(id)} />
				<button onClick={() => props.deleteTodoProps(id)}>
					<AiOutlineDelete color="orangered" size="23px" />
				</button>
				<span style={completed ? completedStyle : undefined}>{title}</span>
			</div>
			<input
				type="text"
				className={styles.textInput}
				style={editMode}
				value={title}
				onChange={(e) => {
					props.setUpdateProps(e.target.value, id);
				}}
				onKeyDown={handleUpdateDone}
			/>
		</li>
	);
};

export default TodoItem;
