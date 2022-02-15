import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Recipe from './components/RecipeList'

function App() {
	return (
		<div className="App">
	      <center>
			  <Header />
		  {/* <Home /> */}
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/recipe" element={<Recipe />} />
			
			</Routes>
		  </center>
		</div>
	);
}

export default App;
