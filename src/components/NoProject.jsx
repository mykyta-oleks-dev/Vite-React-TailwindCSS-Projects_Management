import noProjectImg from '../assets/no-projects.png';
import Button from './Button';

const NoProject = ({ onNewProject }) => {
	return (
		<div className="flex flex-col items-center py-10 gap-10">
			<img src={noProjectImg} alt="no-projects" className="size-20" />
			<h2 className="text-stone-700 font-bold text-2xl text-center">
				No Project Selected
			</h2>
			<p className="text-stone-600">
				Select project or get started with a new one
			</p>
			<Button onClick={onNewProject}>Create New Project</Button>
		</div>
	);
};

export default NoProject;
