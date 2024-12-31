import React, { useState } from "react";
import Category from "../../components/category/Category.tsx";
import Slider from "../../components/slider/Slider.tsx";
import Top from "../../components/top/Top.tsx";
import { useLocation } from "react-router-dom";
import "./Home.css";
import products from "../../constant/product.ts";
import product from "../../constant/product.ts";
import category from "../../constant/category.ts";
const Home = () => {
  interface state {
    brand: number;
    grocery: number;
    mobile: number;
    electronics: number;
    appliances:number;
  }

  const [direction, setDirection] = useState<state>({
    brand: 0,
    grocery: 0,
    mobile: 0,
    electronics: 0,
    appliances:0
  })
  const location = useLocation()
  console.log(location)
  const categories = ["Mobiles"]
  
  const brand = products.filter((pro)=>pro.rating > 4.7);
  const grocery = products.filter((pro)=>pro.category_id === 'C001');
  const mobiles = products.filter((pro)=>pro.category_id === 'C002')
  const fashion = products.filter((pro)=>pro.category_id === 'C003');
  const electronics = products.filter((pro)=>pro.category_id === 'C004');
  const appliances = products.filter((pro)=>pro.category_id === 'C006');

  const product = [brand,grocery,mobiles,fashion,electronics,appliances]

  const handleInd = (e) => {
    console.log(e.target.value)
    const l:string = e.target.dataset.id;
    // console.log(l)
    if(e.target.value == "next"){
    setDirection((prev) => {
      console.log(l)
     let value =  prev[l] == 2 ? 2 : prev[l]+1;
       
      return { ...prev, [l]:value};
    })
  }
  if(e.target.value == "prev"){
    setDirection((prev) => {
      console.log(l)
      let value =  prev[l] == 0 ? 0 : prev[l]-1;
      // let state = { ...prev }
      // state[l] = state[l] + 1

      return { ...prev, [l]:value};
    })
  }
  }
  return (
    <>
      <Category />
      <Slider />
      {["brand", "grocery", "mobile", "electronics","appliances"].map((val, i) => <div key={val} className="top_product_home" >
        <Top key={val} noOfProd={direction[val]} brandName={val} product={product[i]} />
        <button className={`top_product_home_but-next ${direction[val]==2?"invisible":"" }`} onClick={(e) => handleInd(e)} data-id={val} value={"next"} ><img src="/images/icon/arrow-down.svg" alt="" /></button>
        <button className={`top_product_home_but-prev ${direction[val]==0?"invisible":"" }`} onClick={handleInd} data-id={val} value={"prev"}><img src="/images/icon/arrow-down.svg" alt="" /></button>
      </div>)}
    </>
  )
}

export default Home;