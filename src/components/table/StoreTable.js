
import React from 'react'
import {Table,Button,Input} from 'antd'
import {EditOutlined,DeleteOutlined} from "@ant-design/icons"

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
const StoreTable =() =>{



    const StoreColumns =[
        {
            key:1,
            title:"Store ID",
            dataIndex: "storeId",

        },
        {
            key:2,
            title:"Store Name",
            dataIndex: "storeName",

        },
        {
            key:3,
            title:"Actions",
            render:(record)=>{
                return(
                    <>
                    <Button style={{background:"#797772",color:"#fff",fontSize:15}}> Add Store Address</Button>
                     <EditOutlined style={{ color: "blue", marginLeft: 10, fontSize: 18 }}  /> 
                  <DeleteOutlined style={{ color: "red", marginLeft: 10, fontSize: 18 }} />
                    </>
                )
            }

        }
    ]
const storeData  =[
    {
        storeId:1,
        storeName:"Used Electronis Store"
    },
    {
        storeId:2,
        storeName:"New Electronics Store"
    },
    {
        storeId:3,
        storeName:"New Furniture Store"
    },
    {
        storeId:4,
        storeName:"Used Furniture Store"
    },
    

    

]

    return (
        <>
            <div style={button_search }>
                <Button size ="large" style={add_button}>Add Store</Button>
                <div style={search_div}>
                <Input placeholder='Enter store Name ' style={search_input} />
                <Button  style={search_btn}> Search</Button>
                </div>
            
            </div>  

        <Table 
        dataSource={storeData}
        columns ={StoreColumns}
        bordered="true"
        >

        </Table>
        </>
    )
}
export default StoreTable;