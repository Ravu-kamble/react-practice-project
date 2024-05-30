import React from 'react'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Delivery from './Pages/Delivery'
import Treding from './Pages/Treding'
import OfferGrap from './Pages/OfferGrap'
import Arrival from './Pages/Arrival'
import Footer from './Pages/Footer'




export default function AllComponent() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Delivery/>
        <Treding/>
        <OfferGrap/>

        <Arrival/>
        <Footer/>

    </div>
  )
}
