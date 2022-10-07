import React from 'react';
import {Routes, Route} from "react-router-dom";
import Landing from './Components/Landing/Landing.jsx';
import Main from './Components/Main/Main.jsx'
import Navbar from './Components/Navbar/NavBar.jsx';
import CreateUser from './Components/CreateUser/CreateUser.jsx';
import Details from './Components/Details/Details.jsx'
import Login from './Components/Login/Login.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import AddGame from './Components/AddGame/AddGame.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path={'/'} element={<Landing/>}></Route>
        <Route exact path={'/Main'} element={<><Navbar/><Main/></>}></Route>
        <Route exact path={'/CreateUser'} element={<><Navbar/><CreateUser/></>}></Route>
        <Route exact path={'/Details/:id'} element={<><Navbar/><Details/></>}></Route>
        <Route exact path={'/Login'} element={<><Navbar/><Login/></>}></Route>
        <Route exact path={'/Dashboard'} element={<><Navbar/><Dashboard/></>}></Route>
        <Route exact path={'/AddGame'} element={<><Navbar/><AddGame/></>}></Route>
      </Routes>
    </div>
  );
}

export default App;
