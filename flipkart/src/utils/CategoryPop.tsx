import React from "react";
import "./CategoryPop.css"

const CategoryPop = ({categoryPopName}) => {
// const categoryPopName = [{"url" :"./images/icon/arrow-down.svg",name:"My Profile"},{"url" :"./images/icon/arrow-down.svg",name:"orders"}]
  return (
    <div className="categoryPop__container">
      <ul className="ul-categoryPop">
        {categoryPopName.map((val, i) => {
          return (
            <li className="categoryPop-item" key={i}>
              <div className="categoryPop-content">
                <div className="categoryPop-img arrow">
                  <img src={val.url} alt="icon" />
                </div>
                <div className="categoryPop-value">{val.name}</div>
              </div></li>
          )
        })}
      </ul>
    </div>
  )
}

export default CategoryPop;