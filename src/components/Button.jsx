const Button = ({ children, ...props }) => {
	return (
		<button
			{...props}
			type="button"
			className="py-2 px-4 bg-stone-800 rounded text-stone-300 cursor-pointer"
		>
			{children}
		</button>
	);
};

export default Button;
