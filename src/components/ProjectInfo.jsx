import Button from './Button';

const ProjectInfo = ({ project, onDelete }) => {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center">
				<h2 className="grow text-2xl font-medium">{project.title}</h2>
				<Button type="ghost" onClick={() => onDelete(project.id)}>
					Delete
				</Button>
			</div>
			<p className="text-stone-500 font-medium">
				{project.dueDate.toDateString()}
			</p>
			<p>{project.description}</p>
			<hr />
			<h3 className="text-xl font-medium">Tasks</h3>
		</div>
	);
};

export default ProjectInfo;
