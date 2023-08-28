import React from "react"
import { User } from "../types/User"

interface ProfileCardProps {
	userObj: User | null
}

const ProfileCard: React.FC<ProfileCardProps> = ({ userObj }) => {
	return (
		<div className="profile-card">
			{userObj ? (
				<>
					<img src={userObj.profileImg} alt="Profile" />
					<h2>{userObj.userName}</h2>
					<p>{userObj.location}</p>
					{/* ...otros detalles del perfil */}
				</>
			) : (
				<p>No user data available</p>
			)}
		</div>
	)
}

export default ProfileCard
