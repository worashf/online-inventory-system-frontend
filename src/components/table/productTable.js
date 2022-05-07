
import React, { useState, useEffect } from 'react'
import { Table, Button, Select, Input, Modal,DatePicker, message } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct,listProducts,deleteProduct,updateProduct } from '../../redux/actions/productAction'
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
const ProductTable = () => {



    const [isAdd, setIsAdd] = useState(false);
    const [isEdit,setIsEdit] =useState(false);
    const [isAddToInventory,setIsAddToInventory] =useState(false)
    const[viewProduct,setViewProduct] =useState(false);
    const [inventoryCode, setInventoryCode] =useState("")
    const[product,setProduct] =useState(null);
    const [order, setOrder] = useState(null);
    const [orderId,setOrderId] =useState("");
    const [productId,setProductId] =useState("")
    const products = useSelector(state => state.products);
    const   suppliers =useSelector(state =>state.suppliers); 
    const categories =useSelector(state=>state.categories);
    const brands = useSelector(state=>state.brands);
    const dispatch = useDispatch();
  

 const orderType =[
     "purchase Order",
     "sale Order"
 ]


useEffect(()=>{
   dispatch(listProducts());
},[dispatch])

 const handleAdd =() =>{
     setIsAdd(true)
 }
 const resetAdd =() =>{
    setIsAdd(false)
    setProduct(null);
}

const handleEdit =(product) =>{
setIsAdd(false)
setProduct({...product})
setIsEdit(true);
}
const resetEditing =() =>{
  setIsEdit(false)
  setProduct(null)
}


const handleDelete =(product) =>{
  Modal.confirm({
    title: "are you sure to delete this product",
    okText: "Yes",
    okType: "danger",
    onOk: () => {
        dispatch(deleteProduct(product));
    }
})
}

const handleAddOrderProduct =(order)=>{
  // setAddOrderProduct(true)
  const {orderId} =order;
  setOrderId(orderId);
  console.log(orderId)
}
const resetAddOrderProduct =() =>{
  // setAddOrderProduct(false)
  // setOrderProduct(null)
}
const saveOrderProduct = async() =>{
  // const response = await axios.post(`api/order-products/${orderId}`, orderProduct);
  //  console.log(response.data)
}
const handleViewOrderProduct = async (order)=>{
  const {orderId} = order;
  // setViewOrderProduct(true);
  const response = await axios.get(`api/order-products/${orderId}`);
  //  setOrderProducts(response.data);
}

const handleAddToInventory = (product) =>{
  const {productId} =product;
  setIsAddToInventory(true)
  setProductId(productId)

}
const resetAddToInventory =()=>{
 setIsAddToInventory(false)
 setInventoryCode("")
}

const  addproductToInventory = async()=>{
     const response = await axios.put(`http://localhost:8080/api/products/add-product-inventory/${productId}/${inventoryCode}`);
      if(response.data){
        message.success("Added successfuly",1)
      }
}

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
  {
            key:6 ,
            title: "Actions",
            render: (record) => {
                return (
                    <>
                      <Button  onClick={() =>handleEdit(record)} icon ={<EditOutlined />} style={{ color: "blue", marginLeft: 10, fontSize: 18 }} />
                   <Button onClick={()=>handleDelete(record)} icon ={ <DeleteOutlined />} style={{ color: "red", marginLeft: 10, fontSize: 18 }} />
                   <Button onClick={()=>handleAddToInventory(record)} icon ={ <DownCircleOutlined/>} style={{ color: "blue", marginLeft: 10, fontSize: 18 }} > Add to stock </Button>
 
                    </>
                )
            }

        }
    ]
   
    const renderAddProductToInventory =()=>{
       return(
         <>
            <Modal
              title= "Add Product To Inventory"
              visible={isAddToInventory}
              okText="Save"
              onCancel={resetAddToInventory}
              onOk={() => {
                 
                addproductToInventory();
                 resetAddToInventory()
               
                
              }}
            >


<label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
               
               Inventory  Code
             </label>
   
             <Input placeholder='Enter Inventory Code'
               style={{ marginBottom: 10,padding: 10}}
               value={inventoryCode}
               allowClear
               onChange={(e)=>setInventoryCode(e.target.value)}
             />
                 


            </Modal>
         
         </>

       )
    }

    const renderProductAddModal = () => {
        return (
          <>
            <Modal
              title= "Add Product"
              visible={isAdd}
              okText="Save"
              onCancel={resetAdd}
              onOk={() => {
                 
                dispatch(addProduct(product))
                 resetAdd();
               
                
              }}
            >
              <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
               
                Product Name
              </label>
    
              <Input
                style={{ marginBottom: 10,padding: 10}}
                value={product?.productName}
                allowClear
                onChange={(e) => {
                  setProduct((pre) => {
                   return { ...pre, productName: e.target.value };
                  });
                }}
              />
                   <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
               
               Product Number
             </label>
   
             <Input
               style={{ marginBottom: 10,padding: 10}}
               value={product?.productNumber}
               allowClear
               onChange={(e) => {
                 setProduct((pre) => {
                  return { ...pre, productNumber: e.target.value };
                 });
               }}
             />
           
           <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
               
               Product Quantity
             </label>
   
             <Input
               style={{ marginBottom: 10,padding: 10}}
               value={product?.productQuantity}
               allowClear
               onChange={(e) => {
                 setProduct((pre) => {
                  return { ...pre, productQuantity: e.target.value };
                 });
               }}
             />
           
           <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
               
               Product Price
             </label>
   
             <Input
               style={{ marginBottom: 10,padding: 10}}
               value={product?.productPrice}
               allowClear
               onChange={(e) => {
                 setProduct((pre) => {
                  return { ...pre, productPrice: e.target.value };
                 });
               }}
             />
           
            <label style={{ fontWeight: 400, color: "blue", marginBottom: 10,display:"block" }}>
               Select supplier
                
              </label>
              <Select 
               onChange={value => {
                  setProduct(pre =>{
                    return { ...pre, supplierId: value };
                    ;
                  })
              }}
              name="supplier"
              placeholder="Please select product supplier"
                    >
                   { suppliers&& 
                       Array.isArray(suppliers) &&
                       suppliers.map(supplier =>{
                          return <Option style ={{ marginBottom: 10,}} value ={supplier.supplierId}>{supplier.supplierName}</Option>
                       })}
                       </Select>

                       <label style={{ fontWeight: 400, color: "blue", marginBottom: 10,display:"block" }}>
               Select Category
                
              </label>
              <Select 
               onChange={value => {
                  setProduct(pre =>{
                    return { ...pre, categoryId: value };
                    ;
                  })
              }}
              name="supplier"
              placeholder="Please select product category"
                    >
                   { categories&& 
                       Array.isArray(categories) &&
                       categories.map(category =>{
                          return <Option style ={{ marginBottom: 10,}} value ={category.categoryId}>{category.categoryName}</Option>
                       })}
                       </Select>
                       <label style={{ fontWeight: 400, color: "blue", marginBottom: 10,display:"block" }}>
               Select Brand
                
              </label>
              <Select 
               onChange={value => {
                  setProduct(pre =>{
                    return { ...pre, brandId: value };
                    ;
                  })
              }}
              name="supplier"
              placeholder="Please select product brand"
                    >
                   { suppliers&& 
                       Array.isArray(brands) &&
                       brands.map(brand=>{
                          return <Option style ={{ marginBottom: 10,}} value ={brand.brandId}>{brand.brandName}</Option>
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
              title= "Edit Product"
              visible={isEdit}
              okText="Update"
              onCancel={resetEditing}
              onOk={() => {
                 
                dispatch(updateProduct(product));
                 resetEditing();
           
                
              }}
            >
              <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
               
               Product Name
             </label>
   
             <Input
               style={{ marginBottom: 10,padding: 10}}
               value={product?.productName}
               allowClear
               onChange={(e) => {
                 setProduct((pre) => {
                  return { ...pre, productName: e.target.value };
                 });
               }}
             />
                  <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
              
              Product Number
            </label>
  
            <Input
              style={{ marginBottom: 10,padding: 10}}
              value={product?.productNumber}
              allowClear
              onChange={(e) => {
                setProduct((pre) => {
                 return { ...pre, productNumber: e.target.value };
                });
              }}
            />
          
          <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
              
              Product Quantity
            </label>
  
            <Input
              style={{ marginBottom: 10,padding: 10}}
              value={product?.productQuantity}
              allowClear
              onChange={(e) => {
                setProduct((pre) => {
                 return { ...pre, productQuantity: e.target.value };
                });
              }}
            />
          
          <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
              
              Product Price
            </label>
  
            <Input
              style={{ marginBottom: 10,padding: 10}}
              value={product?.productPrice}
              allowClear
              onChange={(e) => {
                setProduct((pre) => {
                 return { ...pre, productPrice: e.target.value };
                });
              }}
            />
          
           <label style={{ fontWeight: 400, color: "blue", marginBottom: 10,display:"block" }}>
              Select supplier
               
             </label>
             <Select 
              onChange={value => {
                 setProduct(pre =>{
                   return { ...pre, supplierId: value };
                   ;
                 })
             }}
             name="supplier"
             placeholder="Please select product supplier"
                   >
                  { suppliers&& 
                      Array.isArray(suppliers) &&
                      suppliers.map(supplier =>{
                         return <Option style ={{ marginBottom: 10,}} value ={supplier.supplierId}>{supplier.supplierName}</Option>
                      })}
                      </Select>

           <label style={{ fontWeight: 400, color: "blue", marginTop: 5,display:"block" }}>
              
               Order Number
            </label>
            <Input
              value={product?.orderNumber}
              allowClear
              onChange={(e) => {
                setProduct((pre) => {
                  return { ...pre, orderNumber: e.target.value };
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
              // visible={addProduct}
              okText="Save"
              onCancel={resetAddOrderProduct}
              onOk={() => {
               saveOrderProduct();
                
              }}
            >
              <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
               
               Procut name
              </label>
    
              <Input
                style={{ marginBottom: 10,padding: 10}}
                value={product?.orderProductName}
                allowClear
                onChange={(e) => {
                  setProduct((pre) => {
                   return { ...pre, orderProductName: e.target.value };
                  });
                }}
              />
                 <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
               
               Procut Quantiry
              </label>
    
              <Input
                style={{ marginBottom: 10,padding: 10}}
                value={product?.orderProductQuantity}
                allowClear
                onChange={(e) => {
                  setProduct((pre) => {
                   return { ...pre, orderProductQuantity: e.target.value };
                  });
                }}
              />
                 <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
               
               Procut Price
              </label>
    
              <Input
                style={{ marginBottom: 10,padding: 10}}
                value={product?.orderProductPrice}
                allowClear
                onChange={(e) => {
                  setProduct((pre) => {
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
         <p style={{marginTop:"40px",fontFamily:"cursive", fontSize:"30px", textDecoration:"underline"}}> UnStocked Products List</p>
            <div style={button_search}>
             
           
                <div style={search_div}>
                    <Input placeholder='Enter Order Name ' style={search_input} />
                    <Button style={search_btn}> Search</Button>
                </div>

            </div>

            <Table
                dataSource={products}
                columns={productColumns}
                bordered="true"
                style={{ marginBottom: 20 }}
            >


            </Table>

{isAdd && renderProductAddModal()}
{isEdit &&  renderEditModal () }

{isAddToInventory && renderAddProductToInventory()}




        </>
    )
}
export default ProductTable;