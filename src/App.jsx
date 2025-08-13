import { useState } from 'react';
import NoProject from './components/NoProject';
import ProjectForm from './components/ProjectForm';
import Sidebar from './components/Sidebar';
import ProjectInfo from './components/details/ProjectInfo';

let nextProjectId = 1;
let nextTaskId = 1;

function App() {
	const [projectsState, setProjectsState] = useState({
		selectedProjectId: undefined,
		projects: [],
		tasks: [],
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
					id: nextProjectId,
					title,
					description,
					dueDate,
				},
			],
			selectedProjectId: nextProjectId,
		}));
		nextProjectId++;
	};

	const handleRemoveProject = (id) => {
		setProjectsState((state) => ({
			...state,
			projects: state.projects.filter((p) => p.id !== id),
			selectedProjectId: undefined,
		}));
	};

	const handleAddTask = (content) => {
		setProjectsState((state) => ({
			...state,
			tasks: [
				...state.tasks,
				{
					id: nextTaskId,
					projectId: state.selectedProjectId,
					content,
				},
			],
		}));
		nextTaskId++;
	};

	const handleRemoveTask = (id) => {
		setProjectsState((state) => ({
			...state,
			tasks: state.tasks.filter((t) => t.id !== id),
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
					tasks={projectsState.tasks.filter(
						(t) => t.projectId === projectsState.selectedProjectId
					)}
					onDelete={handleRemoveProject}
					onAddTask={handleAddTask}
					onDeleteTask={handleRemoveTask}
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
