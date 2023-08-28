import React from "react"
import { User } from "../types/User"

interface ProfileCardProps {
	userObj: User | null
}

const ProfileCard: React.FC<ProfileCardProps> = ({ userObj }) => {
	if (userObj !== null) {
		userObj = {
			...userObj,
			bio: "string",
			profileImg: "https://avatars.githubusercontent.com/u/54545395?v=4",
			joinedDate: "string",
			repoAmount: 2,
			followersAmount: 2,
			followingAmount: 2,
			location: "string",
			twitter: "string",
			url: "string",
			githubTag: "string",
		}
	}

	return (
		<div className="profile-card sm:p-4">
			{userObj ? (
				<div className="hero bg-base-200 bg-blue-900 rounded-xl">
					<div className="hero-content flex-col lg:flex-row">
						<div className="avatar flex items-center justify-center lg:items-start lg:justify-start">
							<div className="w-24 h-24 rounded-full overflow-hidden">
								<img
									src={userObj.profileImg}
									alt="Profile"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
						<div className="flex flex-col gap-4 p-8">
							<div className="flex justify-between items-center lg:items-start">
								<div className="flex flex-col gap-2">
									<p className="text-white font-bold text-2xl">
										{userObj.userName}
									</p>
									<p className="text-white text-sm">{userObj.bio}</p>
								</div>
								<div>
									<p className="text-white">Joined {userObj.joinedDate}</p>
								</div>
							</div>
							<div className="flex justify-around items-center bg-blue-950 gap-4 p-6">
								<div className="flex flex-col gap-2 items-start text-slate-300">
									<p>Repo Amounts</p>
									<p className="font-bold text-xl">{userObj.repoAmount}</p>
								</div>
								<div className="flex flex-col gap-2 items-start text-slate-300">
									<p>Followers Amount</p>
									<p className="font-bold text-xl">{userObj.followersAmount}</p>
								</div>
								<div className="flex flex-col gap-2 items-start text-slate-300">
									<p>Following Amount</p>
									<p className="font-bold text-xl">{userObj.followingAmount}</p>
								</div>
							</div>
							<div className="flex justify-center items-center flex-col lg:flex-row justify-between">
								<div className="flex flex-col gap-4">
									<div className="flex gap-2">
										{/* LOGO */}
										<p className="text-white">{userObj.location}</p>
									</div>
									<div className="flex gap-2">
										{/* LOGO */}
										<p className="text-white">{userObj.url}</p>
									</div>
								</div>
								<div className="flex flex-col gap-4">
									<div className="flex gap-2">
										{/* LOGO */}
										<p className="text-white">{userObj.twitter}</p>
									</div>
									<div className="flex gap-2">
										{/* LOGO */}
										<p className="text-white">{userObj.githubTag}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="alert w-full">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="stroke-info shrink-0 w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
					<span>No users found.</span>
				</div>
			)}
		</div>
	)
}

export default ProfileCard
