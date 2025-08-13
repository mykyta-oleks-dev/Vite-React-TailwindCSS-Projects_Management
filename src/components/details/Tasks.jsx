import Button from '../Button';
import TaskForm from './TaskForm';

const Tasks = ({ tasks, onAdd, onDelete }) => {
	return (
		<>
			<h3 className="text-xl font-medium">Tasks</h3>
			<TaskForm onAdd={onAdd} />
			{tasks.length > 0 ? (
				<ul className="flex flex-col gap-4">
					{tasks.map((t) => (
						<li
							key={t.id}
							className="p-2 flex justify-between items-center border border-stone-500 rounded"
						>
							<span>{t.content}</span>
							<Button type="ghost" danger onClick={() => onDelete(t.id)}>
								Delete
							</Button>
						</li>
					))}
				</ul>
			) : (
				<p>This project has no tasks</p>
			)}
		</>
	);
};

export default Tasks;
