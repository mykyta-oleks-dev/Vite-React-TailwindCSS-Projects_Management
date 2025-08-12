import Button from "./Button";

const Sidebar = () => {
	return (
		<sidebar className="bg-black px-5 py-10 rounded-r-2xl flex flex-col">
			<h2 className="text-stone-300 font-medium text-2xl text-center uppercase mb-10">
				Your projects
			</h2>
			<div>
				<Button>
					+ Add Project
				</Button>
			</div>
		</sidebar>
	);
};

export default Sidebar;
