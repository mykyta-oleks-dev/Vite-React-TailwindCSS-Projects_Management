const Button = ({ children, type, selected, danger, ...props }) => {
	return (
		<button
			{...props}
			type="button"
			className={`py-2 px-6 transition rounded cursor-pointer ${setClasses(
				type,
				selected
			)} ${danger ? 'danger' : ''}`}
		>
			{children}
		</button>
	);
};

const setClasses = (type, selected) => {
	if (type === 'solid') return 'dark';
	if (type === 'ghost') return 'light';
	if (type === 'list-item')
		return `w-full text-start ${
			selected ? 'bg-stone-700' : 'bg-stone-800'
		} hover:bg-stone-600 text-stone-50`;
	return 'text-stone-100 bg-stone-700 hover:bg-stone-600';
};

export default Button;
