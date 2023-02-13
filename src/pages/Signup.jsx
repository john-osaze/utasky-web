import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useState } from "react";
import { Link } from 'react-router-dom';
import Logo from "../assets/images/logo.png"
import { useNavigate } from 'react-router-dom';

export default function Signup() {
	const [fullName, SetFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	// const [isPending, setIsPending] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const account = [fullName, email, password, confirmPassword];
		const accountArray = [];
		// setIsPending(true);

		accountArray.push(account)
		console.log(accountArray)

		const accountString = JSON.stringify(accountArray)
		localStorage.setItem("account", accountString)
		// fetch("http://localhost:8000/blogs", {
		// 	method: "POST",
		// 	headers: { "Content-Type": "application/json" },
		// 	body: JSON.stringify(blog)
		// }).then(() => {
		// 	setIsPending(false);
		// 	navigate("/dashboard");
		// })
	}

	return (
		<div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="w-full max-w-md space-y-8">
				<div>
					<Link to={"/"}>
						<img
							className="mx-auto h-12 w-auto"
							src={Logo}
							alt="Utasky"
						/>
					</Link>
					<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
						Create a new account
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						Or{' '}
						<Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
							login to an existing account
						</Link>
					</p>
				</div>
				<form className="mt-8 space-y-6 bg-white p-10 rounded-md" onSubmit={handleSubmit} method="POST">
					<input type="hidden" name="remember" defaultValue="true" />
					<div className="-space-y-px rounded-md">
						<div className="pb-5">
							<label htmlFor="full-name" className="font-medium text-sm">
								Full Name
							</label>
							<input
								id="full-name"
								name="fname"
								type="text"
								autoComplete="off"
								value={fullName}
								onChange={(e) => SetFullName(e.target.value)}
								required
								className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 mt-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
							/>
						</div>

						<div className="pb-5">
							<label htmlFor="email-address" className="font-medium text-sm">
								Email address
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								autoComplete="off"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 mt-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
						<div className="pb-5">
							<label htmlFor="password" className="font-medium text-sm">
								Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="off"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 mt-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
						<div className="pb-5">
							<label htmlFor="confirm-password" className="font-medium text-sm">
								Confirm Password
							</label>
							<input
								id="confirm-password"
								name="cpassword"
								type="password"
								autoComplete="off"
								required
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 mt-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
							/>
						</div>
					</div>

					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
							/>
							<label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
								Agree to <Link to={"/terms-and-conditions"}>terms and conditions</Link>
							</label>
						</div>
					</div>

					<button
						type="submit"
						className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>
						Sign Up
					</button>
					{/* {isPending && <button
						type="submit"
						className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						disabled
					>
						Creating your account ...
					</button>} */}
				</form>
			</div>
		</div>
	)
}