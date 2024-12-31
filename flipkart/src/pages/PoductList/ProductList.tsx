import React from "react";
import './ProductList.css'
import { useLocation} from "react-router-dom";
import ProductListCard from "../../components/ProListCard/ProductListCard.tsx";
import category from "../../constant/category.ts";
import products from "../../constant/product.ts";
import { useState,useRef } from "react";



const ProductList = () =>{
  const [sortData, setSortData] = useState([]);
  const [sortInputByPrice, setSortInputByPrice] = useState({min:0,max:0})
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const value = queryParams.get("key");
  // const catName = category.map((val)=>val.category_id);
  const catId = category.map((val)=>{if(val.category_name == value){
              return   val.category_id}}).join('')
  const product =  products.filter((val)=>val.category_id == catId);             
  console.log(value, product)
  const handleSortByPrice = (e) =>{

        if(e.target.dataset.id == "high"){
          const sort = (sortData.length==0?product:sortData).slice().sort((a, b)=>a.price - b.price);
         
         setSortData((prev)=>{
          return [...sort];
         })
        }
        if(e.target.dataset.id == "low"){
          const sort = (sortData.length==0?product:sortData).slice().sort((a, b)=>b.price - a.price);
         
         setSortData((prev)=>{

          return [...sort];
         })
        }
        
  }
  const handleChangeInputByPrice = (e) =>{
        const {name, value} = e.target;
        console.log(name, value)
        setSortInputByPrice((prev)=>{
         return  {...prev,[name]:value}
        })
  }
  console.log(sortData, "data",sortInputByPrice)
  const sortRangePrice = (e) => {
      e.preventDefault()
      console.log(e.target)
      setSortData((prev)=>{
        const newData = (sortData.length==0?product:sortData).filter((val)=>(val.price > sortInputByPrice["min"]) && val.price < sortInputByPrice["max"]);
        return [...newData]
      })
  }

  const handleBrandCheckbox = (e) =>{
    setSortData((prev)=>{
      const newData = (sortData.length==0?product:sortData).filter((val)=>(val.brand == e.target.value));
      return [...newData]
    })
  }

  return(
  <div className="product_list_container">
    <div className="product_list_container__left">
      <div className="product_list_container__left__filters">
        <div className="filter_box">
        <div className="filter_heading">
          <div>
          <h3>Filter</h3>
          </div>
          <div><button>CLEAR ALL</button></div>
        </div>
        </div>
        <div className="filter_box">
        <div className="filter_categories">
          <h5>Categories</h5>
          <ul><li>{value}</li></ul>
        </div>
        </div>
        <div className="filter_box">
        <div className="filter_by_price">
          <div>
          <h5>PRICE</h5>
          <form onClick={(e)=>sortRangePrice(e)}>
          <label htmlFor="">Min</label>
          <input onChange={(e)=>handleChangeInputByPrice(e)} name="min" type="text" />
          <label htmlFor="">Max</label>
          <input onChange={(e)=>handleChangeInputByPrice(e)} name="max" type="text" />
          <button type="submit" >sort</button>
          </form>
          </div>
        </div>
        </div>
        <div className="filter_box">
        <div className="filter_by_brand">
          <h5>BRAND</h5>
          <ol>
            {product.map((val)=><div key={val.brand} >
              <label><input onChange={(e)=>handleBrandCheckbox(e)} name="brand" value={val.brand} type="checkbox"></input>{val.brand}</label>
              </div>)}
          </ol>
        </div>
        </div>
      </div>
    </div>
    <div className="product_list_container__right">
      <div className="product_list__header">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae voluptatum optio natus ipsa enim iste ea amet quia! Eos unde officia, blanditiis quisquam nemo amet obcaecati repudiandae soluta natus numquam?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis maiores tempore totam est incidunt temporibus et quae, fugiat ut unde modi saepe aspernatur molestiae possimus eos nobis doloremque atque dolor?
        Facere sed ad sint explicabo ullam. Quas, sit quos mollitia blanditiis incidunt vitae itaque laudantium harum reprehenderit expedita deleniti obcaecati ratione totam quod impedit omnis doloribus maiores nihil culpa sed.
        Modi rerum eos deleniti id recusandae porro culpa neque dolorem mollitia nostrum cumque iusto, eveniet repudiandae officiis molestias magni eum. Voluptatibus fugit doloribus aut excepturi nesciunt, molestias debitis! Magni, totam.
        Aliquid adipisci ut eligendi doloremque deleniti quas modi eius nisi accusamus repellendus. Ipsam exercitationem laboriosam ratione eveniet quidem non fuga amet repellat officiis sequi illum, id obcaecati animi perspiciatis repudiandae!
        Doloremque earum iste tempora architecto incidunt! Animi, commodi. Voluptas quae non itaque, voluptatibus aperiam molestiae voluptatem recusandae! Magni, incidunt, ullam hic ea pariatur praesentium atque doloribus provident eos voluptatem ipsum.
        Nihil doloribus, eum, explicabo fugit dolorum velit cumque, eius dolores veniam inventore culpa hic porro ut officia accusantium natus molestiae perferendis praesentium. Quia, temporibus nisi! Exercitationem distinctio assumenda facere voluptatum.
      </div>
      <div className="product_list_show">
        <div className="product_list_show__categories"><h3 className="class_pad">{value}</h3></div>
        <div className="product_list_show__sort class_pad">
          <h5>Sort By</h5>
          <p data-id = {"high"} onClick={(e)=>handleSortByPrice(e)}>Price -- Low to High</p>
          <p data-id = {"low"}onClick={(e)=>handleSortByPrice(e)}>Price -- High to Low</p>
        </div>
        <div className="product_list_show__main">
          {(sortData.length==0?product:sortData).map((pro)=><ProductListCard key={pro.product_id} product={pro} />)}
        {/* <ProductListCard key={1} product={product} />
        <ProductListCard key={2} product={product1} /> */}
        </div>
      </div>
    </div>
    
  </div>
  )
}

export default ProductList;