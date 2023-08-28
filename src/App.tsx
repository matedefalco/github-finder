import { useState } from "react"
import { User } from "./types/User"

import SearchBar from "./components/SearchBar"
import ProfileCard from "./components/ProfileCard"

function App() {
	const [user, setUser] = useState<User | null>(null)

	const handleUserChange = (newUser: User) => {
		setUser(newUser)
	}

	return (
		<main className="flex flex-col justify-center items-center gap-16 h-[100vh] bg-[#10182d]">
			<SearchBar onUserChange={handleUserChange} />
			<ProfileCard userObj={user} />
		</main>
	)
}

export default App
