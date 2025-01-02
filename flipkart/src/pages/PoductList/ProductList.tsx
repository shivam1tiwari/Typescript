import React from "react";
import "./ProductList.css";
import { useLocation } from "react-router-dom";
import ProductListCard from "../../components/ProListCard/ProductListCard.tsx";
import category from "../../constant/category.ts";
import products from "../../constant/product.ts";
import { useState, useRef } from "react";

const ProductList = () => {
  const [sortData, setSortData] = useState([]);
  const [sortInputByPrice, setSortInputByPrice] = useState({ min: 0, max: 0 });
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const value = queryParams.get("key");
  // const catName = category.map((val)=>val.category_id);
  let product;
  const catId = category
    .map((val) => {
      if (val.category_name == value) {
        return val.category_id;
      }
    })
    .join("");
  if (catId) {
    product = products.filter((val) => val.category_id === catId);
  } else if (products.some((val) => val.brand == value)) {
    product = products.filter((val) => val.brand == value);
  }

  console.log(value, product);
  const handleSortByPrice = (e) => {
    if (e.target.dataset.id == "high") {
      const sort = (sortData.length == 0 ? product : sortData)
        .slice()
        .sort((a, b) => a.price - b.price);

      setSortData((prev) => {
        return [...sort];
      });
    }
    if (e.target.dataset.id == "low") {
      const sort = (sortData.length == 0 ? product : sortData)
        .slice()
        .sort((a, b) => b.price - a.price);

      setSortData((prev) => {
        return [...sort];
      });
    }
  };
  const handleChangeInputByPrice = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setSortInputByPrice((prev) => {
      return { ...prev, [name]: value };
    });
  };
  console.log(sortData, "data", sortInputByPrice);
  const sortRangePrice = (e) => {
    e.preventDefault();
    console.log(e.target);
    setSortData((prev) => {
      const newData = (sortData.length == 0 ? product : sortData).filter(
        (val) =>
          val.price > sortInputByPrice["min"] &&
          val.price < sortInputByPrice["max"]
      );
      return [...newData];
    });
  };

  const handleBrandCheckbox = (e) => {
    setSortData((prev) => {
      const newData = (sortData.length == 0 ? product : sortData).filter(
        (val) => val.brand == e.target.value
      );
      return [...newData];
    });
  };

  return (
    <div className="product_list_container">
      <div className="product_list_container__left">
        <div className="product_list_container__left__filters">
          <div className="filter_box">
            <div className="filter_heading">
              <div>
                <h3>Filter</h3>
              </div>
              <div>
                <button className="invisible">CLEAR ALL</button>
              </div>
            </div>
          </div>
          <div className="filter_box">
            <div className="filter_categories">
              <h5>Categories</h5>
              <ul>
                <li>{value}</li>
              </ul>
            </div>
          </div>
          <div className="filter_box">
            <div className="filter_by_price">
              <div>
             
                <h5>PRICE</h5>
                <form onClick={(e) => sortRangePrice(e)}>
                  <label htmlFor="">Min</label>
                  <input
                    onChange={(e) => handleChangeInputByPrice(e)}
                    name="min"
                    type="text"
                  />
                  <label htmlFor="">Max</label>
                  <input
                    onChange={(e) => handleChangeInputByPrice(e)}
                    name="max"
                    type="text"
                  />
                  <div className="btn-price-sort">
                    <button type="submit">Go</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="filter_box">
            <div className="filter_by_brand">
              <h5>BRAND</h5>
              <ol>
                {product.map((val) => (
                  <div key={val.brand}>
                    <label>
                      <input
                        onChange={(e) => handleBrandCheckbox(e)}
                        name="brand"
                        value={val.brand}
                        type="checkbox"
                      ></input>
                      {val.brand}
                    </label>
                  </div>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="product_list_container__right">
        <div className="product_list__header">
          {value} appliances aren't just about preparing food—they're about
          transforming your culinary space into a high-performance hub. From
          smart refrigerators that optimize storage and track freshness to
          automatic coffee machines that deliver café-quality brews at home,
          grocery appliances can elevate how you shop, cook, and enjoy meals.
          The convenience of appliances like air fryers, blenders, and food
          processors makes it easy to experiment with new recipes, saving time
          and effort while producing delicious, nutritious results. They don’t
          just support your lifestyle—they make it easier and more enjoyable.
          The future of mobile electronics, grocery appliances, and home
          essentials lies in innovation and intelligent integration. From
          voice-controlled assistants to IoT-enabled devices, every item is
          becoming more intuitive, connected, and optimized for your unique
          needs. We’re not just talking about appliances and gadgets; we're
          talking about tools that understand you and adapt to your lifestyle.
          Whether it's enhancing productivity, simplifying chores, or creating
          smarter living environments, these products are designed to make life
          easier, more efficient, and enjoyable. In summary, these
          categories—mobile electronics, grocery appliances, and home
          essentials—are no longer just about products; they represent a shift
          toward intelligent, seamless living
        </div>
        <div className="product_list_show">
          <div className="product_list_show__categories">
            <h3 className="class_pad">{value}</h3>
          </div>
          <div className="product_list_show__sort class_pad">
            <h5>Sort By</h5>
            <p className="sort_low_high_price" data-id={"high"} onClick={(e) => handleSortByPrice(e)}>
              Price -- Low to High
            </p>
            <p className="sort_low_high_price" data-id={"low"} onClick={(e) => handleSortByPrice(e)}>
              Price -- High to Low
            </p>
          </div>
          <div className="product_list_show__main">
            {(sortData.length == 0 ? product : sortData).map((pro) => (
              <ProductListCard key={pro.product_id} product={pro} />
            ))}
            {/* <ProductListCard key={1} product={product} />
        <ProductListCard key={2} product={product1} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
