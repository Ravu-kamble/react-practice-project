import React from 'react'
import TrendCard from '../Component/TrendCard'
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


export default function Treding() {

   let data=[
    {
    img:"./img02/maskara.png",
    name:"beauty",
    title:"Essence Mascara Lash Princess",
    icons: <StarBorderPurple500OutlinedIcon/>,
    halfstar:<StarHalfOutlinedIcon/>,
    price:4.94,
    number01:"$9.27",
    number02:"$9.99",
    number03:"7.17%",
    cart:<ShoppingCartOutlinedIcon/>,
    add:"ADD TO CART"

  },
  {
  img:"./img02/eyeshadw.png",
  name:"beauty",
  title:"Eyeshadow Palette with Mirror",
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
img:"./img02/compact.png",
name:"beauty",
title:"Powder Canister",
icons: <StarBorderPurple500OutlinedIcon/>,
halfstar:<StarHalfOutlinedIcon/>,
price:3.82,
number01:"$12.27",
number02:"$14.99-",
number03:"18.14%",
cart:<ShoppingCartOutlinedIcon/>,
add:"ADD TO CART"
},
{
img:"./img02/lipstick.png",
name:"beauty",
title:"Red Lipstick",
icons: <StarBorderPurple500OutlinedIcon/>,
halfstar:<StarHalfOutlinedIcon/>,
price:2.51,
number01:"$10.52",
number02:"$12.99-",
number03:"19.03%",
cart:<ShoppingCartOutlinedIcon/>,
add:"ADD TO CART"
},
{
  img:"./img02/nailpaint.png",
  name:"beauty",
  title:"Red Nail Polish",
  icons: <StarBorderPurple500OutlinedIcon/>,
  halfstar:<StarHalfOutlinedIcon/>,
  price:3.91,
  number01:"$8.77",
  number02:"$8.99-",
  number03:"2.46%",
  cart:<ShoppingCartOutlinedIcon/>,
  add:"ADD TO CART"
  },
  {
    img:"./img02/c_k.png",
    name:"fragrances",
    title:"Calvin Klein CK One",
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
      img:"./img02/coco.png",
      name:"fragrances",
      title:"Chanel Coco Noir Eau De",
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
        img:"./img02/dior.png",
        name:"fragrances",
        title:"Dior J'adore",
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
        return   <TrendCard  img={dt.img} name={dt.name} title={dt.title} icons={dt.icons} halfstar={dt.halfstar} price={dt.price}  number01={dt.number01} number02={dt.number02} number03={dt.number03} cart={dt.cart} add={dt.add}/>
      
      })

      }
   
      </div>
      </div>
    </div>
  )
}
