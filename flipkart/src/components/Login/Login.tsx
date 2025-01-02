import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Login.css";
import { setUser } from "../../Redux/ActionCreator.ts";
const Login = () => {
  const [error, setError] = useState({
    inValid:"",
    username:"",
    password:""
  });
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.user);
  console.log(userLogin);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    if (error) {
      setError({
        ...error,
        inValid:"",
        username:"",
        password:""
      });
    }
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(formData.username === "" && formData.password === "" )return setError({
      ...error,
      inValid:"",
      username:"Username required",
      password:"Password required"
    })

    if(formData.username === "")return setError({
      ...error,
      inValid:"",
      username:"Username required",
      password:""
    })

    if(formData.password === "" )return setError({
      ...error,
      inValid:"",
      username:"",
      password:"Password required"
    })
    const dBData = JSON.parse(localStorage.getItem("user")!);
    console.log(formData, dBData);
    if (
      dBData.username == formData.username &&
      dBData.password == formData.password
    ) {
      dispatch(setUser(dBData));
      console.log(dBData, "data after set");

      console.log(userLogin, "after set user");
    }
    if (
      dBData.username !== formData.username ||
      dBData.password !== formData.password
    ) {
      setError({
        ...error,
        inValid:"Username or Password is incorrect!",
        username:"",
        password:""
      });
    }
  };

  return (
    <div className="login__container">
      <div className="login__container_left">
        <div className="login__content">
          <div className="login__content_upper">
            <h1>Login</h1>
            <p>Get access to your Orders,Wishlist and Recommendations</p>
          </div>
          <div className="login__content_lower">
            <img src="./images/login/login_img.png" alt="login-png" />
          </div>
        </div>
      </div>
      <div className="login__container_right">
        <p className={` ${error.inValid ? "invalidlogin" : "appearence-1"}`}>
          Username or Password is incorrect !
        </p>
        <div className="right__content">
          <form onSubmit={(e) => handleSubmit(e)}>
            <label  htmlFor="username"></label>
            
            <input
              onChange={(e) => {
                handleInputChange(e);
              }}
              name="username"
              className="login__input_field"
              id="username"
              type="text"
              placeholder="Enter Username"
              autoComplete="off"
            />
             <p className="red">{error.username}</p>
            <label className="appearence" htmlFor="password"></label>
            <input
              onChange={(e) => {
                handleInputChange(e);
              }}
              name="password"
              className="login__input_field"
              id="password"
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
            />
            <p className="red">{error.password}</p>
            <p>
              By continuing, You agree to Flikart's <span>Terms of use</span>{" "}
              and <span>privacy policy.</span>
            </p>
            <div className="button">
              <button id="login_button" type="submit">
                Login
              </button>
            </div>
          </form>
          <div className="sign_up">
            <Link to={"/sign-up"}>
              <span>New to Flipkart? Create an account</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
