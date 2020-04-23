import React, {useState} from 'react';
import "../assets/login.sass"
import mtb from '../assets/images/mtb.png'
import {
  faCheckCircle,
  faEnvelope,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Login = () => {

  //style
  const displayNone=`none`;
  const displayBlock=`block`;
  const signUpErrorText=['password do not match'];
  const logInErrorText=['Email doesn\'t exist !'];

   const [data,setData]=useState({logInDiv:true});

   const card=()=>{
     if (data.logInDiv){
       return (<div className="login">
         <div className="text-center mr-2 py-4">
           <img src={mtb} alt="MTB_logo" className=" mainLogo mt-4" />
         </div>
         <div className="login_title text-white-50 m-3 px-2 mt-5">
           <span>Login to your account</span>
         </div>
         <div className=" container-fluid p-0 m-0">
           <div className='login_fields row container-fluid m-0 my-2'>
             <div className='icon col-1 pl-2 align-self-center typeLogo'>
               <FontAwesomeIcon icon={faEnvelope} className="text-white-50" />
             </div>
             <input placeholder='Email' type='text' className="col text-white-50 px-2" />
             <div className='validation align-self-center'>
               <FontAwesomeIcon icon={faCheckCircle} className="text-success" style={{display:displayNone}}/>
             </div>
           </div>
           <div className='login_fields row container-fluid m-0 my-2'>
             <div className='icon col-1 pl-2 align-self-center typeLogo'>
               <FontAwesomeIcon icon={faLock} className="text-white-50" />
             </div>
             <input placeholder='Password' type='password' className="col text-white-50 px-2" />
             <div className='validation align-self-center'>
               <FontAwesomeIcon icon={faCheckCircle} className="text-success" style={{display:displayNone}}/>
             </div>
           </div>
         </div>
         <div className="container-fluid m-0 p-0 row ">
           <div className="col-7 text-danger font-weight-bold m-0 px-2">
             <p style={{display:displayNone}}>...{logInErrorText[0]}</p>
           </div>
           <div className="col forgot m-0 p-0 ml-3">
             <a href="#">Forgot Password?</a>
           </div>
         </div>
         <div className="login_fields__submit">
           <div className="text-center mt-5">
             <button type={"submit"} className="btn btn-outline-light px-5 m-2 mt-3">
               Log In
             </button>
             <button type={"submit"} onClick={()=>setData({logInDiv:false})}  className="btn btn-outline-light px-5 m-2 mt-3">
               Sign up
             </button>
           </div>
         </div>
       </div>)
     }
     else if (!data.logInDiv){
       return (<div className='login'>
         <div className="text-center mr-2 py-4">
           <img src={mtb} alt="MTB" className=" mainLogo mt-4" />
         </div>
         <div className='login_title text-white-50 m-3 px-2'>
           <span>Sign up for your New account</span>
         </div>
         <div className=' container-fluid p-0 m-0'>
           <div className='login_fields row container-fluid m-0 my-2'>
             <div className='icon col-1 pl-2 align-self-center typeLogo'>
               <FontAwesomeIcon icon={faUser} className="text-white-50" />
             </div>
             <input placeholder='FirstName' type='text' className="col text-white-50 px-2" />
             <div className='validation align-self-center'>
               <FontAwesomeIcon icon={faCheckCircle} className="text-success" style={{display:displayNone}}/>
             </div>
             <div className='icon col-1 ml-2 pl-2 align-self-center typeLogo' style={{borderLeft: "1px solid #7c828c"}}>
               <FontAwesomeIcon icon={faUser} className="text-white-50" />
             </div>
             <input placeholder='LastName' type='text' className="col text-white-50 px-2" />
             <div className='validation align-self-center'>
               <FontAwesomeIcon icon={faCheckCircle} className="text-success" style={{display:displayNone}}/>
             </div>
           </div>
           <div className='login_fields row container-fluid m-0 my-2'>
             <div className='icon col-1 pl-2 align-self-center typeLogo'>
               <FontAwesomeIcon icon={faEnvelope} className="text-white-50" />
             </div>
             <input placeholder='Email' type='text' className="col text-white-50 px-2" />
             <div className='validation align-self-center'>
               <FontAwesomeIcon icon={faCheckCircle} className="text-success" style={{display:displayNone}}/>
             </div>
           </div>
           <div className='login_fields row container-fluid m-0 my-2'>
             <div className='icon col-1 pl-2 align-self-center typeLogo'>
               <FontAwesomeIcon icon={faLock} className="text-white-50" />
             </div>
             <input placeholder='Password' type='password' className="col text-white-50 px-2" />
             <div className='validation align-self-center'>
               <FontAwesomeIcon icon={faCheckCircle} className="text-success" style={{display:displayNone}}/>
             </div>
           </div>
           <div className='login_fields row container-fluid m-0 '>
             <div className='icon col-1 pl-2 align-self-center typeLogo'>
               <FontAwesomeIcon icon={faLock} className="text-white-50" />
             </div>
             <input placeholder='Repeat Password' type='password' className="col text-white-50 px-2" />
             <div className='validation align-self-center'>
               <FontAwesomeIcon icon={faCheckCircle} className="text-success" style={{display:displayNone}}/>
             </div>
           </div>
           <div className="my-1" style={{height:"0.8rem"}}>
             <p className="px-2 text-danger" style={{fontSize:"1rem",display:displayNone}}>...{signUpErrorText[0]}</p>
           </div>
           <div className='login_fields__submit py-1'>
             <div className="text-center">
               <button type={"submit"} className="btn btn-outline-light px-5 m-2">
                 Sign up
               </button>
               <button type={"submit"} onClick={()=>setData({logInDiv:true})} className="btn btn-outline-light px-5 m-2">
                 Log In
               </button>
             </div>
           </div>
         </div>
       </div>)
     }
   };

  return(
    <div className="mainLoginDiv">
      {card()}
    </div>
  )

};

export default Login;