import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

// import { toast, ToastContainer } from 'react-toastify';

// axios.defaults.baseURL=`${DEV_BASE_URL}/${VERSION}/`

// axios.defaults.headers.common['Authorization']=localStorage.getItem("token")

// axios.interceptors.request.use(function (config) {
//   const token = localStorage.getItem("token");
//   if (token) {
//       config.headers['Authorization'] = token;
//   }
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });

// Add a response interceptor
// axios.interceptors.response.use(
//   function (response) {
    
//   return response;
// }, 
// function (error) { 
//   if(error.response.data.statusCode===401){
//     localStorage.removeItem("token")
//     window.location = '/login';
//   }
  // else{ 
  //   toast.error(error.response.data.message.split(":")[1], {
  //     position: toast.POSITION.TOP_CENTER,
  //     autoClose: 5000,
  //   });
  // }
  // return Promise.reject(error);
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  {/* <ToastContainer /> */}
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
