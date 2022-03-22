
import React, { useState } from 'react'
import { Table, Button, Form, Input } from 'antd'
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import Modal from 'antd/lib/modal/Modal'
import './categotyTable.css'

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
    const [addform,setAddForm] =useState(false)
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

    const handleAddForm=()=>{
        setAddForm(true)
    }
    const closeAddForm=()=>{
        setAddForm(false)
    }
    return (
        <>
            <div style={button_search}>
                <Button size="large" style={add_button} onClick={handleAddForm}>Add Category</Button>
                <Button size="large" style={add_button} onClick={closeAddForm}>hide</Button>
                <div className={addform?"add-form":"hide-form"}>
                <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
    
     
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

     

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
</div>
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