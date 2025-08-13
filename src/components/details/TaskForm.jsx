import { useState } from 'react';
import Button from '../Button';

const TaskForm = ({ onAdd }) => {
	const [task, setTask] = useState('');

	const handleChange = (e) => {
		setTask(e.target.value.trim());
	};

	const handleClick = () => {
		if (!task) return;
		onAdd(task);
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
			<Button type="solid" onClick={handleClick}>
				Add Task
			</Button>
		</div>
	);
};

export default TaskForm;
