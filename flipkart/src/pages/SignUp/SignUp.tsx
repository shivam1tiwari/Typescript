import React,{useState} from 'react'
import './SignUp.css'
const SignUp = () => {
   const inputfields = ["username","password","confirm_password","email","address","pincode"] 
   const handleFocus =()=>{
    console.log("raju")
   }

   const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    address: '',
    pincode: '',
    gender: '',
  });

  const [error, setError] = useState({})

  //  Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
    setError({})
  };

  //Handle Gender Change 
  const handleGenderChange = (e) => {
    setFormData(prevData => ({
      ...prevData,
      gender: e.target.value,
    }));
  };
 
  const validation = () =>{
    const error = {}
    const emailValidation =   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isEmailValid = emailValidation.test(formData.email)
    inputfields.map((val)=>{
      if(!formData[val]){
         error[val] = `${val.slice(0, 1).toLocaleUpperCase() + val.slice(1)} required`
      } 
    })
      if(!formData["gender"]){
        error["gender"] = `Gender required` 
      }
      
      if(formData.password.length < 6 && formData.password !==""){
        error["password"] = `Password required min 6 character`
      }else if(formData.password.length >=6 ){
        // checking for lower, upper, digit , specialcharacter and space
        const checks = [ /[a-z]/,/[A-Z]/,/\d/,/[@.#$!%^&*.?]/,/^[^\s]*$/];
        const isValid = checks.every((val)=>val.test(formData.password));

        if(!isValid  ){
          error["password"] = `Password required special character`   
        }
      }

      if(formData.confirm_password !==formData.password){
        error["confirm_password"] = `Password not matched`
      }

      if((formData.email !== "")&&!isEmailValid){
        error["email"] = `Email is not valid`
      }

      if(formData.pincode.length < 6&&formData.pincode!==""){
        error["pincode"] = `Pincode  is not valid` 
      }

      return error;

  }

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault(); 
   const isValid =  validation();
   setError(isValid);
   if(Object.keys(isValid).length === 0){
    const user = {...formData,address:[formData.address]}
    localStorage.setItem("user",JSON.stringify(user));
    console.log("raahul")
   }
   
     
}
        
   
console.log(formData, error)
   

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
        <div className="right__content-1">
          <form onSubmit={(e)=>handleSubmit(e)}>
            {inputfields.map((inputfield,i)=><div key={i} >
            <label htmlFor="username">{error[inputfield] }</label>
            <input onChange={(e)=>handleInputChange(e)} className='common_input' name={inputfield} id={inputfield} type={((inputfield =="password")||(inputfield =="confirm_password"))?"password":"text"} placeholder={`Enter ${(inputfield.slice(0,1).toLocaleUpperCase() + inputfield.slice(1))}`} autoComplete={"off"} onFocus={()=>handleFocus()} />
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
            <div style={{color:"red"}}>{error["gender"]}</div>
            </div>
            <p>By continuing, You agree to Flikart's <span>Terms of use</span> and <span>privacy policy.</span></p>
            <div className='button'>
            <button id='sign_up_button' type="submit">Sign Up</button>
            </div>
          </form>
        
        </div>

      </div>
    </div>
  )
}

export default SignUp;