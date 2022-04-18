import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { checkTokenAsync } from '../../redux/actions/userAction'
import { AdminNavbar } from './admin.navbar'
import NavBarContainer from './navbar.container'
import { InventoryNavBar } from './inventoryManagaer.navbar'
import { CustomerNavBar } from './customer.navbar'
import { SupplierNavBar } from './supplier.navbar'
import { CorporateNavBar } from './corporate.navbar'

/**
* @author
* @function 
**/

 const Navbar = () => {
    const navigate= useNavigate()
    const currentUser=useSelector(state=> state.users.currentUser)

    const dispatch=useDispatch()

    useEffect(()=>{
    let token=localStorage.getItem('token')
    if(!token){
      navigate('/')
    }
    else {
      dispatch(checkTokenAsync(token))
    }
   
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[])
     console.log(currentUser)
  return(
<>

    {  
    !currentUser? <></>:
      currentUser.role=== "Admin"?
      <AdminNavbar/>:
      currentUser.role === "Inventory_Manager"?
      <InventoryNavBar/>:
      currentUser.role === "Supplier"?
      <SupplierNavBar/>:
      currentUser.role === "Customer"?
    <CustomerNavBar/>:
      currentUser.role === "Corporate_Manager"?
      <CorporateNavBar/>:
      <></>
      }
</>
   )

 }

 export default Navbar