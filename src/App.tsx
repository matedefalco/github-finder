import SearchBar from "./components/SearchBar"
import ProfileCard from "./components/ProfileCard"

function App() {
	return (
		<main className="flex flex-col justify-center items-center gap-16 h-[100dvh] bg-white">
			<SearchBar />
			<ProfileCard />
		</main>
	)
}

export default App
