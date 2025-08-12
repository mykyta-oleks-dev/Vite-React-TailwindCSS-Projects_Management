const Button = ({ children, type, ...props }) => {
	return (
		<button
			{...props}
			type="button"
			className={`py-2 px-6 rounded cursor-pointer ${setClasses(type)}`}
		>
			{children}
		</button>
	);
};

const setClasses = (type) => {
	if (type === 'solid') return 'text-white bg-black';
	if (type === 'ghost') return 'text-black bg-transparent';
	return 'text-stone-300 bg-stone-800';
};

export default Button;
