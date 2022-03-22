
import React from 'react'
import {Table,Button,Input} from 'antd'
import {
    EditOutlined,
    DeleteOutlined,
    MoreOutlined,
    BlockOutlined 
} from "@ant-design/icons"

const button_search = {
    "margin-top": "30px",
    "margin-bottom":"20px"
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
const SupplierTable =() =>{



    const SupplierColumns =[
        {
            key:1,
            title:"Supplier ID",
            dataIndex: "supplierId",

        },
        {
            key:2,
            title:"Supplier Name",
            dataIndex: "supplierName",

        },
        {
            key:3,
            title:"Email",
            dataIndex: "email",

        },
        {
            key:4,
            title:"Phone 1",
            dataIndex: "phone1",

        },
      
        {
            key:5,
            title:"User Name",
            dataIndex: "userName",

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
const supplierData  =[
    {
        supplierId:1,
        supplierName: "Abebe Trading",
        phone1: "0955986083",
        email: "uppert83@gmail.com",
        userName: "uppert",
        status:"Active"
        
    },
    {
        supplierId:2,
        supplierName: "Jemall tradding",
        phone1: "0910858585",
        email: "jemal83@gmail.com",
        userName: "jemal",
        status:"Blocked"
    },
    {
        supplierId:3,
        supplierName: "Worash tech",
        phone1: "0922865193",
        email: "worash83@gmail.com",
        userName: "worash",
        status:"Active"
    },
  
 

]

    return (
        <>
            <div style={button_search }>
            
                <div style={search_div}>
                <Input placeholder='Enter Supplier Name ' style={search_input} />
                    <Button style={search_btn}> Search</Button>
                   
                </div>
            
            </div>  

        <Table 
        dataSource={supplierData}
        columns ={SupplierColumns}
        bordered="true"
        >

        </Table>
        </>
    )
}
export default SupplierTable;