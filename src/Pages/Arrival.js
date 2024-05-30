import React from 'react'
import ArrivalCard from '../Component/ArrivalCard'
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Arrival() {

  let data=[
    {
    img:"./img02/dolce.png",
    name:"fragrances",
    title:"Dolce Shine Eau de",
    icons: <StarBorderPurple500OutlinedIcon/>,
    halfstar:<StarHalfOutlinedIcon/>,
    price:2.68,
    number01:"$9.27",
    number02:"$9.99",
    number03:"7.17%",
    cart:<ShoppingCartOutlinedIcon/>,
    add:"ADD TO CART"

  },
  {
  img:"./img02/gucci.png",
  name:"fragrances",
  title:"Gucci Bloom Eau de",
  icons: <StarBorderPurple500OutlinedIcon/>,
  halfstar:<StarHalfOutlinedIcon/>,
  price:3.28,
  number01:"$18.89",
  number02:"$19.99-",
  number03:"5.5%",
  cart:<ShoppingCartOutlinedIcon/>,
  add:"ADD TO CART"
},
{
img:"./img02/bed.png",
name:"beauty",
title:"Annibale Colombo Bed",
icons: <StarBorderPurple500OutlinedIcon/>,
halfstar:<StarHalfOutlinedIcon/>,
price:4.14,
number01:"$1899.99",
// number02:"$14.99-",
// number03:"18.14%",
cart:<ShoppingCartOutlinedIcon/>,
add:"ADD TO CART"
},
{
img:"./img02/sofa.png",
name:"beauty",
title:"Annibale Colombo Sofa",
icons: <StarBorderPurple500OutlinedIcon/>,
halfstar:<StarHalfOutlinedIcon/>,
price:3.51,
number01:"$2036.49",
number02:"$12.99-",
number03:"19.03%",
cart:<ShoppingCartOutlinedIcon/>,
add:"ADD TO CART"
},
{
  img:"./img02/table.png",
  name:"beauty",
  title:"Bedside Table African Cherry",
  icons: <StarBorderPurple500OutlinedIcon/>,
  halfstar:<StarHalfOutlinedIcon/>,
  price:4.48,
  number01:"$271.25",
  number02:"$8.99-",
  number03:"2.46%",
  cart:<ShoppingCartOutlinedIcon/>,
  add:"ADD TO CART"
  },
  {
    img:"./img02/chair.png",
    name:"fragrances",
    title:"Knoll Saarinen Executive Conference Chair",
    icons: <StarBorderPurple500OutlinedIcon/>,
    halfstar:<StarHalfOutlinedIcon/>,
    price:4.85,
    number01:"$49.99",
    // number02:"$8.99-",
    // number03:"2.46%",
    cart:<ShoppingCartOutlinedIcon/>,
    add:"ADD TO CART"
    },
    {
      img:"./img02/wooden_miror.png",
      name:"fragrances",
      title:"Wooden Bathroom Sink With Mirror",
      icons: <StarBorderPurple500OutlinedIcon/>,
      halfstar:<StarHalfOutlinedIcon/>,
      price:2.76,
      number01:"$105.76",
      number02:"$129.99-",
      number03:"18.64%",
      cart:<ShoppingCartOutlinedIcon/>,
      add:"ADD TO CART"
      },
      {
        img:"./img02/apple.png",
        name:"fragrances",
        title:"Apple",
        icons: <StarBorderPurple500OutlinedIcon/>,
        halfstar:<StarHalfOutlinedIcon/>,
        price:3.31,
        number01:"$49.99",
        number02:"$74.30",
        number03:"17.44%",
        cart:<ShoppingCartOutlinedIcon/>,
        add:"ADD TO CART"
        },
]

  return (
    <div className='section'>
    <div className='container-fluid'>
  <h2>Trending Products</h2>

  <div className='Treding-page '>
  {
      data.map((dt)=>{
     
      return   <ArrivalCard img={dt.img} name={dt.name} title={dt.title} icons={dt.icons} halfstar={dt.halfstar} price={dt.price}  number01={dt.number01} number02={dt.number02} number03={dt.number03} cart={dt.cart} add={dt.add}/>
      
      })
  }
    
      </div>
      </div>
    </div>
    
  )
}
