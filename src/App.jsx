import NoProject from './components/NoProject';
import Sidebar from './components/SideBar';

function App() {
	return (
		<main className="grid grid-cols-[350px_1fr] grid-rows-1 gap-4 py-10 h-screen">
			<Sidebar />
			<NoProject />
		</main>
	);
}

export default App;
