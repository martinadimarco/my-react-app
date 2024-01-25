// Filename - App.js

import "./App.css";
import Sidebar from "./Components/Sidebar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import {
	Accordion,
  Button,
  Card,
  Carousel,
  Componenti,
  Dropdown,
  Modal,
} from "./Pages/Componenti";

function App() {
	return (
		<Router>
			<Sidebar />
			<Routes>
				<Route
					path="/componenti"
					element={<Componenti />}
				/>
				<Route
					path="/componenti/accordion"
					element={<Accordion />}
				/>
				<Route
					path="/componenti/button"
					element={<Button />}
				/>
        <Route
					path="/componenti/card"
					element={<Card />}
				/>
        <Route
					path="/componenti/carousel"
					element={<Carousel />}
				/>
        <Route
        path="/componenti/dropdown"
        element={<Dropdown />}
      />
       <Route
        path="/componenti/modal"
        element={<Modal />}
      />
			</Routes>
		</Router>
	);
}

export default App;



