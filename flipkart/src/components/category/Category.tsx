import React from "react";
import "./Category.css";
import arrow from "../../asset/arrow-down.svg";
import CategoryPop from "../../utils/CategoryPop.tsx";
import category from "../../constant/category.ts";
import { useNavigate } from "react-router-dom";
import product from "../../constant/product.ts";

const Category = ({noImg}) => {
  const array = [
    { url: "./images/icon/arrow-down.svg", name: "Laptop and Desktop" },
    { url: "./images/icon/arrow-down.svg", name: "Storage" },
  ];
  const location = useNavigate();
  const handleCategory = (e) => {
    e.stopPropagation();
    console.log(e.target);
    const value = e.target.dataset.value;
    const id = e.target.dataset.id;
    if(value){ location(`/products?key=${id}&values=${value}`);}
    if(!value){ location(`/products?key=${id}`);}
    // location(`/products?key=${id}&values=${value}`);
    console.log(id);
  };
  return (
    <div className={`category__container ${noImg?"":"category__container_noImg"}`}>
      {category.map((val, i) => (
        <div
          data-id={val.category_id}
          onClick={(e) => handleCategory(e)}
          key={val.category_id}
          id={val.category_name}
          className="common__category"
        >
          <div
            key={i}
            className={`${
              val.category_name === "Electronics" ||
              val.category_name === "Fashion"
                ? `${noImg?"category_pop-hover":"category_pop-hover1"}` 
                : "invisible"
            }`}
          >
            <div>
              <CategoryPop
                key={val.category_id}
                cat={val.category_name}
                categoryPopName={val.category_name === 'Fashion'?["Women's","Men's","Kid's"]:["Laptop","TV","Drones","Airpods","Camera","Tablets"]}
              />
            </div>
            {/* <div>
              <CategoryPop key={val.category_id} categoryPopName={array} />
            </div> */}
          </div>
          <div className="content-box">
            <div className={`cat_img ${noImg?"":"no_img_nav"}`}>
              <img data-id={val.category_name} src={val.imageUrl} alt="" />
            </div>
            <div className="cat_text">
              <div  className="with_arrow">
                <span
                  data-id={val.category_name}
                  onClick={(e) => {
                    handleCategory(e);
                  }}
                >
                  {" "}
                  {val.category_name}
                </span>
                <span>
                  <img
                    data-id={val.category_name}
                    className={
                      val.category_name === "Electronics" ||
                      val.category_name === "Fashion"
                        ? " "
                        : "invisible"
                    }
                    src={arrow}
                    alt="arrow"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
