
import React, { useState } from 'react'
import { Table, Button, Input } from 'antd'
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import Modal from 'antd/lib/modal/Modal'

const button_search = {
    "margin-top": "30px",
    "margin-bottom": "20px"
}
const add_button = {
    "background-color": "#797772",
    "color": "#111",
    "height": "50px",
    "margin-bottom": "20px",
    "border-radius": "5px",
    "font-size": "20px",
    "padding-bottom": "20px",
    "border": "1px solid #6e6859 "

}

const search_div = {
    "display": "flex"
}
const search_input = {
    "width": "30%",
    "margin-left": "5%",
    "padding": "10px",
    "border": "2px solid #6e6859 ",
    "color": "#111"

}
const search_btn = {
    "height": "50px",
    "border": "2px solid #6e6859 ",
    "margin-left": "5px",
    "border-radius": "5px",
    "font-size": "20px"

}
const CategoryTable = () => {


    const [isAdd, setIsAdd] = useState(false);

  const[categoryId, setCategoryId] =useState("")
  const[categoryName, setCategoryName] =useState("")



    const [categoryData, setCategoryData] = useState([
        {
            categoryId: 1,
            categoryName: "laptop"
        },
        {
            categoryId: 2,
            categoryName: "desktop"
        },
        {
            categoryId: 3,
            categoryName: "furniture"
        },
        {
            categoryId: 4,
            categoryName: "table"
        }
    ])

    const CategoryColumns = [
        {
            key: 1,
            title: "Category Id",
            dataIndex: "categoryId",

        },
        {
            key: 2,
            title: "Category Name",
            dataIndex: "categoryName",

        },
        {
            key: 3,
            title: "Actions",
            render: (record) => {
                return (
                    <>
                        <EditOutlined style={{ color: "blue", marginLeft: 10, fontSize: 18 }} />
                        <DeleteOutlined style={{ color: "red", marginLeft: 10, fontSize: 18 }} />
                    </>
                )
            }

        }
    ]


    const addCategory = () => {
        setIsAdd(true)
    }
    
    const resetAdding = () => {
        setIsAdd(false)

    }
    const handleChange =(e)=>{
       
            // const [name,value] =e.target;
            // setNewCategory((newCategory)=>({...newCategory,name:value}))
    }

    return (
        <>
            <div style={button_search}>
                <Button size="large" style={add_button} onClick={addCategory}>Add Category</Button>
                <div style={search_div}>
                    <Input placeholder='Enter Category Name ' style={search_input} />
                    <Button style={search_btn}> Search</Button>
                </div>

            </div>

            <Table
                dataSource={categoryData}
                columns={CategoryColumns}
                bordered="true"
            >

            </Table>


            <Modal
                title="Add New Category"
                okText="Save"
                visible={isAdd}
                onCancel={resetAdding}
                // onOk={ (newCategory)=>{
                //     const newCategories = [...categoryData, newCategory]
                //     setCategoryData(newCategories);
                    
                // }}
            
            >
 <Input   
 value={categoryId}

 />
 <Input  

 
 />

            </Modal>
        </>
    )
}
export default CategoryTable;