import React from "react";
import  {Menu} from 'antd'
import {Link} from 'react-router-dom'
import {
    HomeOutlined,
    ShoppingCartOutlined,
    PlusCircleOutlined,
    CopyOutlined 
} from '@ant-design/icons'
import './sideBar.css'
import logo2 from '../../images/logo2.png'

export const SupplierNavBar =()=>{



    return(
        <>
        <div className="logo" >
         <Link to ="/home">    <img src={logo2}  alt=""/>
                <h1>OIMS</h1>
         </Link>
           </div>
            
        <Menu  mode="inline" theme ="light" className="menu">
            
        
            <Menu.Item key="supplier-order" className="menu-item" icon ={<CopyOutlined  style={ {color:"#fff",fontSize:20}}/>}>
            <Link to="/supplier-order"  className="menu-link" > Orders</Link>
            </Menu.Item>
        </Menu>
    </>
    )
}