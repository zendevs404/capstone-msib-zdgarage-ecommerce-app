import { useState } from 'react'
import './App.css'
import { Outlet } from "react-router-dom";
import Home from './home/Home';
import Navitems from './components/Navitems'
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navitems />
      <Outlet />
      <Footer />
    </>
  )
}

export default App