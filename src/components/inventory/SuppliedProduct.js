
import React, { useState, useEffect } from 'react'
import { Table, Button, Select, Input, Modal,DatePicker, message } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct,listProducts,deleteProduct,updateProduct } from '../../redux/actions/productAction'
import axios from 'axios'
import moment from 'moment';

import { EditOutlined, DeleteOutlined, DownCircleOutlined, UpCircleOutlined, RightCircleOutlined } from "@ant-design/icons"



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
const SuppliedProduct = () => {

const [isAddProduct,setIsAddProduct]=useState(false);
 const[product,setProduct] =useState(null);
 const [order, setOrder] = useState(null);
 const [orderId,setOrderId] =useState("");
 const [categoryId,setCategoryId] =useState("");
 const [brandId,setBrandId] =useState("");
 const [suppliedProductId,setSuppliedProductId]=useState("")
 const products = useSelector(state => state.products);
 const   suppliers =useSelector(state =>state.suppliers); 
 const categories =useSelector(state=>state.categories);
 const brands = useSelector(state=>state.brands);

 const [suppliedProducts,setSuppliedProducts] =useState([]);



 const dispatch =useDispatch();

 const listAllsendProducts =async()=>{
     const response = await axios.get('/api/supplied-products/send')
     setSuppliedProducts(response.data)
 }
   useEffect(()=>{
listAllsendProducts()
   },[]) 

   const handleAddProduct =(suppliedProduct)=>{
       const {suppliedProductId, suppliedProductName} =suppliedProduct;
       setSuppliedProductId(suppliedProductId)
        setIsAddProduct(true)

   } 

   const resetAdd =()=>{
   setIsAddProduct(false)
   }
  
   const handleDeleteSuppliedProduct=async(supProduct) =>{
       const {suppliedProductId} =supProduct;
       const res = await axios.delete(`/api/supplied-products/${suppliedProductId}`)
       if(res.data ==="deleted"){
        message.success("deleted",1)
       }
     
   }
   
  

 





    const SuppliedProductColumns = [
        {
            key: 1,
            title: "product Id",
            dataIndex: "suppliedProductId",

        },
        {
            key: 2,
            title: "product  Name",
            dataIndex: "suppliedProductName",

        },
      
        {
          key: 3,
          title: "Quantity",
          dataIndex: "suppliedProductQuantity",

      },
      {
        key: 4,
        title: "Unit Price",
        dataIndex: "suppliedProductPrice",

    },
  {
            key: 5,
            title: "Actions",
            render: (record) => {
                return (
                    <>
                      <Button icon ={<EditOutlined />} style={{ color: "blue", marginLeft: 10, fontSize: 18 }} />
                   <Button onClick={()=>handleDeleteSuppliedProduct(record)} icon ={ <DeleteOutlined />} style={{ color: "red", marginLeft: 10, fontSize: 18 }} />
                        <Button  onClick={()=>handleAddProduct(record)}> Add  Product</Button>
               
                    </>
                )
            }

        }
    ]
     const renderProductAddModal = () => {
        return (
          <>
            <Modal
              title= "Add Product Information"
              visible={isAddProduct}
              okText="Save"
              onCancel={resetAdd}
              onOk={() => {
                 
                dispatch(addProduct(suppliedProductId,product))
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
             Expiry Date
                
              </label>
            <DatePicker 
             style={{ marginBottom: 10,padding: 10,width:"100%"}}
             value={product?.expiryDate}
             format={"YYYY/MM/DD"}
             onChange={(date, dateString) => 
            {
                
               setProduct((pre) => {
                return { ...pre, expiryDate: moment(dateString)};
               });
             }}/>
            <label style={{ fontWeight: 400, color: "blue", marginBottom: 10,display:"block" }}>
               Select supplier
                
              </label>
              <Select  style={{width:"100%"}}
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
              <Select  style={{width:"100%"}}
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
              <Select style={{width:"100%"}}
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

    
  

    return (
        <>
             <p style={{marginTop:"40px",fontFamily:"cursive", fontSize:"30px", textDecoration:"underline"}}> Supplied Products List</p>
          
            <div style={button_search}>
              <div style={search_div}>
                    <Input placeholder='Enter Order Name ' style={search_input} />
                    <Button style={search_btn}> Search</Button>
                </div>

            </div>

            <Table
                dataSource={suppliedProducts}
                columns={SuppliedProductColumns}
                bordered="true"
                style={{ marginBottom: 20 }}
            >


            </Table>

{isAddProduct && renderProductAddModal() }

        </>
    )
}
export default SuppliedProduct;