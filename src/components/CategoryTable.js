
import React from 'react'
import {Table} from 'antd'
import {EditOutlined,DeleteOutlined} from "@ant-design/icons"

const CategoryTable =() =>{



    const CategoryColumns =[
        {
            key:1,
            title:"Category Id",
            dataIndex: "categoryId",

        },
        {
            key:2,
            title:"Category Name",
            dataIndex: "categoryName",

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
const categoryData  =[
    {
        categoryId:1,
        categoryName:"laptop"
    },
    {
        categoryId:2,
        categoryName:"desktop"
    },
    {
        categoryId:3,
        categoryName:"furniture"
    },
    {
        categoryId:4,
        categoryName:"table"
    },
    

    

]

    return (
        <>
        <Table 
        dataSource={categoryData}
        columns ={CategoryColumns}
        bordered="true"
        >

        </Table>
        </>
    )
}
export default CategoryTable;