import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Recipe from './components/RecipeList'

function App() {
	return (
		<>
		  <Header />
		<div className="container">
	      <center>
			
		  {/* <Home /> */}
			<Routes>
				{/* <Route path="/CipherSchools" element={<Login />} /> */}
				<Route path="/" element={<Login />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/recipe" element={<Recipe />} />
			
			</Routes>
		  </center>
		</div>
		</>
	);
}

export default App;
