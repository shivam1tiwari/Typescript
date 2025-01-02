import React from "react";
import "./Category.css";
import arrow from "../../asset/arrow-down.svg";
import CategoryPop from "../../utils/CategoryPop.tsx";
import category from "../../constant/category.ts";
import { useNavigate } from "react-router-dom";
import product from "../../constant/product.ts";

const Category = () => {
  const array = [
    { url: "./images/icon/arrow-down.svg", name: "Laptop and Desktop" },
    { url: "./images/icon/arrow-down.svg", name: "Storage" },
  ];
  const location = useNavigate();
  const handleCategory = (e) => {
    console.log(e.target);
    const id = e.target.dataset.id;
    location(`/products?key=${id}`);
    console.log(id);
  };
  return (
    <div className="category__container">
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
                ? "category_pop-hover "
                : "invisible"
            }`}
          >
            <div>
              <CategoryPop
                key={val.category_id}
                categoryPopName={product
                  .filter((value) => value.category_id === val.category_id)
                  .map((value) => value.brand)}
              />
            </div>
            {/* <div>
              <CategoryPop key={val.category_id} categoryPopName={array} />
            </div> */}
          </div>
          <div className="content-box">
            <div className="cat_img">
              <img data-id={val.category_name} src={val.imageUrl} alt="" />
            </div>
            <div className="cat_text">
              <div className="with_arrow">
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
