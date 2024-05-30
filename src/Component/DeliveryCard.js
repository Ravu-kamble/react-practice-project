import React from 'react'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';


export default function DeliveryCard() {
  return (
    <div className='card'>
      <div className='d-flex justify-content-around align-items-center card01'>
        <div>
           <LocalShippingOutlinedIcon/>
        </div>
        <div>
          <h5>Free Delivery</h5>
          <p>Orders from all items</p>
        </div>
        </div>
    </div>
  )
}
