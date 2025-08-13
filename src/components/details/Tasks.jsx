import TaskForm from './TaskForm';

const Tasks = ({ tasks }) => {
	return (
		<>
			<h3 className="text-xl font-medium">Tasks</h3>
			<TaskForm />
			{tasks.length > 0 ? (
				<div>tasks</div>
			) : (
				<p>This project has no tasks</p>
			)}
		</>
	);
};

export default Tasks;
