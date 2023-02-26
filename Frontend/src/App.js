
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";

import PageNotFound from './PageNotFound';
import Ragister from './login/Ragister'
import Login from "./login/Login"
import Dashbord from './Component/Dashbord';
import ProtectedRoute from './ProtectedRoute';
function App() {
  let userLogin= localStorage.getItem("token")
  
  return (
   <BrowserRouter >
     
      <Routes>
      <Route path='/' element={<Navigate to="/Login" />}/>
<Route path='/Login' element={<Ragister/>}/>
      
<Route path='/Login2' element={<ProtectedRoute element={<Login/>}/> }/>
<Route path='/Dashbord' element={<ProtectedRoute element={<Dashbord/>}/>}/>
     
    {/* page not found */}
       {/* <Route path='*' element={<PageNotFound/>}/> */}
     </Routes>
   </BrowserRouter>
  );
}

export default App;
