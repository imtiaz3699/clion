import { useEffect, useState } from 'react'
import './App.css'
import HeroSection from './components/LandingPage/HeroSection/HeroSection'
import Categories from './components/Categories/Categories'
import ProductListing from './components/ProductListing/ProductListing'

function App() {
  const [count, setCount] = useState(0)
  function getOrCreateGuestId() {
    let guestId = localStorage.getItem("guest_id");
    if (!guestId) {
      guestId = crypto.randomUUID();
      localStorage.setItem("guest_id", guestId);
    }
    return guestId;
  }
  useEffect(() => {
    getOrCreateGuestId();
  }, []);
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
