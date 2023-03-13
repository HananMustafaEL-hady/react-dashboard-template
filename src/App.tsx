import React from 'react';
import logo from './logo.svg';
import './App.scss';
import './styles/index.scss';
import { Sidebar } from './UI/components';
import { Route, Router, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Sidebar />
      {/* <Router location={''} navigator={} >
        <Routes>
          
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
