

import React,{useState} from "react";
import {Form,Input,Button} from 'antd';
import { useDispatch} from "react-redux";
import { addSupplier } from "../../redux/actions/supplierActions";

const SupplierForm  =() =>{
 const [supplier,setSupplier] =useState(null);
  

 const dispatch = useDispatch();

 const handleSave=()=>{
   dispatch(addSupplier(supplier))
}



return (
    <>
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
    </>
)

}
export default SupplierForm;