
import React, { useState } from 'react'
import {Table,Button,Input} from 'antd'
import {EditOutlined,DeleteOutlined,MoreOutlined,BlockOutlined} from "@ant-design/icons"

const button_search = {
    "margin-top": "30px",
    "margin-bottom":"20px"
}
const add_button = {
    "background-color": "#797772",
    "color": "#111",
    "height":"50px",
    "margin-bottom": "20px",
    "border-radius": "5px",
    "font-size": "20px",
    "padding-bottom":"20px",
    "border":"1px solid #6e6859 "

}

const search_div = {
    "display":"flex"
}
const search_input = {
    "width": "30%",
    "margin-left": "5%",
    "padding": "10px",
    "border": "2px solid #6e6859 ",
    "color":"#111"
    
}
const search_btn = {
    "height": "50px",
    "border": "2px solid #6e6859 ",
    "margin-left": "5px",
    "border-radius": "5px",
    "font-size":"20px"
    
}
const CustomerTable =() =>{

  const [addform,setAddForm] =useState(false)

    const CustomerColumns =[
        {
            key:1,
            title:"CustomerId",
            dataIndex: "customerId",

        },
        {
            key:2,
            title:"First Name",
            dataIndex: "firstName",

        },
        {
            key:3,
            title:"Last Name",
            dataIndex: "lastName",

        },
        {
            key:4,
            title:"Email",
            dataIndex: "email",

        },
        {
            key:5,
            title:"Phone 1",
            dataIndex: "phone1",

        },
        {
            key:6,
            title:"Status",
            dataIndex: "status",

        },
        {
            key:7,
            title:"Actions",
            render:(record)=>{
                return(
                    <>
                      <Button style={{border:"2px solid #797772"}} icon ={<MoreOutlined />}> Details</Button>
                     <EditOutlined style={{ color: "blue", marginLeft: 10, fontSize: 18 }}  /> 
                        <DeleteOutlined style={{ color: "red", marginLeft: 10, fontSize: 18 }} />
                        <Button style={{border:"2px solid #797772",marginLeft:10}} icon ={<BlockOutlined />}>Change Status</Button>
                    </>
                )
            }

        }
    ]
const customerData  =[
    {
        customerId: 1,
        firstName: "abebe",
        lastName: "kebede",
        email: "abebe@gmail.com",
        phone1: "0955998652",
        status:"Active"
    },
    {
        customerId: 2,
        firstName: "alemu",
        lastName: "jemal",
        email: "alemu@gmail.com",
        phone1: "09654231",
        status:"Blocked"
    },
    {
        customerId: 3,
        firstName: "Mamushet",
        lastName: "kebede",
        email: "mamushet@gmail.com",
        phone1: "0966859445",
        status:"Active"
    },
    {
        customerId: 4,
        firstName: "tigst",
        lastName: "kebede",
        email: "tigst@gmail.com",
        phone1: "0922564235",
        status:"Active"
    },
    

    

]
const handleAddForm=()=>{
    setAddForm(true)
}

    return (
        <>
            <div style={button_search }>
            
            <div style={search_div}>
            <Input placeholder='Enter First Name or Last Name ' style={search_input} />
                <Button style={search_btn}> Search</Button>
               
            </div>
        
        </div>  
        <div className='form-div'>

        </div>
        <Table 
        dataSource={customerData}
        columns ={CustomerColumns}
        bordered="true"
        >

        </Table>
        </>
    )
}
export default CustomerTable;