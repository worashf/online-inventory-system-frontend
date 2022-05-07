import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {listCategories} from './redux/actions/categoryAction'
import { listSuppliers } from './redux/actions/supplierActions';
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
import ProductPage from './pages/ProductPage';
import InventoryPage from './pages/InventoryPage';
import Login from './pages/login';
import Signup from './pages/signUp';
import SupplierOrderPage from './pages/supplierOrderPage';
import SuppliedProductPage from './pages/suppliedProductPage'
import TransferInventoryPage from './pages/TransferInventoryPage';
import  {  BrowserRouter as Router,
  Routes,
  Route,
 
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
    dispatch(listSuppliers());
  },[dispatch])

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Login/>}>
         
         </Route>
          <Route path="/home" element={<SupplierRegistration/>}>
         
          </Route>
          <Route path="/signup" element={<Signup/>}>
         
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
         <Route path="/product" element={<ProductPage/>}>
         
         </Route>
         <Route path="/inventory" element={<InventoryPage/>}>
         
         </Route>
         <Route path="/supplier-order" element={<SupplierOrderPage/>}>
         
         </Route>
         <Route path="/supplied-product" element={<SuppliedProductPage/>}>
         
         </Route>
         <Route path="/inventory-transfer" element={<TransferInventoryPage/>}>
         
         </Route>
          </Routes>


      </Router>
    </div>
  );
}

export default App;
