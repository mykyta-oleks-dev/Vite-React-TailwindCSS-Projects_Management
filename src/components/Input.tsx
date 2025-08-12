const Input = ({ label, tag = 'input', ...props }) => {
	const Tag = resolveType(tag);
	return (
		<div>
			<label className="block text-stone-700 uppercase text-lg font-medium">
				{label}
			</label>
			<Tag
				className="bg-stone-300 w-full p-2 border-b-3 border-b-stone-400 focus:border-b-stone-800 transition outline-none"
				{...props}
			/>
		</div>
	);
};

const resolveType = (tag) => {
	if (tag.toLowerCase() === 'textarea') return 'textarea';
	return 'input';
};

export default Input;
