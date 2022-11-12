import { useState } from 'react'

import './App.css'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import CollapsibleExample from './Components/Navbar/Navbar'

function App() {


  return (
    <div className="App">
      <CollapsibleExample/>
      <Home/>
      <br />
      <br />
      <Footer/>
     
    </div>
  )
}

export default App
