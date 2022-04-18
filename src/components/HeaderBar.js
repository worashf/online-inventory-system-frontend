import React from "react";
import {Row,Col,Menu,Dropdown} from  'antd';
 import {UserOutlined, LogoutOutlined } from "@ant-design/icons"
 import { useNavigate } from "react-router-dom";



export const HeaderBar =()=>{

 const navigate = useNavigate();
 const handleLogOut =()=>{
 localStorage.removeItem("token");
 navigate("/")
 }
    const menu = (
        <Menu >
          <Menu.Item key="1" icon={<LogoutOutlined  style={{fontSize:20}}/>}>
             <a onClick={handleLogOut}> Logout </a>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            2nd menu item
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            3rd menu item
          </Menu.Item>
        </Menu>
      );
    return(
        <>
        <Row>
        <Col span ={16}>
            <h1 style={{color :"#fff",fontSize:30,fontFamily:"cursive"}}> Online Inventory Management System</h1>

        </Col>
        <Col span ={8}>
        <Dropdown.Button overlay={menu} placement="bottom"  icon={<UserOutlined  style={{fontSize:20}}/>}>
          
         </Dropdown.Button>
     
        </Col>
        </Row>

        </>
    )
}