import { useState, ChangeEvent } from 'react';
import { AiOutlineFileAdd } from 'react-icons/ai';

interface IInputTodo {
	addTodoProps: (title: string) => void;
}

const InputTodo = (props: IInputTodo) => {
	const [title, setTitle] = useState({ title: '' });

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle({ ...title, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (title.title.trim()) {
			props.addTodoProps(title.title);
			setTitle({ title: '' });
		} else {
			alert('Nie wpisałeś opisu zadania');
		}
	};

	return (
		<form onSubmit={handleSubmit} className="form-container">
			<input type="text" className="input-text" placeholder="Dodaj zadanie..." value={title.title} onChange={onChange} name="title" />
			<button className="input-submit">
				<AiOutlineFileAdd className="submit-icon" />
			</button>
		</form>
	);
};

export default InputTodo;
