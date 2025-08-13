import Button from './Button';

const Sidebar = ({ onNewProject, projects, onSelect }) => {
	return (
		<aside className="dark px-5 py-10 rounded-r-2xl flex flex-col">
			<h2 className="font-medium text-2xl text-center uppercase mb-10">
				Your projects
			</h2>
			<div className="mb-10">
				<Button onClick={onNewProject}>+ Add Project</Button>
			</div>
			<ul className="flex flex-col gap-2">
				{projects.map((p) => (
					<li key={p.id}>
						<Button type="list-item" onClick={() => onSelect(p.id)}>
							{p.title}
						</Button>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default Sidebar;
