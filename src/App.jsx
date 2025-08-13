import { useState } from 'react';
import NoProject from './components/NoProject';
import ProjectForm from './components/ProjectForm';
import Sidebar from './components/SideBar';

let nextId = 0;

function App() {
	const [projects, setProjects] = useState({
		selectedProjectId: undefined,
		projects: [],
	});

	const handleNewProject = () => {
		setProjects((state) => ({
			...state,
			selectedProjectId: null,
		}));
	};

	const handleNoProject = () => {
		setProjects((state) => ({
			...state,
			selectedProjectId: undefined,
		}));
	};

	const handleSelectProject = (id) => {
		setProjects((state) => ({
			...state,
			selectedProjectId: id,
		}));
	};

	const handleAddProject = ({ title, description, dueDate }) => {
		setProjects((state) => ({
			...state,
			projects: [
				...state.projects,
				{
					id: nextId,
					title,
					description,
					dueDate,
				},
			],
			selectedProjectId: nextId,
		}));
		nextId++;
	};

	const handleRemoveProject = (id) => {
		setProjects((state) => ({
			...state,
			projects: state.projects.filter((p) => p.id !== id),
			selectedProjectId: undefined,
		}));
	};

	return (
		<main className="grid grid-cols-[1fr_2fr] grid-rows-1 gap-14 py-10 h-screen pr-10">
			<Sidebar onNewProject={handleNewProject} />
			{projects.selectedProjectId === null && (
				<ProjectForm
					onCancel={handleNoProject}
					onSave={handleAddProject}
				/>
			)}
			{projects.selectedProjectId === undefined && (
				<NoProject onNewProject={handleNewProject} />
			)}
		</main>
	);
}

export default App;
