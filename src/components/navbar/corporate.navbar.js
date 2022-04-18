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

export const CorporateNavBar =()=>{



    return(
        <>
        <div className="logo" >
         <Link to ="/home">    <img src={logo2}  alt=""/>
                <h1>OIMS</h1>
         </Link>
           </div>
            
        <Menu  mode="inline" theme ="light" className="menu">
                <Menu.Item key="/home" className="menu-item" icon={<HomeOutlined style={ {color:"#fff",fontSize:20}}/>} >
            <Link to="supplierreg" className="menu-link" > sup reg</Link>
            </Menu.Item>
           <Menu.Item key="product" className="menu-item" icon ={<PlusCircleOutlined   style={ {color:"#fff",fontSize:20}}/>}>
            <Link to="/product"  className="menu-link" > Products</Link>
            </Menu.Item>
            <Menu.Item key="inventory" className="menu-item" icon ={<ShoppingCartOutlined  style={ {color:"#fff",fontSize:20}}/>}>
            <Link to="/inventory"  className="menu-link" > Inventory</Link>
            </Menu.Item>
            <Menu.Item key="order" className="menu-item" icon ={<CopyOutlined  style={ {color:"#fff",fontSize:20}}/>}>
            <Link to="/order"  className="menu-link" > Orders</Link>
            </Menu.Item>
        </Menu>
    </>
    )
}