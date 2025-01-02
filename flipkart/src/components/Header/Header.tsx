import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../asset/logo.svg";
import loginImg from "../../asset/profile-icon.svg";
import arrowImg from "../../asset/arrow-down.svg";
import cartImg from "../../asset/header_cart.svg";
import storeImg from "../../asset/store_icon.svg";
import verticleDot from "../../asset/header_3verticalDots.svg";
import List from "../../utils/List.tsx";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../Redux/ActionCreator.ts";
import products from "../../constant/product.ts";
import product from "../../constant/product.ts";
import { useNavigate, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [searchItem, setSearchItem] = useState([]);
  const [productName, setProductName] = useState("")
  const location = useNavigate();
  const dispatch = useDispatch();
  const lo = useLocation();
  const user = useSelector((state) => state.user);
  const toggleUser = user == null ? "Login" : "My Account";
  const cartAccess = user == null ? "/login" : "/cart";
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleSearch = (e) => {
    const str = e.target.value;
    setProductName(str);
    console.log(e.target.value);
    setSearchItem((val) => {
      let arr = [...val];
      arr = [];
      return arr;
    });
    const brandMatch = product.map((val) => {
      console.log(
        val.brand.toLocaleUpperCase().substring(0, str.length) ==
          str.toLocaleUpperCase()
      );
      if (
        val.name.toLocaleUpperCase().substring(0, str.length) ==
          str.toLocaleUpperCase() &&
        str !== ""
      ) {
        setSearchItem((prev) => {
          return [...prev, val];
        });
      }
    });
    console.log(searchItem);
  };

  const handleSearchProduct = (e) => {
    console.log(e.target.dataset.id);
    const productId = e.target.dataset.id;
    const productName = e.target.dataset.name;
    location(`/products/product-details?key=${productId}`);
    setSearchItem([]);
    setProductName(productName);
  };

  // const handleRedirect = () => {};
  return (
    <div className="app__container__header-box">
      <div className="app__container__header">
        <div className="app__container__header__nav">
          <div className="app__container__header__nav-left">
            <div className="logo-box">
              <div className="logo-img">
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="search-box">
              <div className="search-button">
                <div className="search-button-icon">
                  <span
                    style={{
                      color: "gray",
                      fontSize: "1.5rem",
                      padding: "1rem",
                      fontWeight: "",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      className=""
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Search Icon</title>
                      <path
                        d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
                        stroke="#717478"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M16 16L21 21"
                        stroke="#717478"
                        stroke-width="1.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="input-box">
                <input
                  onChange={(e) => handleSearch(e)}
                  type="text"
                  value={productName}    //add hear value
                  placeholder="Search For Products, Brands and More"
                />
                {searchItem.map((val, i) => (
                  <div
                    data-name = {val.name}
                    data-id={val.product_id}
                    onClick={(e) => handleSearchProduct(e)}
                    className="search_item_by_name_container"
                    key={i}
                  >
                    <div
                      data-name = {val.name}
                      data-id={val.product_id}
                      className="search_item_by_name_container_img"
                    >
                      <img
                        data-name = {val.name}
                        data-id={val.product_id}
                        src={val.image_url}
                        alt=""
                      />
                    </div>
                    <div data-name = {val.name} data-id={val.product_id}>
                      <span data-id={val.product_id}>{val.name} </span>
                      <p data-name = {val.name} data-id={val.product_id}>
                        <span>in .</span>
                        {val.brand}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="app__container__header__nav-right ">
            <div className="login-box ">
              <div className="login-icon">
                <img src={loginImg} alt="loginImg" />
              </div>

              <div className="login-text">
                <Link className="link" to={"/login"}>
                  <span>{toggleUser}</span>{" "}
                </Link>
              </div>
              <span>
                <img src={arrowImg} alt="" />
              </span>

              <div className="login-popup">
               {user?"" :<div className="login-popup-signup">
                  <div>New User?</div>
                  <Link to={"./sign-up"}>
                    <span>Sign Up</span>
                  </Link>
                </div>}
                <List />
                {user !== null ? (
                  <div
                    onClick={() => handleLogout()}
                    className="login-popup-signup"
                  >
                    Logout
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <Link className="link" to={cartAccess}>
              {" "}
              <div
                onClick={() => handleRedirect()}
                className="cart-box login-box"
              >
                <div className="cart-icon">
                  <span>
                    <img src={cartImg} alt="" />
                  </span>
                </div>
                <div className="cart-text">Cart</div>
              </div>
            </Link>
            {/* <div className="seller-box login-box">
            <div className="store-icon"><span><img src={storeImg} alt="" /></span></div>
            <div className="store-text">Become a Seller</div>
          </div> */}
            {/* <div className="many-more-box login-box">
              <span>
                <img src={verticleDot} alt="" />
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
