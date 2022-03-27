import React, { useState, useEffect } from "react";
import { Table, Button, Input, Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  addStore,
  listStores,
  deleteStore,
  updateStore,
} from "../../redux/actions/storeActions";

const button_search = {
  marginTop: "30px",
  marginBottom: "20px",
};
const add_button = {
  background: "#797772",
  color: "#111",
  height: "50px",
  marginBottom: "20px",
  borderRadius: "5px",
  fontSize: "20px",
  paddingBottom: "20px",
  border: "1px solid #6e6859 ",
};

const search_div = {
  display: "flex",
};
const search_input = {
  width: "30%",
  marginLeft: "5%",
  padding: "10px",
  border: "2px solid #6e6859 ",
  color: "#111",
};
const search_btn = {
  height: "50px",
  border: "2px solid #6e6859 ",
  "margin-left": "5px",
  borderRadius: "5px",
  fontSize: "20px",
};
const StoreTable = () => {
    const [isAdd, setIsAdd] = useState(false);
  const [isEdit,setIsEdit] =useState(false);
    const [newStore, setNewStore] = useState(null);
    const [address, setAddress] = useState(null)
    const [isAddAdress, setIsAddAddress] = useState(false);
    const [storeId,setStoreId] = useState("")
    const company = useSelector(state => state.company);
    const {companyId} = company
  const stores = useSelector((state) => state.stores);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listStores());
  }, [dispatch]);

    
    
const handleAddStore =() =>{
    setIsAdd(true)
}


const resetAdd =()=>{
    setIsAdd(false);
    setNewStore(null);
}
const handleDeleteStore =(store) =>{
    Modal.confirm({
        title: "are you sure to delete this store",
        okText: "Yes",
        okType: "danger",
        onOk: () => {
            dispatch(deleteStore(store));
        }
    })
}

const handleEditStore =(store) =>{
    setIsAdd(false);
 setIsEdit(true);
 setNewStore({...store})

}

const resetEditing =() =>{
    setIsEdit(false);
    setNewStore(null);

    }

    const handleAddStoreAdress = (store) => {
        setIsAddAddress(true)
        const { storeId } = store;
        console.log(storeId);
        setStoreId(storeId)
    } 
    const resetAddStoreAddress = () => {
        setIsAddAddress(false);
        setAddress(null)
    }
    const addStoreAddress = async () => {
        const response = await axios.post(`api/stores/address/${storeId}`, address);
        console.log(response.data)
}
    
  const StoreColumns = [
    {
      key: 1,
      title: "Store ID",
      dataIndex: "storeId",
    },
    {
      key: 2,
      title: "Store Name",
      dataIndex: "storeName",
    },
    {
      key: 3,
      title: "Actions",
      render: (record) => {
        return (
          <>
            <Button onClick={()=>handleAddStoreAdress(record)}
              style={{ background: "#797772", color: "#fff", fontSize: 15 }}
            >
             
              Add Store Address
            </Button>
          <Button onClick={()=>handleEditStore(record)} icon ={<EditOutlined/>}   
              style={{ color: "blue", marginLeft: 10, fontSize: 18 }}
            />
          <Button  onClick={() =>{handleDeleteStore(record)}} icon={<DeleteOutlined/>}  
              style={{ color: "red", marginLeft: 10, fontSize: 18 }}
            />
          </>
        );
      },
    },
  ];

  const renderAddModal = () => {
    return (
      <>
        <Modal
          title="add Store"
          visible={isAdd}
          okText="Save"
          onCancel={resetAdd}
          onOk={() => {
            dispatch(addStore(companyId, newStore));
              setIsAdd(false)
              setNewStore(null);
          }}
        >
          <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
           
            Store Name
          </label>

          <Input
            style={{ marginBottom: 10 }}
            value={newStore?.storeName}
            allowClear
            onChange={(e) => {
              setNewStore((pre) => {
                return { ...pre, storeName: e.target.value };
              });
            }}
          />
          <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
           
            Store Size
          </label>
          <Input
            value={newStore?.storeSize}
            allowClear
            onChange={(e) => {
              setNewStore((pre) => {
                return { ...pre, storeSize: e.target.value };
              });
            }}
                />
                  <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
           
        Store Building
         </label>
         <Input
           value={newStore?.building}
           allowClear
           onChange={(e) => {
             setNewStore((pre) => {
               return { ...pre, building: e.target.value };
             });
           }}
                />
                  <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
           
           Store Floor
         </label>
         <Input
           value={newStore?.floor}
           allowClear
           onChange={(e) => {
             setNewStore((pre) => {
               return { ...pre, floor: e.target.value };
             });
           }}
                />
                  <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
           
           Store Room
         </label>
         <Input
           value={newStore?.room}
           allowClear
           onChange={(e) => {
             setNewStore((pre) => {
               return { ...pre, room: e.target.value };
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
          title="Update Store"
          visible={isEdit}
          okText="update"
          onCancel={resetEditing}
          onOk={() => {
            dispatch(updateStore(newStore));
              setIsEdit(false);
          }}
        >
          <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
           
            Store Name
          </label>

          <Input
            style={{ marginBottom: 10 }}
            value={newStore?.storeName}
            allowClear
            onChange={(e) => {
              setNewStore((pre) => {
                return { ...pre, storeName: e.target.value };
              });
            }}
          />
          <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
           
            Store Size
          </label>
          <Input
            value={newStore?.storeSize}
            allowClear
            onChange={(e) => {
              setNewStore((pre) => {
                return { ...pre, storeSize: e.target.value };
              });
            }}
                />
                  <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
           
        Store Building
         </label>
         <Input
           value={newStore?.building}
           allowClear
           onChange={(e) => {
             setNewStore((pre) => {
               return { ...pre, building: e.target.value };
             });
           }}
                />
                  <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
           
           Store Floor
         </label>
         <Input
           value={newStore?.floor}
           allowClear
           onChange={(e) => {
             setNewStore((pre) => {
               return { ...pre, floor: e.target.value };
             });
           }}
                />
                  <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
           
           Store Room
         </label>
         <Input
           value={newStore?.room}
           allowClear
           onChange={(e) => {
             setNewStore((pre) => {
               return { ...pre, room: e.target.value };
             });
           }}
         />
        </Modal>
      </>
    );
    };
    

    const renderAddAdressStore = () => {
        return (
            <>
              <Modal
                title="Add Store Address"
                visible={isAddAdress}
                okText="Save"
                onCancel={resetAddStoreAddress}
                    onOk={() => {
                        addStoreAddress()
                //   dispatch(updateStore(newStore));
                //     setIsEdit(false);
                }}
                >
                       <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
                 
                 Store  Id
                 </label>
       
                 <Input 
                   style={{ marginBottom: 10 }}
                   value={storeId}
                   
                   
                 />
                <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
                 
                Store  Country
                </label>
      
                <Input placeholder="Enter Store coutry"
                  style={{ marginBottom: 10 }}
                  value={address?.country}
                  allowClear
                  onChange={(e) => {
                   setAddress((pre) => {
                      return { ...pre, country: e.target.value };
                    });
                  }}
                />
                <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
                 
                Store  City
                </label>
                <Input placeholder="Enter Store city"
                  value={address?.city}
                  allowClear
                  onChange={(e) => {
                    setAddress((pre) => {
                      return { ...pre, city: e.target.value };
                    });
                  }}
                      />
                        <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
                 
             Store Sub City
               </label>
               <Input
                 value={address?.subCity}
                 allowClear
                 onChange={(e) => {
                   setAddress((pre) => {
                     return { ...pre, subCity: e.target.value };
                   });
                 }}
                      />
                        <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
                 
                 Store State
               </label>
               <Input
                 value={address?.state}
                 allowClear
                 onChange={(e) => {
                   setAddress((pre) => {
                     return { ...pre, state: e.target.value };
                   });
                 }}
                      />
                        <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
                 
                Store Street
               </label>
               <Input
                 value={address?.street}
                 allowClear
                 onChange={(e) => {
                   setAddress((pre) => {
                     return { ...pre, street: e.target.value };
                   });
                 }}
                    />
                    <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
                 
                 Store Postal Code
                </label>
                <Input
                  value={address?.postalCode}
                  allowClear
                  onChange={(e) => {
                    setAddress((pre) => {
                      return { ...pre, postalCode: e.target.value };
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
        <Button  onClick={handleAddStore} size="large" style={add_button}>
          Add Store
        </Button>
        <div style={search_div}>
          <Input placeholder="Enter store Name " style={search_input} />
          <Button style={search_btn}> Search</Button>
        </div>
      </div>

          <Table dataSource={stores} columns={StoreColumns} bordered="true"></Table>
          {isAdd && renderAddModal()}
          {isEdit && renderEditModal()}
          {isAddAdress && renderAddAdressStore()}
    </>
  );
};
export default StoreTable;
