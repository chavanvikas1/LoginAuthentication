import axios from 'axios'
import React, { useState } from 'react'

export default function Ragister() {
  const [username,setuserName]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')


  const postData=async(e)=>{
    e.preventDefault()
  const {data}=await axios.post(`http://localhost:5000/create`,{username,email,password})
  console.log(data);
  
  }
  
  
  return (
    <div>

        <div className='row'>
             <div className="col-sm-6 offset-sm-3">
                <div className="card">
                    <div className="card-header">Ragister Here</div>
                    <div className="card-body">
                        <form  onSubmit={postData}>
                            <input type="text" className='form-control ' placeholder='Enter your name' onChange={(e)=>setuserName(e.target.value)}/>
                            <br />
                            <input type="text" className='form-control ' placeholder='Enter Your Email' onChange={(e)=>setemail(e.target.value)}/>
                            <br />
                            <input type="text" className='form-control ' placeholder='Create your password' onChange={(e)=>setpassword(e.target.value)}/>
                            <br />
                            <button className='btn btn-outline-success' type='submit'>Sign Up</button>
                        </form>
                          <span>Already have an Accont ! </span> <a href="./Login2">Sign In !</a>
                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}
