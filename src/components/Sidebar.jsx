import Button from "./Button";

const Sidebar = ({ onNewProject }) => {
	return (
		<aside className="dark px-5 py-10 rounded-r-2xl flex flex-col">
			<h2 className="font-medium text-2xl text-center uppercase mb-10">
				Your projects
			</h2>
			<div>
				<Button onClick={onNewProject}>
					+ Add Project
				</Button>
			</div>
			<ul>	</ul>
		</aside>
	);
};

export default Sidebar;
