"use client"
import Link from 'next/link';
import Image from 'next/image'
import {useState, useEffect} from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Nav = () => {
    const { data: session } = useSession();

	const [providers, setProviders] = useState(null);
	const [toggleDropDown, setToggleDropDown] = useState(false);

	useEffect(() => {
		const setUpProviders = async () => {
			const response = await getProviders();

			setProviders(response);
		};
		setUpProviders();
	}, []);
  return (
		<nav className='flex justify-between w-screen border-2 border-black px-5 py-3'>
			<Link href="/" className='text-4xl'>Todo List</Link>

			{/* Desktop Navigation */}
			<div className="sm:flex hidden">
				{session?.user ? (
					<div className="flex gap-3 md:gap-5">
						<Link href="/dashboard">
							Dashboard
						</Link>
						<Link href="/new-todo">
							New Todo
						</Link>

						<button
							type="button"
							onClick={() => signOut({callbackUrl: 'http://localhost:3000'})}
							// make this an outlined button with no fill
							>
							Sign Out
						</button>

						<Link href="/account">
							<Image
								src={session?.user.image}
								width={37}
								height={37}
								className="rounded-full"
								alt="profile"></Image>
						</Link>
					</div>
				) : (
					<>
						{providers &&
							Object.values(providers).map((provider) => (
								<button
									type="button"
									key={provider.name}
									onClick={() => signIn(provider.id)}
									className='border_button'
									>
									Sign In
								</button>
							))}
					</>
				)}
			</div>

			{/* Mobile Navigation */}
			<div className="sm:hidden flex relative">
				{session?.user ? (
					<div className="flex">
						<Image
							className="rounded-full"
							src={session?.user.image}
							width={37}
							height={37}
							alt="profile"
							onClick={() =>
								setToggleDropDown((prev) => !prev)
							}></Image>

						{toggleDropDown && (
							<div className="dropdown">
								<Link
									href="/profile"
									onClick={() => setToggleDropDown(false)}>
									My Profile
								</Link>
								<Link
									href="/dashboard"
									onClick={() => setToggleDropDown(false)}>
									Dashboard
								</Link>
								<Link
									href="/new-todo"
									onClick={() => setToggleDropDown(false)}>
									New Todo
								</Link>
								<button
									type="button"
									onClick={() => {
										setToggleDropDown(false);
										signOut({callbackUrl: 'http://localhost:3000'});
									}}
									className="mt-5 w-full">
									Sign Out
								</button>
							</div>
						)}
					</div>
				) : (
					<>
						{providers &&
							Object.values(providers).map((provider) => (
								<button
									type="button"
									key={provider.name}
									onClick={() => signIn(provider.id)}
									className="black_btn">
									Sign In
								</button>
							))}
					</>
				)}
			</div>
		</nav>
  );
}

export default Nav