import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import MyNotes from "./components/MyNotes";

function App() {
	return (
		<Routes>
			<Route path="/signup" element={<SignUp />} />
			<Route path="/login" element={<Login />} />
			<Route path="/mynotes" element={<MyNotes />} />
		</Routes>
	);
}

export default App;
