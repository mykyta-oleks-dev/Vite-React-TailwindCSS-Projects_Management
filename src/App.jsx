import Sidebar from './components/SideBar';

function App() {
	return (
		<main className="grid grid-cols-[350px_1fr] grid-rows-1 gap-4 py-10 h-screen">
			<Sidebar />
			<div>Hello to you too</div>
		</main>
	);
}

export default App;
