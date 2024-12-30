import React from 'react'
import './Contact.css'
const Contact = () => {
   const handleFocus =()=>{
    console.log("raju")
   }

  return(
    <div className="contact__container">
      <div className="contact__container_left">
        <div className="contact__content">
          <div className="contact__content_upper">
            <h1>Welcome! We’d love to hear from you.</h1>
            <p>If you have any questions, suggestions, or feedback, please feel free to get in touch. We're here to assist you! </p>
            </div>
          <div className="contact__content_lower">
            <img src="./images/login/login_img.png" alt="login-png" />
          </div>
        </div>
      </div>
      <div className="contact__container_right">
        <div className="right__content">
          <form action="">
            <div>
            <label htmlFor="username"></label>
            <input className='common_input' id='username' type="text" placeholder='Enter Name' autoComplete={"off"} />
            </div>
            <div>
            <label htmlFor="email"></label>
            <input className='common_input' id='email' type="text" placeholder='Enter Email' autoComplete="off"/>
            </div>
            <div>
            <label htmlFor="address"></label>
            <textarea className='common_input' id='address' cols={50} rows={20} placeholder='Write message...' autoComplete="off"/>
            </div>
            <p>By contact us, You agree to Flikart's <span>Terms of use</span> and <span>privacy policy.</span></p>
            <div className='button'>
            <button id='contact_button' type="submit">Contact Us</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact;