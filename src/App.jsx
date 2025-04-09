import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/LandingPage/HeroSection/HeroSection'
import OurCommitments from './components/OurCommitments/OurCommitments'
import BestDeals from './components/LandingPage/HeroSection/BestDeals/BestDeals'
import Categories from './components/Categories/Categories'
import FeaturedProducts from './components/LandingPage/FeaturedProducts/FeaturedProducts'
import SaleeProduct from './components/LandingPage/SaleProduct/SaleeProduct'
import ProductListing from './components/ProductListing/ProductListing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = 'text-black text-[50px]'>
    <HeroSection/>
    {/* <OurCommitments/> */}
    {/* <BestDeals/> */}
    <Categories/>
    {/* <FeaturedProducts/> */}
    <ProductListing/>    
    {/* <SaleeProduct/> */}
    </div>
  )
}

export default App
