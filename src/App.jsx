import NoProject from './components/NoProject';
import ProjectForm from './components/ProjectForm';
import Sidebar from './components/SideBar';

function App() {
	return (
		<main className="grid grid-cols-[350px_1fr] grid-rows-1 gap-4 py-10 h-screen pr-10">
			<Sidebar />
			<ProjectForm />
		</main>
	);
}

export default App;
