import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/LandingPage/HeroSection/HeroSection'
import OurCommitments from './components/OurCommitments/OurCommitments'
import BestDeals from './components/LandingPage/HeroSection/BestDeals/BestDeals'
import Categories from './components/Categories/Categories'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = 'text-black text-[50px]'>
    <HeroSection/>
    <OurCommitments/>
    <BestDeals/>
    <Categories/>
    </div>
  )
}

export default App
