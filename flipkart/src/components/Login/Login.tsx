import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import './Login.css'
import { setUser } from '../../Redux/ActionCreator.ts';
const Login = () => {
  const [error, setError] = useState<string>('');
  const dispatch = useDispatch();
    const userLogin = useSelector((state)=>state.user);
    console.log(userLogin)
  const [formData, setFormData] = useState({
    username:'',
    password:'',
  })
  
  const handleInputChange = (e) => {
    if(error){
      setError("");
    }
    const {name, value} = e.target;
    setFormData((prev)=>{
    return {
      ...prev,
      [name]:value,
    }
  })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    const dBData = JSON.parse(localStorage.getItem('user')!)
    console.log(formData,dBData)
    if(dBData.username == formData.username && dBData.password == formData.password){
      dispatch(setUser(dBData))
      console.log(dBData, "data after set")

      console.log(userLogin, "after set user")
    }
    if(dBData.username !== formData.username || dBData.password !== formData.password){
      setError(()=>{
         return "Username or Password is incorrect !"
      })
    }
  }

  return(
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
      <p className={error?"":"appearence"}>Username or Password is incorrect !</p>
        <div className="right__content">
          <form onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor="username"></label>
            <input onChange={(e)=>{handleInputChange(e)}} name='username' className='login__input_field' id='username' type="text" placeholder='Enter Username' autoComplete='off' />
            <label htmlFor="password"></label>
            <input onChange={(e)=>{handleInputChange(e)}} name='password' className='login__input_field' id='password' type="password" placeholder='Enter Password' autoComplete='off' />
            <p>By continuing, You agree to Flikart's <span>Terms of use</span> and <span>privacy policy.</span></p>
            <div className='button'>
            <button id='login_button' type="submit">Login</button>
            </div>
          </form>
          <div className="sign_up">
            <Link to={"/sign-up"} ><span>New to Flipkart? Create an account</span></Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login;