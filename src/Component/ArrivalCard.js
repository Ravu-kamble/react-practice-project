import React from 'react'


export default function ArrivalCard(props) {
  return (
    <div>
         <div>
        <div className="card" style={{"width": "18rem;"}}>
        <img src={props.img} className="card-img-top stick_img" alt="..."/>
          <div className="card-body">
              <p className="card-title">{props.name}</p>
              <h6 className="card-subtitle mb-2  fw-bold">{props.title}</h6>
              <p className="card-text">{props.icons} {props.icons} {props.icons} {props.halfstar}<span text-muted fw-bold>{props.price}</span> </p>
              <div className='d-flex justify-content-around align-items-center'>
              <div className='col-md-6 '>
              <a href="#" className="card-link text-info fw-bold fs-7">{props.number01}</a>
              <a href="#" className="card-link text-muted">{props.number02}</a>
              <a href="#" className="card-link fw-bold">{props.number03}</a>
              </div>
              <div className='col-md-6 add-to'>
              <a href="#" className="card-link">{props.cart} {props.add}</a>
              </div>
              </div>
          </div>
          </div>
        </div>
    </div>
  )
}
