import Button from './Button';
import Input from './Input';

const ProjectForm = () => {
	return (
		<div className="flex flex-col gap-5">
			<div className="flex gap-2 justify-end">
				<Button type="ghost">Cancel</Button>
				<Button type="solid">Save</Button>
			</div>
			<Input label="Title" />
			<Input label="Description" tag='textarea' rows={5} />
			<Input label="Due Date" type='date' />
		</div>
	);
};

export default ProjectForm;
