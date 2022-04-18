
import React, { useState, useEffect } from 'react'
import { Table, Button, Select, Input, Modal,message } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
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

const { TextArea } = Input;
const {Option} =Select;
const OrderTable = () => {



    const [addModal, setAddModal] = useState(false);
    const [isEdit,setIsEdit] =useState(false);
    const [addOrderProduct, setAddOrderProduct] =useState(false);
    const[viewOrderProduct,setViewOrderProduct] =useState(false);
    const [orderProducts, setOrderProducts]  =useState([]);
    const[orderProduct,setOrderProduct] =useState(null);
    const [order, setOrder] = useState(null);
    const [orderId,setOrderId] =useState("");
 

    const orders = useSelector(state => state.orders);
    const suppliers =useSelector(state =>state.suppliers); 
    const dispatch = useDispatch();
  

 const orderType =[
     "purchase Order",
     "sale Order"
 ]


useEffect(()=>{
  dispatch(listOrders())
},[dispatch])

 const handleAdd =() =>{
     setAddModal(true)
 }
 const resetAdd =() =>{
    setAddModal(false)
    setOrder(null)
}

const handleEdit =(order) =>{
 setAddModal(false);
  setIsEdit(true);
setOrder({...order})
}
const resetedititng =() =>{
  setIsEdit(false)
}


const handleDelete =(order) =>{
  Modal.confirm({
    title: "are you sure to delete this order",
    okText: "Yes",
    okType: "danger",
    onOk: () => {
        dispatch(deleteOrder(order));
    }
})
}

const handleAddOrderProduct =(order)=>{
  setAddOrderProduct(true)
  const {orderId} =order;
  setOrderId(orderId);
  console.log(orderId)
}
const resetAddOrderProduct =() =>{
  setAddOrderProduct(false)
  setOrderProduct(null)
}
const saveOrderProduct = async() =>{
  const response = await axios.post(`api/order-products/${orderId}`, orderProduct);
   console.log(response.data)
}
const handleViewOrderProduct = async (order)=>{
  const {orderId} = order;
  setViewOrderProduct(true);
  const response = await axios.get(`api/order-products/${orderId}`);
   setOrderProducts(response.data);
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
          title: "Order  Type",
          dataIndex: "orderType",

      },
      {
        key: 4,
        title: "Order  Number",
        dataIndex: "orderNumber",

    },
        {
            key: 5,
            title: "Actions",
            render: (record) => {
                return (
                    <>
                      <Button  onClick={() =>handleEdit(record)} icon ={<EditOutlined />} style={{ color: "blue", marginLeft: 10, fontSize: 18 }} />
                   <Button onClick={()=>handleDelete(record)} icon ={ <DeleteOutlined />} style={{ color: "red", marginLeft: 10, fontSize: 18 }} />
                        <Button  onClick={() =>handleAddOrderProduct(record)}> Add Order Product</Button>
                        <Button  onClick={() =>handleViewOrderProduct(record)}> View Order Product</Button>
                    </>
                )
            }

        }
    ]
    const OrderProductColumns = [
      {
          key: 1,
          title: "Order Product Id",
          dataIndex: "orderProductId",

      },
      {
          key: 2,
          title: " Product Name",
          dataIndex: "orderProductName",

      },
      {
        key: 3,
        title: " Quantity",
        dataIndex: "orderProductQuantity",

    },
    {
      key: 4,
      title: " Unit Price",
      dataIndex: "orderProductPrice",

  },
      
  ]
    const renderAddModal = () => {
        return (
          <>
            <Modal
              title= "Add order"
              visible={addModal}
              okText="Save"
              onCancel={resetAdd}
              onOk={() => {
                 
                dispatch(addOrder(order));
                setAddModal(false);
                // handleAddOrderProduct();
                message.success("Order created succesfully",1)
                
              }}
            >
              <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
               
                Order Name
              </label>
    
              <Input placeholder='Enter name like ,Hp pavilion laptop'
                style={{ marginBottom: 10,padding: 10}}
                value={order?.orderName}
                allowClear
                onChange={(e) => {
                  setOrder((pre) => {
                   return { ...pre, orderName: e.target.value };
                  });
                }}
              />
               <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
               
               Order Number
             </label>
   
             <Input placeholder='Enter order number like laptop-order-0001'
               style={{ marginBottom: 10,padding: 10}}
               value={order?.orderNumber}
               allowClear
               onChange={(e) => {
                 setOrder((pre) => {
                  return { ...pre, orderNumber: e.target.value };
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
              name="supplier"
              placeholder="Please select Supplier "
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
             <TextArea placeholder='Enter order description'
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

      const renderEditModal = () => {
        return (
          <>
            <Modal
              title= "Edit Order"
              visible={isEdit}
              okText="Update"
              onCancel={resetedititng}
              onOk={() => {
                 
                dispatch(updateOrder(order));
                setIsEdit(false);
           
                
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
                <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
               
               Order Number
             </label>
   
             <Input 
               style={{ marginBottom: 10,padding: 10}}
               value={order?.orderNumber}
               allowClear
               onChange={(e) => {
                 setOrder((pre) => {
                  return { ...pre, orderNumber: e.target.value };
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
             <TextArea
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


      const renderOderProductAddModal = () => {
        return (
          <>
            <Modal
              title="Add Order Product"
              visible={addOrderProduct}
              okText="Save"
              onCancel={resetAddOrderProduct}
              onOk={() => {
               saveOrderProduct();
               resetAddOrderProduct();
              }}
            >
              <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
               
               Procut name
              </label>
    
              <Input
                style={{ marginBottom: 10,padding: 10}}
                value={orderProduct?.orderProductName}
                allowClear
                onChange={(e) => {
                  setOrderProduct((pre) => {
                   return { ...pre, orderProductName: e.target.value };
                  });
                }}
              />
                 <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
               
               Procut Quantiry
              </label>
    
              <Input
                style={{ marginBottom: 10,padding: 10}}
                value={orderProduct?.orderProductQuantity}
                allowClear
                onChange={(e) => {
                  setOrderProduct((pre) => {
                   return { ...pre, orderProductQuantity: e.target.value };
                  });
                }}
              />
                 <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
               
               Procut Price
              </label>
    
              <Input
                style={{ marginBottom: 10,padding: 10}}
                value={orderProduct?.orderProductPrice}
                allowClear
                onChange={(e) => {
                  setOrderProduct((pre) => {
                   return { ...pre, orderProductPrice: e.target.value };
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
{isEdit &&  renderEditModal () }
{addOrderProduct && renderOderProductAddModal()}


{viewOrderProduct &&(
  <>
    <h1 style={{background:"blue", color:"white",fontSize:20,padding:10}}> Order product </h1>
    <Table
    dataSource={orderProducts}
    columns={OrderProductColumns}
    bordered="true"
    style={{ marginBottom: 20 }}
>


</Table>
  </>

)}



        </>
    )
}
export default OrderTable;