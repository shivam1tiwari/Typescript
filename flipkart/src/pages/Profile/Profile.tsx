import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css"
import List from "../../utils/List.tsx";


const Profile = ()=>{
  return(
    <div className="profile__container">
      <div className="profile__container__left">
        <div className="profile_head">
         <div className="profile_img" ><img src="./images/icon/profile-pic-male.svg" alt="" /></div>
         <div><h1>Hello,</h1></div>
        </div>
        <div className="profile_order">
          <Link className="link" to={'/orders'}><h4>ORDERS</h4></Link>
        </div>
      </div>
      <div className="profile__container__right">
        <h1>Personal Information</h1>
       <div className="profile_information">
        <div className="profile_name common-div"> <h5>Name : Shivam</h5></div>
        <div className="profile_email common-div"> <h5>Email : st@gmail.com</h5></div>
        <div className="profile_address common-div"> <h5>Address : Noida delgi Punjab</h5></div>
        <div className="profile_pincode common-div"> <h5>Pincode : 238838</h5></div>
        </div> 
        <div className="profile_faq">
              <h4>  FAQs </h4>
               <h5>What happens when I update my email address (or mobile number)?
               </h5> 
               <p> Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).
               </p>
              <h5>  When will my Flipkart account be updated with the new email address (or mobile number)?
              </h5>
               <p> It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.
               </p>
               <h5> What happens to my existing Flipkart account when I update my email address (or mobile number)?
               </h5>
              <p> Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.
              </p>
               <h5> Does my Seller account get affected when I update my email address?</h5>
               <p> Flipkart has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</p>

              <button >Deactivate Account</button> 
              <button>Delete Account</button> 
              <div className="profile_footer-img"><img src="/images/footer/myProfileFooter_4e9fe2.png" alt="" /></div> 
              
        </div>
      </div>
    </div>
  )
}

export default Profile;