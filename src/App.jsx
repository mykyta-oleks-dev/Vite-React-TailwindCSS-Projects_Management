import { useState } from 'react';
import NoProject from './components/NoProject';
import ProjectForm from './components/ProjectForm';
import Sidebar from './components/SideBar';
import ProjectInfo from './components/details/ProjectInfo';

let nextId = 0;

function App() {
	const [projectsState, setProjectsState] = useState({
		selectedProjectId: undefined,
		projects: [],
	});

	const handleNewProject = () => {
		setProjectsState((state) => ({
			...state,
			selectedProjectId: null,
		}));
	};

	const handleNoProject = () => {
		setProjectsState((state) => ({
			...state,
			selectedProjectId: undefined,
		}));
	};

	const handleSelectProject = (id) => {
		setProjectsState((state) => ({
			...state,
			selectedProjectId: id,
		}));
	};

	const handleAddProject = ({ title, description, dueDate }) => {
		setProjectsState((state) => ({
			...state,
			projects: [
				...state.projects,
				{
					id: nextId,
					title,
					description,
					dueDate,
					tasks: [],
				},
			],
			selectedProjectId: nextId,
		}));
		nextId++;
	};

	const handleRemoveProject = (id) => {
		setProjectsState((state) => ({
			...state,
			projects: state.projects.filter((p) => p.id !== id),
			selectedProjectId: undefined,
		}));
	};

	return (
		<main className="grid grid-cols-[1fr_2fr] grid-rows-1 gap-14 py-10 h-screen pr-10">
			<Sidebar
				onNewProject={handleNewProject}
				projects={projectsState.projects}
				onSelect={handleSelectProject}
				selectedProjectId={projectsState.selectedProjectId}
			/>
			{projectsState.selectedProjectId && (
				<ProjectInfo
					project={projectsState.projects.find(
						(p) => p.id === projectsState.selectedProjectId
					)}
					onDelete={handleRemoveProject}
				/>
			)}
			{projectsState.selectedProjectId === null && (
				<ProjectForm
					onCancel={handleNoProject}
					onSave={handleAddProject}
				/>
			)}
			{projectsState.selectedProjectId === undefined && (
				<NoProject onNewProject={handleNewProject} />
			)}
		</main>
	);
}

export default App;
