import React from "react";
import "./List.css"
import { Link, useLocation } from "react-router-dom";
import Profile from "../pages/Profile/Profile";
import { useSelector } from "react-redux";

const List = () => {
const listName = [{"url" :"/images/icon/profile-icon.svg",name:"My Profile","Link":"/profile"},{"url" :"/images/icon/profile-icon.svg",name:"orders","Link":"/orders"}]
const user = useSelector((state)=>state.user)
console.log()
  return (
    <div className="list__container">
      <ul className="ul-list">
        {listName.map((val, i) => {
          return (
           <Link className="link" to={user?val?.Link:""}> <li className="list-item" key={i}>
              <div className="list-content">
                <div className="list-img">
                  <img src={val.url} alt="icon" />
                </div>
                <div className="list-value">{val.name}</div>
              </div></li></Link>
          )
        })}
      </ul>
    </div>
  )
}

export default List;