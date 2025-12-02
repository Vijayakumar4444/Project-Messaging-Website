import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './home'




import DarkVeil from "./DarkVeil";

function App() {
  
  return (
    <>
      
      
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        
        <DarkVeil speed={3} />
        <Home/>
        
      </div>
      
    </>
  )
}

export default App
