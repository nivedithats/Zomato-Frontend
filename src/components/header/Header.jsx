import React, { useState } from 'react'
import './style.css'
import { DropdownButton, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import PhoneInput, { PhoneNumber } from 'react-phone-number-input';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuth } from '../../hooks/AuthProvider';
import Mainbutton from '../../utils/buttons/mainBtn/Mainbutton';



function Header() {
  const [loginmodal,setloginmodal] = useState(false);
  const [createmodal,setcreatemodal]= useState(false);
  const [value, setValue] = useState();
  const [checked, setChecked] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    email:"",
    password:"",
    phonenumber:""
  })

  const inputHandler = (e) =>{
    const {name, value} = e.target;
    setFormData({...formData, [name]:value})
  }


  const open = () =>{
    setcreatemodal(false);
    setloginmodal(true)
  }
  const close = () =>{
    setloginmodal(false)
  }
  
  const submitHandler = async () =>{
    // try {
    //   const data = await axios.post('http://localhost:3005/api/user/register');
    //   toast.success(data.message)
    //   console.log(data);
    // } catch (error) {
    //     toast.error(error.message);
    // }

    axios.post('http://localhost:3005/api/user/register', formData)
    .then((res)=>{
      // toast.success(res.message)
      console.log(res);
    })
    .catch((err)=>{
      // toast.error(err.message
      console.log(err);
    })
  }

  const {isAuthenticated, logout, user} = useAuth()

  return (
    <div className='nav justify-content-between'>
      
        <h3>Get the App</h3>
        <ul className='nav gap-3'>
            <li><a href="#" className='nav-link'>Investor Relation</a></li>
            <li><a href="#" className='nav-link'>Add Restaurant</a></li>
            <li><Mainbutton func={logout} label="lagout"/></li>
           {
            isAuthenticated?(
              
             <div className='d-flex align-items-center  gap-3'>
             {
              user.email || null
             }
             <div className="profile">
              {user.username[0] || null}
             </div>
             </div>
            ):(
              <>
               <li><a href="#" className='nav-link' onClick={open}>Login</a></li>
            <li><a href="#" className='nav-link' onClick={()=> {
              setloginmodal(false)
              setcreatemodal(true)
            }}>Sign up</a></li>
              </>
            )
           }
        </ul>

        <Modal show={loginmodal} onHide = {close} centered>
         < Modal.Header closeButton>
         <Modal.Title>Login</Modal.Title>
         </Modal.Header>
         <Modal.Body>
          <div className="p-3 ">
            
         <PhoneInput 
               placeholder="Enter phone number"
               value={value}
                onChange={setValue}/>
                </div>

         {/* <input type="text" placeholder='username' className='from-control'/> */}
         <button className='btn btn-danger w-100 f-1 p-2'>Send  One Time Password</button>
         <div className="div"></div>

         <button className='btn border border-secondary w-100 p-2 d-flex gap-3 align-items-center justify-content-center'><img src="https://cdn-icons-png.flaticon.com/128/15047/15047587.png" alt="" width="25"/>Continue with Email</button>
        
         <button className='btn border border-secondary w-100 p-2 mt-4 align-items-center justify-content-center  d-flex gap-3'><img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="" width="25"/>Sign in with Google</button>

    

          <div className="div1"></div>
          <p className='f-4 my-2 p-1'>New to Zomato? <Link className='text-danger' onClick={()=> {
              setloginmodal(false)
              setcreatemodal(true)
            }}> Create account</Link></p>

         </Modal.Body>
         </Modal>


         <Modal show={createmodal} onHide = {()=>setcreatemodal(false)} centered>
         < Modal.Header closeButton>
         <Modal.Title>Sign Up</Modal.Title>
         </Modal.Header>
         <Modal.Body>
         <input type="text" placeholder='Full Name' name='username' className='form-control mt-2' value={formData.username}  onChange={inputHandler}/>
         <input type="text" placeholder='Email' name='email' className='form-control  mt-2 '  value={formData.email} onChange={inputHandler}/>
         <input type="tel" minLength={10} maxLength={13} name='phonenumber' placeholder='phonenumber' className='form-control mt-2' value={formData.phonenumber}  onChange={inputHandler}/> 

         <input type="password" minLength={10} maxLength={13} name='password' placeholder='Create password' className='form-control mt-2'  value={formData.password} onChange={inputHandler}/>

          <div className="cheker d-flex align-items-center justify-content-center mt-3 gap-2">
          <input type="checkbox" className='mb-4' onClick={()=>setChecked(!checked)}/>
          <p>I agree to Zomato's <span className='text-danger'> Terms of Service, Privacy Policy</span> and <span className='text-danger'>Content Policies</span></p>

          </div>

            
        <button className={`btn btn-${checked?'dark':'danger'} w-100 p-2 mt-4`} onClick={submitHandler}>Create account</button>
        <div className="div"></div>

        <button className='btn border border-secondary w-100 p-2 mt-4 align-items-center justify-content-center  d-flex gap-3'><img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="" width="25"/>Sign in with Google</button>
        <div className="div1"></div>
        <p className='f-4 my-3 p-1'>Already have an account?<span onClick={open}  className='text-danger btn' > Login</span> </p>
  
         </Modal.Body>
         </Modal>
    </div>
  )
}

export default Header