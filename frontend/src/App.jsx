import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LayoutRoutes from './routes/LayoutRoutes'

function App() {

  return (
    <div className="overflow-x-hidden w-full">
      <LayoutRoutes/>
    </div>
  )
}

export default App
