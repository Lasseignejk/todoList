import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Todo List",
  description: "Helping you organize your life"
}

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<Provider>
					<main>
						<Nav />
						{children}
					</main>
				</Provider>
			</body>
		</html>
	);
};

export default RootLayout;
