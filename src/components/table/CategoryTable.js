
import React, { useState, useEffect } from 'react'
import { Table, Button, Form, Input, Modal,message } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { listCategories, addCategory, deleteCategory, updateCategory } from '../../redux/actions/categoryAction'
import { EditOutlined, DeleteOutlined, DownCircleOutlined, UpCircleOutlined } from "@ant-design/icons"

import './categotyTable.css'

const button_search = {
    "marginTop": "30px",
    "marginBottom": "20px"
}
const add_button = {
    "background": "#797772",
    "color": "#111",
    "height": "50px",
    "marginBottom": "20px",
    "borderRadius": "5px",
    "fontSize": "20px",
    "paddingBottom": "20px",
    "border": "1px solid #6e6859 ",
    "marginLeft": "10px"

}

const search_div = {
    "display": "flex"
}
const search_input = {
    "width": "30%",
    "marginLeft": "5%",
    "padding": "10px",
    "border": "2px solid #6e6859 ",
    "color": "#111"

}
const search_btn = {
    "height": "50px",
    "border": "2px solid #6e6859 ",
    "marginLeft": "5px",
    "borderRadius": "5px",
    "fontSize": "20px"

}
const form_div = {
    "background": "#6e6859 ",
    "padding": "20px 20px",
    "widht": "50%"
}

const {TextArea} =Input;
const CategoryTable = () => {



    const [addform, setAddForm] = useState(false)
    const [newCategory, setNewCategory] = useState({
        categoryName: "",
        categoryDescription: ""
    });
    const [editedCategory, setEditedCategory] = useState(null);
    const [editing, setEditing] = useState(false);

    const { categoryName, categoryDescription } = newCategory;
  

    const categories = useSelector((state) => state.categories);
    const dispatch = useDispatch();



    const CategoryColumns = [
        {
            key: 1,
            title: "Category Id",
            dataIndex: "categoryId",

        },
        {
            key: 2,
            title: "Category  Name",
            dataIndex: "categoryName",

        },
        {
            key: 3,
            title: "Actions",
            render: (record) => {
                return (
                    <>
                        <EditOutlined onClick={() => { handleEdit(record) }} style={{ color: "blue", marginLeft: 10, fontSize: 18 }} />
                        <DeleteOutlined onClick={() => { handleDelete(record) }} style={{ color: "red", marginLeft: 10, fontSize: 18 }} />
                    </>
                )
            }

        }
    ]



    useEffect(() => {
        dispatch(listCategories())

    }, [dispatch])


    const handleIdChange = (e) => {
        console.log(e.target.value)
        setNewCategory((cat) => (
            { ...cat, categoryName: e.target.value }
        ))

    }
    const handleNameChange = (e) => {
        console.log(e.target.value)
        setNewCategory((cat) => (
            { ...cat, categoryDescription: e.target.value }
        ))
        console.log(newCategory)
    }

    const handleAddForm = (e) => {
        setAddForm(true)

    }
    const closeAddForm = () => {
        setAddForm(false)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newCat = {
            categoryName: categoryName, categoryDescription: categoryDescription

        }
        dispatch(addCategory(newCat));
        message.success("saved successfully",1)


    }
    const handleDelete = (catgory) => {

        Modal.confirm({
            title: "are you shure to delete this record",
            okText: "Yes",
            okType: "danger",
            onOk: () => {
                dispatch(deleteCategory(catgory));
            }
        })

    }
    const handleEdit = (category) => {
       setEditing(true)
       setEditedCategory({...category})
       
     
        
    }
    const resetEditing = () => {
        setEditing(false);
        setEditedCategory(null);
    }

    return (
        <>
            <div style={button_search}>
                <Button icon={<DownCircleOutlined style={{ color: "#fff" }} />} size="large" style={add_button} onClick={handleAddForm}>Add Category</Button>
                <Button icon={<UpCircleOutlined style={{ color: "#fff" }} />} size="large" style={add_button} onClick={closeAddForm}>hide</Button>
                <div className={addform ? "add-form" : "hide-form"}>
                    <Form style={form_div}
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 8 }}
                        initialValues={{ remember: true }}


                        autoComplete="off"
                    >
                        <Form.Item
                            label="Category Name"
                            name="categoryName"
                            rules={[{ required: true, message: 'Please input your category id!' }]}
                        >
                            <Input value={categoryName} onChange={handleIdChange} />
                        </Form.Item>

                        <Form.Item
                            label="Category Description"
                            name="categoryDescription"
                            rules={[{ required: true, message: 'Please input your category name!' }]}
                        >
                            <Input value={categoryDescription} onChange={handleNameChange} />
                        </Form.Item>



                        <Form.Item wrapperCol={{ offset: 8, span: 10 }}>
                            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
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
                dataSource={categories}
                columns={CategoryColumns}
                bordered="true"
                style={{marginBottom:20}}
            >


            </Table>


            <Modal
                    title="Update Category"
                    okText="Yes"
                    visible={editing}
                    onCancel={() => {
                        resetEditing()
                    }}
                    onOk={() => {
                  dispatch(updateCategory(editedCategory))
                  setEditing(false);
                    }}
                >
                    <label style={{fontWeight:400,color:"blue", marginBottom:5}}> Category Name</label>
 <Input style={{marginBottom:10}} value={editedCategory?.categoryName} onChange ={(e) =>{
       setEditedCategory(pre =>{
           return {...pre, categoryName:e.target.value}
       })
 }}/>
 <label style={{fontWeight:400,color:"blue", marginBottom:5}}> Category Description</label>
 <TextArea value={editedCategory?.categoryDescription} onChange ={(e)=>{
      setEditedCategory(pre=>{
          return {...pre,categoryDescription:e.target.value}
      }) }}/>

                </Modal>

        </>
    )
}
export default CategoryTable;