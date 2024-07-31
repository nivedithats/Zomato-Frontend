import axios from 'axios';
import React, { useState } from 'react'
import { useAuth } from '../../hooks/AuthProvider';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email:"",
        password:""
    })


    const InputHandler = (e) =>{
        const [name, value] = e.target;

        setFormData({...formData, [name]:value})
    }

    const {login} = useAuth()

    const submitHanlder = (e) =>{
        axios.post('http://localhost:3005/api/user/login', {
            email:'test@gmail.com',
            password:')@3hdjhdAAkjdd'
        })
        .then((response) =>{
            console.log(response);
            console.log(response.data.data);
            console.log(response.data.token);
            login(response.data.token, response.data.data);
            navigate('/')
            
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
      <h1 className="fs-1">Login component</h1>

      <input type="text" name='email' onChange={InputHandler} value={formData.email} />
      <input type="text" name='password'onChange={InputHandler} value={formData.password} />
      <button onClick={submitHanlder}>Login</button>
    </div>
  )
}

export default Login
