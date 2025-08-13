import Button from '../Button';
import Tasks from './Tasks';

const ProjectInfo = ({ project, tasks, onDelete, onAddTask, onDeleteTask }) => {
	const formattedDate = new Date(project.dueDate).toLocaleDateString(
		'en-US',
		{
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		}
	);
	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center">
				<h2 className="grow text-2xl font-medium">{project.title}</h2>
				<Button type="ghost" danger onClick={() => onDelete(project.id)}>
					Delete
				</Button>
			</div>
			<p className="text-stone-500 font-medium">{formattedDate}</p>
			<p className="my-4">{project.description}</p>
			<hr />
			<Tasks tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask} />
		</div>
	);
};

export default ProjectInfo;
