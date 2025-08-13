const Input = ({ label, textarea, id, ...props }) => {
	const Tag = textarea ? 'textarea' : 'input';
	return (
		<div>
			<label
				className="block text-stone-700 uppercase text-lg font-medium"
				htmlFor={id}
			>
				{label}
			</label>
			<Tag {...props} id={id} name={id} className="w-full" />
		</div>
	);
};

export default Input;
