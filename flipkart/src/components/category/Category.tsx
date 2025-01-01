import React from 'react'
import './Category.css'
import glossaryImg from '../../asset/category/glocery.png'
import mobileImg from '../../asset/category/mobile.png'
import fashionImg from '../../asset/category/fashion.webp'
import electronicsImg from '../../asset/category/electronics.webp'
import furnitureImg from '../../asset/category/home decor.webp'
import appliancesImg from '../../asset/category/home-appliance.jpg'
import flightImg from '../../asset/category/plane.webp'
import beautyImg from '../../asset/category/game.webp'
import twoWheelersImg from '../../asset/category/motar.png';
import arrow from '../../asset/arrow-down.svg'
import CategoryPop from '../../utils/CategoryPop.tsx'
import category from '../../constant/category.ts'
import {Link, useNavigate} from 'react-router-dom'

const Category = () =>{
 const array =  [{"url" :"./images/icon/arrow-down.svg",name:"Laptop and Desktop"},{"url" :"./images/icon/arrow-down.svg",name:"Storage"}]
 const location = useNavigate()
 const handleCategory = (e) =>{
    console.log(e.target)
    const id =  e.target.dataset.id
    location(`/products?key=${id}`)
    console.log(id)}
  return(
    <div className="category__container">
      {
        category.map((val, i)=><div data-id={val.category_id} onClick={(e)=>handleCategory(e)} key={val.category_id} id ={val.category_name} className="common__category">
        <div key={i} className= {`${(val.category_name ==="Electronics"||
        val.category_name === "Home and Furniture"||val.category_name === "Fashion"
        )?"category_pop-hover ":"invisible"}`}>
        <div><CategoryPop key={val.category_id} categoryPopName={array}/></div>
        <div><CategoryPop key={val.category_id} categoryPopName={array}/></div>
        </div>
        <div className="content-box">
       <div className='cat_img'><img data-id={val.category_name} src={val.imageUrl} alt="" /></div>
       <div className='cat_text'>
        <div className='with_arrow'>
        <span data-id ={val.category_name} onClick={(e)=>{handleCategory(e)}} > {val.category_name}</span>
        <span ><img data-id ={val.category_name}  className={(val.category_name ==="Electronics" ||
        val.category_name === "Home and Furniture"||val.category_name === "Fashion"
        ) ? " ":"invisible"} src={arrow} alt="arrow" /></span>
        </div>
        </div>
       </div>
       </div>)
      }
     {/* <div id='glocery' className="common__category">
    <NavLink to={'/products'} > <div className="content-box">
      <div className='cat_img'><img src={glossaryImg} alt="" /></div>
      <div className='cat_text'><span>Glocery</span></div>
      </div></NavLink>
     </div>
     
     <div id='mobile' className="common__category">
     <div className="content-box">
     <div className='cat_img'><img src={mobileImg} alt="" /></div>
     <div className='cat_text'><span>Mobiles</span></div>
     </div>
     </div>
     
     <div id='fashion' className="common__category">
      <div className='category_pop-hover'>
      <div><CategoryPop categoryPopName={array}/></div>
      <div><CategoryPop categoryPopName={array}/></div>
      </div>
      <div className="content-box">
     <div className='cat_img'><img src={fashionImg} alt="" /></div>
     <div className='cat_text'>
      <div className='with_arrow'>
      <span>Fashion</span>
      <span><img src={arrow} alt="arrow" /></span>
      </div>
      </div>
     </div>
     </div>
     <div id='electronics' className="common__category">
     <div className='category_pop-hover'>
      <div><CategoryPop categoryPopName={array}/></div>
      <div><CategoryPop categoryPopName={array}/></div>
     </div>
      <div className="content-box">
     <div className='cat_img'><img src={electronicsImg} alt="" /></div>
     <div className='cat_text'>
      <div className='with_arrow'>
      <span>Electronics</span>
      <span><img src={arrow} alt="arrow" /></span>
      </div>
      </div>
     </div>
     </div>
     <div id='home_&_furniture' className="common__category">
     <div className='category_pop-hover'>
     <div><CategoryPop categoryPopName={array}/></div>
     <div><CategoryPop categoryPopName={array}/></div>
     </div>
      <div className="content-box">
     <div className='cat_img'><img src={furnitureImg} alt="" /></div>
     <div className='cat_text'>
      <div className="with_arrow">
      <span>Home & Furniture</span>
      <span><img src={arrow} alt="arrow" /></span>
      </div>
      </div>
     </div>
     </div>
     <div id='appliances' className="common__category">
      <div className="content-box">
     <div className='cat_img'><img src={appliancesImg} alt="Appliances" /></div>
      <div className='cat_text'><span>Appliances</span></div>
      </div>
     </div>
     <div id='flight_bookings' className="common__category">
      <div className="content-box">
     <div className='cat_img'><img src={flightImg} alt="" /></div>
     <div className='cat_text'><span>Flight Bokkings</span></div>
     </div>
     </div>
     <div id='beauty_toys_&_more' className="common__category">
      <div className="content-box">
     <div className='cat_img'><img src={beautyImg} alt="" /></div>
     <div className='cat_text'>
      <div className='with_arrow'>
      <span>Beauty, Toys & More</span>
      <span><img src={arrow} alt="arrow" /></span>
      </div>
      </div>
     </div>
     </div>
     <div id='two_wheelers' className="common__category">
      <div className="content-box">
     <div className='cat_img'><img src={twoWheelersImg} alt="" /></div>
     <div className='cat_text'>
      <div className="with_arrow">
      <span>Two Wheelers</span>
      <span className={(val.category_name == "Mobiles"||"electonics")?"":"invisible"} ><img src={arrow} alt="arrow" /></span>
      </div>
     </div>
     </div>
     </div> */}
     
    </div>
  )
}

export default Category;