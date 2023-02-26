
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import  Login  from './login/Login';


export default function ProtectedRoute({element}) {
  const navigate=useNavigate();
  let token = localStorage.getItem("token")
  let data;
  try {
    if(token){
      data=window.atob(token.split(".")[1])
    }
  } catch (error) {
    localStorage.removeItem("token")
    window.location.reload()
  }
  
useEffect(() => {
    
    if(!data){
      navigate("/Login2")
    }
    },[])

    if(!data){
    return <Login/>
    }
  return element
}




    
  