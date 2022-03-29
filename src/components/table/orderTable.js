
import React, { useState, useEffect } from 'react'
import { Table, Button, Select, Input, Modal } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { addOrder, listOrders, deleteOrder, updateOrder } from '../../redux/actions/orderActions'
import { EditOutlined, DeleteOutlined, DownCircleOutlined, UpCircleOutlined, RightCircleOutlined } from "@ant-design/icons"

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

const { TextArea } = Input;
const {Option} =Select;
const OrderTable = () => {



    const [addModal, setAddModal] = useState(false);
    const [order, setOrder] = useState(null);

    const [editing, setEditing] = useState(false);

    const orders = useSelector(state => state.orders);
    const suppliers =useSelector(state =>state.suppliers); 
    const dispatch = useDispatch();
  

 const orderType =[
     "purchase Order",
     "sale Order"
 ]




 const handleAdd =() =>{
     setAddModal(true)
 }
 const resetAdd =() =>{
    setAddModal(false)
}


    const OrderColumns = [
        {
            key: 1,
            title: "Order Id",
            dataIndex: "orderId",

        },
        {
            key: 2,
            title: "Order  Name",
            dataIndex: "orderName",

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
    const renderAddModal = () => {
        return (
          <>
            <Modal
              title="Add Order"
              visible={addModal}
              okText="Save"
              onCancel={resetAdd}
              onOk={() => {
                dispatch(addOrder(order));
                setAddModal(false)
                
              }}
            >
              <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
               
                Order Name
              </label>
    
              <Input
                style={{ marginBottom: 10,padding: 10}}
                value={order?.orderName}
                allowClear
                onChange={(e) => {
                  setOrder((pre) => {
                   return { ...pre, orderName: e.target.value };
                  });
                }}
              />
              <label style={{ fontWeight: 400, color: "blue", marginBottom: 10,marginRight:10, display:"block"}}>
               Select Order Type
                
              </label>
              <Select 
               onChange={value => {
                  setOrder(pre =>{
                    return { ...pre, orderType: value };
                    ;
                  })
              }}
              name="orderType"
              placeholder="Please select order type "
                    >
                   { orderType && 
                       Array.isArray(orderType ) &&
                       orderType.map(type =>{
                          return <Option style ={{padding: 10, marginBottom: 10,}} value ={type}>{type}</Option>
                       })}
                       </Select>
                       <label style={{ fontWeight: 400, color: "blue", marginBottom: 10,display:"block" }}>
               Select supplier
                
              </label>
              <Select 
               onChange={value => {
                  setOrder(pre =>{
                    return { ...pre, supplierId: value };
                    ;
                  })
              }}
              name="orderType"
              placeholder="Please select order type "
                    >
                   { suppliers&& 
                       Array.isArray(suppliers) &&
                       suppliers.map(supplier =>{
                          return <Option style ={{ marginBottom: 10,}} value ={supplier.supplierId}>{supplier.supplierName}</Option>
                       })}
                       </Select>

            <label style={{ fontWeight: 400, color: "blue", marginTop: 5,display:"block" }}>
               
              Order Desciption
             </label>
             <Input
               value={order?.description}
               allowClear
               onChange={(e) => {
                 setOrder((pre) => {
                   return { ...pre, description: e.target.value };
                 });
               }}
                    />
                 
           
            </Modal>
  
          </>
        );
      };





    return (
        <>
            <div style={button_search}>
                <Button onClick={handleAdd} icon={<DownCircleOutlined style={{ color: "#fff" }} />} size="large" style={add_button} >Create Order</Button>
                <Button icon={<UpCircleOutlined style={{ color: "#fff" }} />} size="large" style={add_button} >Purchases Order</Button>
                <Button icon={<RightCircleOutlined style={{ color: "#fff" }} />} size="large" style={add_button} >Sales Order</Button>
                <div style={search_div}>
                    <Input placeholder='Enter Order Name ' style={search_input} />
                    <Button style={search_btn}> Search</Button>
                </div>

            </div>

            <Table
                dataSource={orders}
                columns={OrderColumns}
                bordered="true"
                style={{ marginBottom: 20 }}
            >


            </Table>

{addModal && renderAddModal()}



        </>
    )
}
export default OrderTable;