
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
const BrandTable =() =>{



    const BrandColumns =[
        {
            key:1,
            title:"Brand ID",
            dataIndex: "brandId",

        },
        {
            key:2,
            title:"Brand Name",
            dataIndex: "brandName",

        },
        {
            key:3,
            title:"Actions",
            render:(record)=>{
                return(
                    <>
                     <EditOutlined style={{ color: "blue", marginLeft: 10, fontSize: 18 }}  /> 
                  <DeleteOutlined style={{ color: "red", marginLeft: 10, fontSize: 18 }} />
                    </>
                )
            }

        }
    ]
const brandData  =[
    {
        brandId:1,
        brandName:"HP"
    },
    {
        brandId:2,
        brandName:"Dell"
    },
    {
        brandId:3,
        brandName:"Accer"
    },
    {
        brandId:4,
        brandName:"Apple"
    },
    

    

]

    return (
        <>
            <div style={button_search }>
                <Button size ="large" style={add_button}>Add Brand</Button>
                <div style={search_div}>
                <Input placeholder='Enter Brand Name ' style={search_input} />
                <Button  style={search_btn}> Search</Button>
                </div>
            
            </div>  

        <Table 
        dataSource={brandData}
        columns ={BrandColumns}
        bordered="true"
        >

        </Table>
        </>
    )
}
export default BrandTable;