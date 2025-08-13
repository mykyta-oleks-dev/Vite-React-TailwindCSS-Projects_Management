import { useState } from 'react';
import Button from '../Button';

const TaskForm = ({ onSave }) => {
	const [task, setTask] = useState('');

	const handleChange = (e) => {
		setTask(e.target.value);
	};

	const handleClick = () => {
		onSave(task);
		setTask('');
	};

	return (
		<div className="flex gap-4">
			<input
				value={task}
				onChange={handleChange}
				type="text"
				className="w-64"
			/>
			<Button type="solid">Add Task</Button>
		</div>
	);
};

export default TaskForm;
