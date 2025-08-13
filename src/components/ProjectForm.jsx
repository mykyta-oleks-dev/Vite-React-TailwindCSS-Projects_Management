import Button from './Button';
import Input from './Input';

const ProjectForm = ({ onCancel }) => {
	return (
		<div className="flex flex-col gap-5">
			<menu className="flex gap-2 justify-end">
				<Button type="ghost" onClick={onCancel}>
					Cancel
				</Button>
				<Button type="solid">Save</Button>
			</menu>
			<Input label="Title" />
			<Input label="Description" textarea rows={5} />
			<Input label="Due Date" type="date" />
		</div>
	);
};

export default ProjectForm;
