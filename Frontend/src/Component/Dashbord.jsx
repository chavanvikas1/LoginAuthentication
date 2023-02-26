import React from 'react'
import {  useNavigate } from 'react-router-dom'

export default function Dashbord() {
    const navigate=useNavigate()
    const data=localStorage.getItem('token')
    const recivetoken=  window.atob(data.split(".")[1]);
    const token=JSON.parse(recivetoken);
    
    const logout=()=>{
    if(localStorage.getItem('token')){
        localStorage.removeItem('token')
        navigate("/Login2")
    }
    }
  
    
  return (
    <div>
        
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
              <div class="container">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" href="#" aria-current="page">Home <span class="visually-hidden">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownId">
                                <a class="dropdown-item" href="#">Action 1</a>
                                <a class="dropdown-item" href="#">Action 2</a>
                            </div>
                        </li>
                    </ul>
                    <form class="d-flex ">
                        <h4>{token.userName}</h4>
                        <button class="btn btn-outline-danger ms-3 " type="submit" onClick={logout}>logout</button>
                    </form>
                </div>
          </div>
        </nav>
        
    </div>
  )
}
