import React from "react";
import "./CategoryPop.css";

const CategoryPop = ({ categoryPopName }) => {
  const handleBrand = (e) => {};
  return (
    <div className="categoryPop__container">
      <ul className="ul-categoryPop">
        {categoryPopName.map((val, i) => {
          return (
            <li data-id={val} className="categoryPop-item" key={i}>
              <div data-id={val} className="categoryPop-content">
                <div className="categoryPop-img arrow">
                  <img
                    data-id={val}
                    src={"/images/icon/arrow-down.svg"}
                    alt="icon"
                  />
                </div>
                <div
                  data-id={val}
                  onClick={(e) => handleBrand(e)}
                  className="categoryPop-value"
                >
                  {val}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryPop;
