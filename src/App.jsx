import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './home'
import Carosel from './Carosel'
import DarkVeil from './DarkVeil'
import LiquidEther from './LiquidEther';






function App() {
  
  return (
    <>
      

      <div className="liquid-ether-container">
      <LiquidEther
        colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
        mouseForce={20}
        cursorSize={50}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={false}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />
      </div>
      <DarkVeil speed={3} />
      <div style={{  width: "100%",
            height: "100vh",
            display: "flex",        
            alignItems: "center",   
            justifyContent: "space-between", 
            padding: "0 10px",
            position: "relative",
             zIndex: 10 }}>
        
        
        <Home/>
        <Carosel/>
        
      </div>
      
    </>
  )
}

export default App
