
import React, { useState, useEffect } from 'react'
import { Table, Button, Select, Input, Modal,DatePicker  } from 'antd'
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { addInventory,listInventories,deleteInventories,updateInventory } from '../../redux/actions/inventoryActions';
import axios from 'axios'
import { EditOutlined, DeleteOutlined, DownCircleOutlined, DownOutlined,UpOutlined } from "@ant-design/icons"

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
const InventoryTable = () => {



    const [isAdd, setIsAdd] = useState(false);
    const [isEdit,setIsEdit] =useState(false);
    const [inventory, setInventory]  =useState(null);
    const  [showStocked, setShowStocked] = useState(false)
    const [showInventory,setshowInventory] =useState(true)
    const[products,setProducts] =useState([]);

    const inventorys = useSelector(state => state.inventories);
    const stores =useSelector(state =>state.stores); 
    const dispatch = useDispatch();
  

 const orderType =[
     "purchase Order",
     "sale Order"
 ]


useEffect(()=>{
   dispatch(listInventories())
},[])

 const handleAdd =() =>{
     setIsAdd(true);
 }
 const resetAdd =() =>{
    setIsAdd(false);
    setInventory(null);
}

const handleEdit =(inventory) =>{
  setIsAdd(false);
  setIsEdit(true);
setInventory({...inventory})
}
const resetedititng =() =>{
  setIsEdit(false);
  setInventory(null);
}


const handleDelete =(inventory) =>{
  Modal.confirm({
    title: "are you sure to delete this inventory",
    okText: "Yes",
    okType: "danger",
    onOk: () => {
        // dispatch(deleteOrder(order));
    }
})
}
const getAllStockedProduct = async() =>{
    setShowStocked(true)
    setshowInventory(false)
  const response = await axios.get(`http://localhost:8080/api/products/stocked`);
     setProducts(response.data)
     console.log(response.data, "printed")

}


    const InventoryColumns = [
        {
            key: 1,
            title: "Inventory Id",
            dataIndex: "inventoryId",

        },
        {
            key: 2,
            title: "Inventory  Name",
            dataIndex: "inventoryName",

        },
        {
          key: 3,
          title: "Inventory Code",
          dataIndex: "inventoryCode",

      },
        {
          key: 4,
          title: "Inventory Date",
          dataIndex: "inventoryDate",

      },
      {
        key: 5,
        title: "Inventory Reorder Level",
        dataIndex: "reorderLevel",

    },

    {
      key: 6,
      title: "Inventory Alert Level",
      dataIndex: "alertLevel",

  },

        {
            key: 7,
            title: "Actions",
            render: (record) => {
                return (
                    <>
                      <Button  onClick={() =>handleEdit(record)} icon ={<EditOutlined />} style={{ color: "blue", marginLeft: 10, fontSize: 18 }} />
                   <Button onClick={()=>handleDelete(record)} icon ={ <DeleteOutlined />} style={{ color: "red", marginLeft: 10, fontSize: 18 }} />
                  </>
                )
            }

        }
    ]
   

    const productColumns = [
      {
          key: 1,
          title: "product Id",
          dataIndex: "productId",

      },
      {
          key: 2,
          title: "product  Name",
          dataIndex: "productName",

      },
      {
        key: 3,
        title: "Product Number",
        dataIndex: "productNumber",

    },
      {
        key: 4,
        title: "Quantity",
        dataIndex: "productQuantity",

    },
    {
      key: 5,
      title: "Unit Price",
      dataIndex: "productPrice",

  },
  {
    key: 6,
    title: "Expiry Date",
    dataIndex: "expiryDate",

},

  ]
    const renderAddModal = () => {
        return (
          <>
            <Modal
              title= "Add Inventory"
              visible={isAdd}
              okText="Save"
              onCancel={resetAdd}
              onOk={() => {
                 
               dispatch(addInventory(inventory))
                resetAdd()
               
                
              }}
            >
              <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
               
                Inventory Name
              </label>
    
              <Input placeholder='Enter Inventory Name Here'
                style={{ marginBottom: 10,padding: 10}}
                value={inventory?.inventoryName}
                allowClear
                onChange={(e) => {
                  setInventory((pre) => {
                   return { ...pre, inventoryName: e.target.value };
                  });
                }}
              />
                  <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
               
                  Inventory Code
             </label>
   
             <Input placeholder='Enter Inventory Code Here'
               style={{ marginBottom: 10,padding: 10}}
               value={inventory?.inventoryCode}
               allowClear
               onChange={(e) => {
                 setInventory((pre) => {
                  return { ...pre,  inventoryCode: e.target.value };
                 });
               }}
             />
            
             <label style={{ fontWeight: 400, color: "blue", marginBottom: 10,display:"block" }}>
               Select Store
                
              </label>
              <Select  style={{width:"100%"}}
               onChange={value => {
                  setInventory(pre =>{
                    return { ...pre, storeId: value };
                    ;
                  })
              }}
              name="store"
              placeholder="Please select store "
                    >
                   { stores&& 
                       Array.isArray(stores) &&
                       stores.map(store =>{
                          return <Option style ={{ marginBottom: 10,}} value ={store.storeId}>{store.storeName}</Option>
                       })}
                       </Select>

                       <label style={{ fontWeight: 400, color: "blue", marginBottom: "10px",display:"block" }}>
             Inventory Date
                
              </label>
            <DatePicker 
             style={{ marginBottom: 10,padding: 10,width:"100%"}}
             value={inventory?.inventoryDate}
             format={"YYYY/MM/DD"}
             onChange={(date, dateString) => 
            {
                
               setInventory((pre) => {
                return { ...pre, inventoryDate: moment(dateString)};
               });
             }}/>
                 <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
               
              Inventory Reorder Level
             </label>
   
             <Input   placeholder='Enter Inventory reorder level like 20'
               style={{ marginBottom: 10,padding: 10}}
               value={inventory?.reorderLevel}
               allowClear
               onChange={(e) => {
                 setInventory((pre) => {
                  return { ...pre, reorderLevel: e.target.value };
                 });
               }}
             />
                 <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
               
               Invventory Alert Level
             </label>
   
             <Input placeholder='Enter Inventory alert level like 20'
               style={{ marginBottom: 10,padding: 10}}
               value={inventory?.alertLevel}
               allowClear
               onChange={(e) => {
                 setInventory((pre) => {
                  return { ...pre, alertLevel: e.target.value };
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
              title= "Edit Inventory"
              visible={isEdit}
              okText="Update"
              onCancel={resetedititng}
              onOk={() => {
                 
               
           
                
              }}
            >
              <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
               
                Inventory Name
              </label>
    
              <Input
                style={{ marginBottom: 10,padding: 10}}
                value={inventory?.inventoryName}
                allowClear
                onChange={(e) => {
                  setInventory((pre) => {
                   return { ...pre, inventoryName: e.target.value };
                  });
                }}
              />
             
            
          <label style={{ fontWeight: 400, color: "blue", marginBottom: 10,display:"block" }}>
               Select Store
                
              </label>
              <Select 
               onChange={value => {
                 setInventory(pre =>{
                    return { ...pre, storeId: value };
                    ;
                  })
              }}
              name="store"
              placeholder="Please select store"
                    >
                   { stores&& 
                       Array.isArray(stores) &&
                    stores.map(store =>{
                          return <Option style ={{ marginBottom: 10,}} value ={store.storeId}>{store.storeName}</Option>
                       })}
                       </Select>

           
            </Modal>
  
          </>
        );
      };

     
    return (
        <>
            <div style={button_search}>
                <Button onClick={handleAdd} icon={<DownCircleOutlined style={{ color: "#fff" }} />} size="large" style={add_button} >Add Inventory</Button>
                <Button onClick ={getAllStockedProduct} icon={<DownOutlined style={{ color: "#fff" }} />} size="large" style={add_button} >Show Stocked Product</Button>
                <Button onClick={() =>{
                  setshowInventory(true)
                  setShowStocked(false)}} icon={<UpOutlined style={{ color: "#fff" }} />} size="large" style={add_button} >Hide Stocked Product</Button>
                <div style={search_div}>
                    <Input placeholder='Enter Order Name ' style={search_input} />
                    <Button style={search_btn}> Search</Button>
               
                </div>

            </div>
          {showInventory && <div>

             <p style={{marginTop:"px",fontFamily:"cursive", fontSize:"30px", textDecoration:"underline"}}> Inventories </p>
          
            <Table
                dataSource={inventorys}
                columns={InventoryColumns}
                bordered="true"
                style={{ marginBottom: 20 }}
            >


            </Table>
            </div>
            }   

 {showStocked && 
   <div>
       <p style={{fontFamily:"cursive", fontSize:"30px", textDecoration:"underline"}}> Stocked Products</p>
          
 <Table
                dataSource={products}
                columns={productColumns}
                bordered="true"
                style={{ marginBottom: 20 }}
            >


            </Table>
   </div>
           }
{isAdd && renderAddModal()}
{isEdit &&  renderEditModal () }
      </>
    )
}
export default InventoryTable;