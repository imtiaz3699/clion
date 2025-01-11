import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/LandingPage/HeroSection/HeroSection'
import OurCommitments from './components/OurCommitments/OurCommitments'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = 'text-black text-[50px]'>
    <HeroSection/>
    <OurCommitments/>
    </div>
  )
}

export default App
