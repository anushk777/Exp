// import react from 'react';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
const App=()=>{
  return(
    <div>

      <Routes>
      <Route exact path="/" element ={<Home/>}/>
      <Route exact path="/login" element ={<Login/>}/>
      <Route exact path="/register" element ={<Register/>}/>
      </Routes>
    </div>
  )

}

export default App;