
import './App.css';
import AddProduct from './pages/Admin/Product/AddProduct/AddProduct';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';
import DashBoard from './pages/Admin/DashBoard/DashBoard';
import React from "react";
import ProductDetails from './pages/Admin/Product/ProductDetails/ProductDetails';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ViewPage from './pages/Products/SingleCakeView';
const id = "6648a13117df80873b1d3312"
function App() {
  return (
  
      <>
          {/* <Routes>
          <Route path="/" element={<><MainDash/><RightSide/></>} /> 
            <Route path="/DashBoard" element={<><DashBoard/></>} /> 
            <Route path="/Orders" element={<></>} />  
            <Route path="/AddProduct" element={<><AddProduct/></>} />  
            <Route path="/prouductDeatiels" element={<><ProductDetails/></>} /> 
             </Routes> */}
             <ViewPage path="/cake/:cakeId" userData={id} component={ViewPage}/>

          </>
   
  );
}

export default App;
