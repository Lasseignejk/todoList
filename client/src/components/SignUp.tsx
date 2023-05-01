const SignUp = (): JSX.Element => {
	return (
		<div>
			<form action="post">
				<div>
					<label htmlFor="email">Email</label>
					<input type="email" id="email" />
				</div>
				<div>
					<label htmlFor="username">Username</label>
					<input type="text" id="username" />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" id="username" />
				</div>
			</form>
		</div>
	);
};

export default SignUp;
