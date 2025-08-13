import { useRef } from 'react';
import Button from './Button';
import Input from './Input';
import Modal from './Modal';

const ProjectForm = ({ onCancel, onSave }) => {
	const modalRef = useRef(null);

	const titleRef = useRef(null);
	const descriptionRef = useRef(null);
	const dateRef = useRef(null);

	const handleSave = () => {
		const obj = {
			title: titleRef.current.value.trim(),
			description: descriptionRef.current.value.trim(),
			dueDate: dateRef.current.valueAsDate,
		};

		if (!obj.title || !obj.description || !obj.dueDate) {
			modalRef.current.open();
			return;
		}

		console.log(obj);
		onSave(obj);
	};

	return (
		<>
			<Modal ref={modalRef} buttonCaption="Close">
				<h2 className='text-2xl'>Invalid input</h2>
				<p>Values cannot be empty</p>
				<p>Please input correct values</p>
			</Modal>
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
		</>
	);
};

export default ProjectForm;
