import React, { use, useEffect,useState } from "react";
import { Link, } from "react-router-dom";
import "./Profile.css"
import { useSelector, UseSelector } from "react-redux";
import List from "../../utils/List.tsx";

const Profile = ()=>{

  const [userInfo, setUserInfo] = useState(null);
  const  [isEdit, setIsEdit] = useState({
    personel:false,
    email:false,
    mobile:false,
  })
 const [newAddress, setNewAddress] = useState(false)
  const user = useSelector((state)=>state.user);
 
  useEffect(()=>{
  
    const user = JSON.parse(localStorage.getItem('userLogin')!);
    setUserInfo({...user})
  
  },[])

  const handleEdit = (e) =>{
       const edit = e.target.dataset.id;
       setIsEdit({
        ...isEdit,[edit]:!isEdit[edit]
       })
  }

  const handleOnClickManageAddr = () =>{
    setNewAddress(true)
  }
  const handleInformation = () =>{
    setNewAddress(false)
  }
  return(

    <div className="profile__container">
      <div className="profile__container__left">
        <div className="profile_head">
         <div className="profile_img" ><img src="./images/icon/profile-pic-male.svg" alt="" /></div>
         <div><h1>Hello,</h1></div>
        </div>
        <div className="profile_order">
          <Link className="link" to={'/orders'}><h4>MY ORDERS</h4></Link>
        </div>
        <div className="profile_order">
          <h4>ACCOUNT SETTING</h4>
          <p onClick={()=>handleInformation()}>Profile Information</p>
          <p onClick={()=>handleOnClickManageAddr()}>Manage Addresses</p>
        </div>
        
        
      </div>
      <div className="profile__container__right">
       { newAddress?
        ( <div className="manage__addresses">
          <h4 >Manage Addresses</h4>
          <div className="add_address__box adrs_style">
            <p>+ ADD A NEW ADDRESS</p>
          </div>
          <div className="old_address_box adrs_style">
            <p>Shivam <span>7754955432</span></p>
            <p>address</p>
          </div>
          </div> ):
      <>
         <div>
        <h1>Personal Information <span data-id={"personel"} onClick={(e)=>handleEdit(e)}>{!isEdit.personel?"Edit":"Cancel"}</span></h1>
        </div>
        <div></div>
       <div className="profile_information">
        <div className="profile_name common-div">
        <div className="profile_name border_class"> <input className={`${!isEdit.personel?"visible":""}`} type="text" /></div>
        <div className="profile_name border_class" > <input className={`${!isEdit.personel?"visible":""}`} type="text" /></div> 
        <button className={`${!isEdit.personel?"visible":""}`} >SAVE</button> 
        </div>
         
        <div className="profile_gender common-div">
          <p>Your Gender</p>
          <label htmlFor=""><input  disabled={!isEdit.personel} name="gender" type="radio" />Male</label>
          <label htmlFor=""><input disabled ={!isEdit.personel} name="gender" type="radio" />Female</label>
        </div>
        <div className="profile_email common-div">
          <div>
          <p>Email Address <span data-id={"email"} onClick={(e)=>handleEdit(e)} >{!isEdit.email?"Edit":"Cancel"}</span></p>
          </div>
          <div className="email_1">
          <div className=" border_class"><input className={`${!isEdit.email?"visible":""}`} type="text" /></div>
          <button className={`${!isEdit.email?"visible":""}`}>SAVE</button>
          </div>
        </div>
        <div className="profile_mobile common-div">
          <div>
          <p>Mobile Number <span data-id={"mobile"} onClick={(e)=>handleEdit(e)}>{!isEdit.mobile?"Edit":"Cancel"}</span> </p>
          </div>
          <div className="email_1">
          <div className=" border_class  ">
          <input className={`${!isEdit.mobile?"visible":""}`} type="text" />
          </div>
          <button className={`${!isEdit.mobile?"visible":""}`}>SAVE</button>
          </div>
          
        </div>
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
              
        </div> </>}
      </div>
      {/* nice */}
    </div>
  )
}

export default Profile;