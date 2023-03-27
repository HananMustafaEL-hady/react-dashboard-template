import React, { useState } from 'react';
import './App.scss';
import './styles/index.scss';
import { Sidebar } from './UI/components';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './UI/components/navbar/navbar.component';
import { HomePage } from './UI/pages';

function App() {
	const [isClosedNav, setCloseNav] = useState(false)

	return (
		<div className="App">

			<Navbar isClosedNav={isClosedNav} setCloseNav={setCloseNav} />
			<Sidebar isClosedNav={isClosedNav} setCloseNav={setCloseNav} />

			<Routes>
				<Route path='/' element={< HomePage />}></Route>

			</Routes>
		</div>
	);
}

export default App;
