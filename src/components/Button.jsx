const Button = ({ children, type, ...props }) => {
	return (
		<button
			{...props}
			type="button"
			className={`py-2 px-6 transition rounded cursor-pointer ${setClasses(
				type
			)}`}
		>
			{children}
		</button>
	);
};

const setClasses = (type) => {
	if (type === 'solid') return 'dark';
	if (type === 'ghost') return 'light';
	if (type === 'list-item')
		return 'bg-stone-800 w-full text-start hover:bg-stone-600 text-stone-50';
	return 'text-stone-100 bg-stone-700 hover:bg-stone-600';
};

export default Button;
