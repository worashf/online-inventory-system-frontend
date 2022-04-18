
import React, { useState, useEffect } from 'react'
import { Table, Button, Select, Input, Modal } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { addInventory,listInventories,deleteInventories,updateInventory } from '../../redux/actions/inventoryActions';
import axios from 'axios'
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
const InventoryTable = () => {



    const [isAdd, setIsAdd] = useState(false);
    const [isEdit,setIsEdit] =useState(false);
    const [inventory, setInventory]  =useState(null);
    
   

    const inventorys = useSelector(state => state.inventorys);
    const stores =useSelector(state =>state.stores); 
    const dispatch = useDispatch();
  

 const orderType =[
     "purchase Order",
     "sale Order"
 ]


// useEffect(()=>{
  
// },[dispatch])

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
          title: "Inventory Date",
          dataIndex: "inventoryDate",

      },

        {
            key: 4,
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
              placeholder="Please select store "
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
                <Button icon={<UpCircleOutlined style={{ color: "#fff" }} />} size="large" style={add_button} >Purchases Order</Button>
                <Button icon={<RightCircleOutlined style={{ color: "#fff" }} />} size="large" style={add_button} >Sales Order</Button>
                <div style={search_div}>
                    <Input placeholder='Enter Order Name ' style={search_input} />
                    <Button style={search_btn}> Search</Button>
                </div>

            </div>

            <Table
                dataSource={inventorys}
                columns={InventoryColumns}
                bordered="true"
                style={{ marginBottom: 20 }}
            >


            </Table>

{isAdd && renderAddModal()}
{isEdit &&  renderEditModal () }
      </>
    )
}
export default InventoryTable;