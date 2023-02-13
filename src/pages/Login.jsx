import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useState } from "react";
import Logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom';

export default function Login() {

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
						Sign in to your account
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						Or{' '}
						<Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
							create a new account
						</Link>
					</p>
				</div>
				<form className="mt-8 space-y-6 bg-white p-10 rounded-md" action="#" method="POST">
					<input type="hidden" name="remember" defaultValue="true" />
					<div className="-space-y-px rounded-md">
						<div className="pb-5">
							<label htmlFor="email-address" className="font-medium text-sm">
								Email address
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
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
								autoComplete="current-password"
								required
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
								Remember me
							</label>
						</div>

						<div className="text-sm">
							<a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
								Forgot your password?
							</a>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							{/* <span className="absolute inset-y-0 left-0 flex items-center pl-3">
								<LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
							</span> */}
							Sign in
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}