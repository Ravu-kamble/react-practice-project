import React from 'react'
import hero_img from './../Img/hero.png'

export default function Home() {
  return (
    <div className='home-section'>
      
      <div className=" container-fluid p-4 mb-3">
  <div className="row g-0 align-items-center">
   
    <div className="col-md-6">
      <div className="card-body banner-content fw-bold">
        <h6 className="card-title">Starting At $999</h6>
        <h1 className="card-text">The best notebook collection 2024</h1>
        <h3 className="card-text">Exclusive offer <span className='danger'>-10%</span>  off this week</h3>
        <button className='shop-btn'>Shop Now</button>
      </div>
    </div>

    <div className="col-md-6">
      <img src={hero_img} className="img-fluid rounded-start" alt="..."/>
    </div>
  </div>
</div>
    </div>
  )
}
