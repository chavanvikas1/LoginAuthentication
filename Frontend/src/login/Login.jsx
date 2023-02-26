import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

const navigate=useNavigate()
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')


  const postData=async(e)=>{
    e.preventDefault()
  const {data}=await axios.post(`http://localhost:5000/userLogin`,{email,password})
                       navigate("/Dashbord")                       
  localStorage.setItem('token',data.data)
  alert("Login successfull")
  }
 
  return (
    <div>
       <div className='row'>
             <div className="col-sm-6 offset-sm-3">
                <div className="card">
                    <div className="card-header">Login Here</div>
                    <div className="card-body " >
                        <form  onSubmit={postData}>
                    
                            <input type="text" className='form-control ' placeholder='Enter Your Email' onChange={(e)=>setemail(e.target.value)}/>
                            <br />
                            <input type="text" className='form-control ' placeholder='Create your password' onChange={(e)=>setpassword(e.target.value)}/>
                            <br />

                            <button className='btn btn-outline-success' type='submit'>Sign In</button>
                        </form>
                          <div><span>Don,t have an Accont ! </span> <a href="./Login">Sign Up !</a></div>
                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}
