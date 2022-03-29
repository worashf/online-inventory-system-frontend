import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {listCategories} from './redux/actions/categoryAction'
import './App.css';
import 'antd/dist/antd.css'
import CategoryPage from './pages/CategoryPage';
import BrandPage from './pages/BrandPage'
import StorePage from './pages/StorePage';
import SupplierPage from './pages/SupplierPage';
import CustomerPage from './pages/CustomerPage';
import  UserPage from  './pages/UserPage'
import CompanyPage from './pages/CompanyPage';
import SupplierRegistration from './pages/SupplierRegistration';
import OrderPage from './pages/OrderPage';
import  {  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

const catData = [{
  categoryId: 1,
  categoryName: "laptop"
},
{
  categoryId: 2,
  categoryName: "desktop"
},
{
  categoryId: 3,
  categoryName: "furniture"
},
{
  categoryId: 4,
  categoryName: "table"
}]



function App() {

  const dispatch = useDispatch();

 
  useEffect(() => {
    dispatch(listCategories(catData))
  },[dispatch])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SupplierRegistration/>}>
         
          </Route>
          <Route path="/category" element={<CategoryPage/>}>
         
         </Route>
          <Route path="/brand" element={<BrandPage/>}>
         
          </Route>
          <Route path="/store" element={<StorePage/>}>
         
         </Route>
        
         <Route path="/supplier" element={<SupplierPage/>}>
         
         </Route>
         <Route path="/customer" element={<CustomerPage/>}>
         
         </Route>
         <Route path="/user" element={<UserPage/>}>
         
         </Route>
         <Route path="/company" element={<CompanyPage/>}>
         
         </Route>
         <Route path="/order" element={<OrderPage/>}>
         
         </Route>
          </Routes>


      </Router>
    </div>
  );
}

export default App;
