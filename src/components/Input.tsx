const Input = ({ label, textarea, ...props }) => {
	const Tag = textarea ? 'textarea' : 'input';
	return (
		<div>
			<label className="block text-stone-700 uppercase text-lg font-medium">
				{label}
			</label>
			<Tag
				className="bg-stone-300 w-full p-2 border-b-3 border-b-stone-400 focus:border-b-stone-900 transition outline-none"
				{...props}
			/>
		</div>
	);
};

export default Input;
