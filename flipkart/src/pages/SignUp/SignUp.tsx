import React,{useState} from 'react'
import './SignUp.css'
const SignUp = () => {
   const inputfeilds = ["username","password","confirm_password","email","address","pincode"] 
   const handleFocus =()=>{
    console.log("raju")
   }

   const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    pincode: '',
    gender: '',
  });

  //  Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  //Handle Gender Change 
  const handleGenderChange = (e) => {
    setFormData(prevData => ({
      ...prevData,
      gender: e.target.value,
    }));
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(formData); 
    localStorage.setItem("user",JSON.stringify(formData))
   
  };

  return(
    <div className="sign_up__container">
      <div className="sign_up__container_left">
        <div className="sign_up__content">
          <div className="sign_up__content_upper">
            <h1>Looks like you're new here!</h1>
            <p>Sign up with your mobile number to get started </p>
            </div>
          <div className="sign_up__content_lower">
            <img src="./images/login/login_img.png" alt="login-png" />
          </div>
        </div>
      </div>
      <div className="sign_up__container_right">
        <div className="right__content">
          <form onSubmit={(e)=>{handleSubmit(e)}}>
            {inputfeilds.map((inputfeild,i)=><div key={i} >
            <label htmlFor="username"></label>
            <input onChange={(e)=>handleInputChange(e)} className='common_input' name={inputfeild} id={inputfeild} type={(inputfeild!="password"||(inputfeild!="confirm_password"))?"text":"password"} placeholder={`Enter ${(inputfeild.slice(0,1).toLocaleUpperCase() + inputfeild.slice(1))}`} autoComplete={"off"} onFocus={()=>handleFocus()} />
            </div>)}
            {/* <div>
            <label htmlFor="username"></label>
            <input className='common_input' id='username' type="text" placeholder='Enter Username' autoComplete={"off"} onFocus={()=>handleFocus()} />
            </div>
            <div>
            <label htmlFor="password"></label>
            <input className='common_input' id='password' type="password" placeholder='Enter Your Email' />
            </div>
            <div>
            <label htmlFor="confirmpassword"></label>
            <input className='common_input' id='confirmpassword' type="password" placeholder='Confirm Password' autoComplete='false'/>
            </div>
            <div>
            <label htmlFor="email"></label>
            <input className='common_input' id='email' type="text" placeholder='Enter Email' autoComplete="off"/>
            </div>
            <div>
            <label htmlFor="address"></label>
            <input className='common_input' id='address' type="text" placeholder='Enter Address' autoComplete="off"/>
            </div>
            <div>
            <label htmlFor="pincode"></label>
            <input className='common_input' id='pincode' type="number" min={100000} max={999999}placeholder='Enter Pincode' autoComplete="off"/>
            </div> */}
            <div  className='gender_box'>
            <div className='gender'>
            <label htmlFor="gender">Male</label>
            <input onChange={(e)=>handleGenderChange(e)} id='gender' type="radio" name='gender' value={"male"}/>
            </div>
            <div className='gender'>
            <label htmlFor="gender">Female</label>
            <input onChange={(e)=>handleGenderChange(e)} id='gender' type="radio" name='gender' value={"female"}/>
            </div>
            </div>
            <p>By continuing, You agree to Flikart's <span>Terms of use</span> and <span>privacy policy.</span></p>
            <div className='button'>
            <button id='sign_up_button' type="submit">Sign Up</button>
            </div>
          </form>
          <div className="sign_up">
            <span>New to Flipkart? Create an account</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SignUp;