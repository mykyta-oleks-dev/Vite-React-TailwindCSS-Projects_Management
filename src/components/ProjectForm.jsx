import { useRef } from 'react';
import Button from './Button';
import Input from './Input';

const ProjectForm = ({ onCancel, onSave }) => {
	const titleRef = useRef(null);
	const descriptionRef = useRef(null);
	const dateRef = useRef(null);

	const handleSave = () => {
		const obj = {
			title: titleRef.current.value,
			description: descriptionRef.current.value,
			dueDate: dateRef.current.valueAsDate,
		};

		if (!obj.title || !obj.description) return;

		console.log(obj);
		onSave(obj);
	};

	return (
		<form className="flex flex-col gap-5">
			<menu className="flex gap-2 justify-end">
				<Button type="ghost" onClick={onCancel}>
					Cancel
				</Button>
				<Button type="solid" onClick={handleSave}>
					Save
				</Button>
			</menu>
			<Input label="Title" id="title" ref={titleRef} />
			<Input
				label="Description"
				id="description"
				textarea
				rows={5}
				ref={descriptionRef}
			/>
			<Input label="Due Date" id="date" type="date" ref={dateRef} />
		</form>
	);
};

export default ProjectForm;
