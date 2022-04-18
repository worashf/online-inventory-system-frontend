
import React from 'react'
import {Menu } from 'antd'
import { Link } from 'react-router-dom';

import {
    HomeOutlined, AlibabaOutlined,
    SafetyCertificateOutlined,
    ClockCircleOutlined,
    CheckSquareOutlined,
    BookOutlined,
    CarryOutOutlined,
    AppstoreOutlined,
 
} from '@ant-design/icons'
import logo2 from '../../images/logo2.png'
/**
* @author
* @function 
**/

export const AdminNavbar  = () => {
  return(
      <>
      
      <div className="logo" >
         <Link to ="/home">    <img src={logo2}  alt=""/>
                <h1>OIMS</h1>
         </Link>
           </div>
 <Menu  mode="inline" theme ="light" className="menu">

<Menu.Item key="company" className="menu-item" icon ={<AlibabaOutlined style={ {color:"#fff",fontSize:30}} />}>
<Link to="/company"  className="menu-link" >Company</Link>
</Menu.Item>
<Menu.Item key="Category" className="menu-item" icon ={<SafetyCertificateOutlined  style={ {color:"#fff",fontSize:20}}/>}>
<Link to="/Category"  className="menu-link" >Categories</Link>
</Menu.Item>
<Menu.Item key="brand" className="menu-item" icon ={<ClockCircleOutlined  style={ {color:"#fff",fontSize:20}}/> }>
<Link to="/brand"  className="menu-link" > Brands</Link>
    </Menu.Item>
    <Menu.Item key="store" className="menu-item" icon ={<AppstoreOutlined   style={ {color:"#fff",fontSize:20}}/> }>
<Link to="/store"  className="menu-link" > Store</Link>
</Menu.Item>
<Menu.Item key="supplier" className="menu-item" icon ={<CheckSquareOutlined style={ {color:"#fff",fontSize:20}}/>}>
<Link to="/supplier"  className="menu-link"> Suppliers</Link>
</Menu.Item>
<Menu.Item key="customer" className="menu-item" icon ={<BookOutlined style={ {color:"#fff",fontSize:20}}/>}>
<Link to="/customer"  className="menu-link" > Customers</Link>
</Menu.Item>
<Menu.Item key="user" className="menu-item" icon ={<CarryOutOutlined  style={ {color:"#fff",fontSize:20}}/>}>
<Link to="/user"  className="menu-link" > Users</Link>
</Menu.Item>
    </Menu>
    </>
   )

 }