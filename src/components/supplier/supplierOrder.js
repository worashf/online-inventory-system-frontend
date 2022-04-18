
import React, { useState, useEffect } from 'react'
import { Table, Button, Select, Input, Modal,message } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';



 const {TextArea} = Input
const SupplierOrder = () => {

    const [orders, setOrders] = useState([]);
    const [viewOrderProduct,setViewOrderProduct] =useState(false);
    const [orderProducts, setOrderProducts] =useState([]);
    const [saleOrder, setSaleOrder] = useState(null);
     const[addSaleOrder,setAddSaleOrder] =useState(false);
     const [orderId,setOrderId] =useState("");
     const [saleOrders, setSaleOrders] = useState([]);
     const [showSaleOrder,setShowSaleOrder] =useState(false);


   const currentUser=useSelector(state=> state.users.currentUser)
    const { userName } = currentUser;

    const fetchSupplierOrder = async () => {
        const response = await axios.get(`http://localhost:8080/api/orders/${userName}`)
        setOrders(response.data)
    }

    useEffect(() => {
        fetchSupplierOrder();
    }, [])
const handleViewOrderProduct =async(order)=>{
    const {orderId} = order;
    setViewOrderProduct(true);
    const response = await axios.get(`api/order-products/${orderId}`);
     setOrderProducts(response.data);
}

const handleAddSaleOrder =(order)=>{
    setAddSaleOrder(true);
    const {orderId} = order;
    setOrderId(orderId);

}

const resetAddSaleOrder =() =>{
    setAddSaleOrder(false);
    setSaleOrder(null);
}

const  handleCreateSaleOrder =async()=>{

  setViewOrderProduct(true);
  const response = await axios.post(`api/sale-orders/${orderId}`,saleOrder);
   setOrderProducts(response.data);

}
const handleShowSaleOrder =async()=>{
  setShowSaleOrder(true)
  const response = await axios.get(`api/sale-orders/supplier/${userName}`);
   setSaleOrders(response.data);
}
const hideShowSaleOrder =async()=>{
  setShowSaleOrder(false)
   setSaleOrders([]);
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
                        <Button onClick={()=>handleViewOrderProduct(record)}> View Order Product</Button>
                        <Button onClick={() =>handleAddSaleOrder(record)}> Create Sale Order</Button>
                    
                    </>
                )
            }

        }
    ]
    const SaleOrderColumns = [
      {
          key: 1,
          title: "Sale Order Id",
          dataIndex: "saleOrderId",

      },
      {
          key: 2,
          title: "Sale Order  Name",
          dataIndex: "saleOrderName",

      },
    
      {
          key: 3,
          title: "Sale Order  Number",
          dataIndex: "saleOrderNumber",

      },
      {
          key: 5,
          title: "Actions",
          render: (record) => {
              return (
                  <>
                      <Button onClick={()=>handleViewOrderProduct(record)}> View Order Product</Button>
                      <Button onClick={() =>handleAddSaleOrder(record)}> Create Sale Order</Button>
                  
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

    const renderAddSaleOrderModal = () => {
        return (
          <>
            <Modal
              title= "Add Sale order"
              visible={addSaleOrder}
              okText="Save"
              onCancel={resetAddSaleOrder}
              onOk={() => {
                 
               handleCreateSaleOrder();
                message.success("Created succesfully",1)
                resetAddSaleOrder();
                
              }}
            >
              <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
               
              Sale  Order Name
              </label>
    
              <Input placeholder='Enter Sale Order Name'
                style={{ marginBottom: 10,padding: 10}}
                value={saleOrder?.saleOrderName}
                allowClear
                onChange={(e) => {
                  setSaleOrder((pre) => {
                   return { ...pre, saleOrderName: e.target.value };
                  });
                }}
              />
               <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
               
              Sale  Order Number
             </label>
   
             <Input placeholder='Enter sale order number like laptop-order-0001'
               style={{ marginBottom: 10,padding: 10}}
               value={saleOrder?.saleOrderNumber}
               allowClear
               onChange={(e) => {
                 setSaleOrder((pre) => {
                  return { ...pre, saleOrderNumber: e.target.value };
                 });
               }}
             />
            
            
                     
               

            <label style={{ fontWeight: 400, color: "blue", marginTop: 5,display:"block" }}>
               
              Order Desciption
             </label>
             <TextArea placeholder='Enter sale order description'
               value={saleOrder?.description}
               allowClear
               onChange={(e) => {
                 setSaleOrder((pre) => {
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
        <div style={{display:"flex", justifyContent:"flex-end",marginBottom:10, marginTop:10}}>
       
            <Button size='large' onClick={handleShowSaleOrder}> Show sale Order</Button>
            <Button size='large' style={{marginLeft:10}} onClick ={hideShowSaleOrder}> Hide sale Order</Button>
            </div>
            <h2 style={{marginRight:10}}> Purchase Orders</h2>
            <Table
                dataSource={orders}
                columns={OrderColumns}
                bordered="true"
                style={{ marginBottom: 20 }}
            >


            </Table>
            {viewOrderProduct && (
                <>
                    <h1 style={{ background: "blue", color: "white", fontSize: 20, padding: 10 }}> Order product </h1>
                    <Table
                        dataSource={orderProducts}
                        columns={OrderProductColumns}
                        bordered="true"
                        style={{ marginBottom: 20 }}
                    >


                    </Table>
                </>

            )}
      {showSaleOrder && (
                <>
                    <h1 style={{ background: "blue", color: "white", fontSize: 20, padding: 10 }}> Sale Orders </h1>
                    <Table
                        dataSource={saleOrders}
                        columns={SaleOrderColumns}
                        bordered="true"
                        style={{ marginBottom: 20 }}
                    >


                    </Table>
                </>

            )}
            {addSaleOrder && renderAddSaleOrderModal()}
        </>
    )
}

export default SupplierOrder;