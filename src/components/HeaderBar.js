import React from "react";
import {Row,Col,Avatar} from  'antd';
 import {UserOutlined} from "@ant-design/icons"



export const HeaderBar =()=>{


    return(
        <>
        <Row>
        <Col span ={16}>
            <h1 style={{color :"#fff",fontSize:30,fontFamily:"cursive"}}> Online Inventory Management System</h1>

        </Col>
        <Col span ={8}>
        <Avatar size={64} icon={<UserOutlined />} />
        </Col>
        </Row>

        </>
    )
}