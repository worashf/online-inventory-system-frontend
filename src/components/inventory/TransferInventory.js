import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Button, Select } from 'antd';
import {
    HomeOutlined,
    ShoppingCartOutlined,
    PlusCircleOutlined,
    CopyOutlined
} from '@ant-design/icons'

const form_div = {
    "background": "#6e6859 ",
    "padding": "20px 20px",
    "widht": "50%",

}
const div_css = {
    "height": "70vh",
    "background": "#6e6859 ",
}
const { Option } = Select;
const TransferInventory = () => {
    const stores =useSelector(state =>state.stores); 
    return (
        <>
            <div style={{ background: "#6e6859 ", height: 50 }} >
                <h1 style={{ color: "#fff", fontSize: 30, fontFamily: "cursive" }}> Transfer Inventory</h1>

            </div>
            <div style={div_css}>


                <Form style={form_div}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                >

                    <Form.Item
                        label="Product Number"
                        name="productNumber"
                        rules={[{ required: true, message: 'Please input your product number' }]}
                    >
                        <Input placeholder='Enter Product Number to be transfer'
                        />
                    </Form.Item>

                    <Form.Item
                        label="Inventory Code"
                        name="inventoryCode"
                        rules={[{ required: true, message: 'Please enter inventory Code ' }]}
                    >
                        <Input placeholder='Enter inventory code ' />
                    </Form.Item>

                    <Form.Item
                        label="Origin Store"
                    >
                        <Select
                            name="store"
                            placeholder="Please select origin store"
                        >

                        </Select>


                    </Form.Item>
                    <Form.Item
                        label="Destination Store"
                    >
                        <Select
                            name="store"
                            placeholder="Please select destination store"
                        >

                        </Select>


                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 10 }}>
                        <Button type="primary" htmlType="submit" >
                            Transfer
                        </Button>
                    </Form.Item>


                </Form>
            </div>

        </>
    )
}
export default TransferInventory;


