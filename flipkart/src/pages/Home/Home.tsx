import React, { useState } from "react";
import Category from "../../components/category/Category.tsx";
import Slider from "../../components/slider/Slider.tsx";
import Top from "../../components/top/Top.tsx";
import { useLocation } from "react-router-dom";
import "./Home.css";
const Home = () => {
  interface state {
    brand: number;
    glocery: number;
    mobile: number;
    electronics: number;
  }

  const [direction, setDirection] = useState<state>({
    brand: 0,
    glocery: 0,
    mobile: 0,
    electronics: 0
  })
  const location = useLocation()
  console.log(location)
  const categories = ["Mobiles"]
  const handleInd = (e) => {
    console.log(e.target.value)
    const l = e.target.dataset.id;
    console.log(l)
    setDirection((prev) => {
      console.log(l)
      let state = { ...prev }
      state[l] = state[l] + 1

      return { ...state };
    })
  }
  return (
    <>
      <Category />
      <Slider />
      {["brand", "glocery", "mobile", "electronics"].map((val) => <div key={val} className="top_product_home" >
        <Top key={val} noOfProd={direction[val]} brandName={val} />
        <button className="top_product_home_but-next" onClick={(e) => handleInd(e)} data-id={val} value={"next"} ><img src="/images/icon/arrow-down.svg" alt="" /></button>
        <button className="top_product_home_but-prev" onClick={handleInd} data-id={val} value={"prev"}><img src="/images/icon/arrow-down.svg" alt="" /></button>
      </div>)}
    </>
  )
}

export default Home;