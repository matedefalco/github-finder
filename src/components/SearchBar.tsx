import React, { useState } from "react"
import { User } from "../types/User"

interface SearchBarProps {
	onUserChange: (newUser: User) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onUserChange }) => {
	const [user, setUser] = useState<User | null>(null)

	const handleSearchClick = () => {
		if (user !== null) {
			onUserChange(user)
		}
	}

	return (
		<div className="form-control">
			<label className="input-group">
				<input
					type="text"
					placeholder="Github User"
					className="input input-bordered text-black"
					onChange={(e) => setUser({ ...user, userName: e.target.value })}
				/>
				<button className="btn btn-primary" onClick={handleSearchClick}>
					Search
				</button>
			</label>
		</div>
	)
}

export default SearchBar
