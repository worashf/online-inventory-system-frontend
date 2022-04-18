

import React,{useState} from "react";
import {Form,Input,Button,message} from 'antd';
import { useDispatch} from "react-redux";
import { addSupplier } from "../redux/actions/supplierActions";
import { Link } from "react-router-dom";

const form_div = {
    "background": "#6e6859 ",
    "padding": "20px 20px",
    "widht": "50%",
  
}
const div_css ={
    "height":"90vh",
    "background": "#6e6859 ",
}


const Signup  =() =>{
 const [supplier,setSupplier] =useState(null);
  

 const dispatch = useDispatch();

 const handleSave=()=>{
   dispatch(addSupplier(supplier))
   setSupplier(null);
   message.success("saved succesfully",1)
}



return (
    <>
      <div style={{background:"#ccb15f",height:50}}>
        <h1 style={{color :"#fff",fontSize:30,fontFamily:"cursive" }}> Online Inventory Management System</h1>

        </div>
        <h1 style={{color :"#111",fontSize:30,fontFamily:"cursive" }}> Register Supplier/ Customer</h1>

     <Form  style={{marginTop:30}}
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 8 }}
                        initialValues={{ remember: true }}


                        autoComplete="off"
                    >
                        <Form.Item
                            label="Supplier Name"
                            name="supplierName"
                            rules={[{ required: true, message: 'Please Enter Supplier Name!' }]}
                        >
                            <Input value={supplier?.supplierName} onChange ={(e) =>{
                                setSupplier((supplier) =>{
                                    return {...supplier,supplierName:e.target.value}
                                })
                            }}/>
                        </Form.Item>

                        <Form.Item
                            label="Supplier Email"
                            name="supplierEmail"
                            rules={[{ required: true, message: 'Please Enter Supplier Email' }]}
                        >
                            <Input   value={supplier?.email} onChange ={(e) =>{
                                setSupplier((supplier) =>{
                                    return {...supplier,email:e.target.value}
                                })
                            }}/>
                        </Form.Item>
                        <Form.Item
                            label="Supplier Pone1"
                            name="supplierPhone1"
                            rules={[{ required: true, message: 'Please Enter Supplier Phone1' }]}
                        >
                            <Input   value={supplier?.phone1} onChange ={(e) =>{
                                setSupplier((supplier) =>{
                                    return {...supplier,phone1:e.target.value}
                                })
                            }}/>
                        </Form.Item>
                        <Form.Item
                            label="Supplier Phone2"
                            name="supplierPhone2"
                           
                        >
                            <Input   value={supplier?.phone2} onChange ={(e) =>{
                                setSupplier((supplier) =>{
                                    return {...supplier,phone2:e.target.value}
                                })
                            }}/>
                        </Form.Item>


                        <Form.Item wrapperCol={{ offset: 8, span: 10 }}>
                            <Button type="primary" htmlType="submit"  size="large" onClick={handleSave}>
                                Save
                            </Button>
                        </Form.Item>
                    </Form>
                    <div style={{display:"flex",textAlign:"center",marginLeft:200}}>
                    <h3 style={{color:"#111",fontFamily:"cursive",fontSize:25}}>You have acount?</h3>
            <Link  to ="/"  style={{marginLeft:10,height:40,
                background:"#325ca8" ,color:"#fff",borderRadius:5,padding:10}}  >
                       Login Here
              </Link>
                    </div>
             
    </>
)

}
export default Signup;