import Button from './Button';

const ProjectForm = () => {
	return (
		<div className="flex flex-col">
			<div className='flex gap-4 justify-end'>
				<Button type="ghost">Cancel</Button>
				<Button type="solid">Save</Button>
			</div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default ProjectForm;
