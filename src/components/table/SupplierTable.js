
import React,{useState,useEffect} from 'react'
import {Table,Button,Input ,Modal, message} from 'antd';
import { useDispatch,useSelector } from 'react-redux';
import { deleteSupplier,listSuppliers,approveSupplier,declineSupplier } from '../../redux/actions/supplierActions';
import {
    EditOutlined,
    DeleteOutlined,
    MoreOutlined,
    BlockOutlined 
} from "@ant-design/icons"

const button_search = {
    "marginTop": "30px",
    "marginBottom":"20px"
}
const add_button = {
    "background": "#797772",
    "color": "#111",
    "height":"50px",
    "marginBottom": "20px",
    "borderRadius": "5px",
    "fontSize": "20px",
    "paddingBottom":"20px",
    "border":"1px solid #6e6859 "

}

const search_div = {
    "display":"flex"
}
const search_input = {
    "width": "30%",
    "marginLeft": "5%",
    "padding": "10px",
    "border": "2px solid #6e6859 ",
    "color":"#111"
    
}
const search_btn = {
    "height": "50px",
    "border": "2px solid #6e6859 ",
    "marginLeft": "5px",
    "borderRadius": "5px",
    "fontSize":"20px"
    
}


 
const SupplierTable =() =>{
const [isApprove, setIsApprove] =useState(false);
 const [supplier,setSupplier] =useState(null);
 const [supplierId,setSupplierId] =useState("")


 const suppliers = useSelector(state=>state.suppliers)
 const dispatch = useDispatch();


useEffect(()=>{
    dispatch(listSuppliers())
},[dispatch])

const handleSupplierDelete= (supplier) =>{
    Modal.confirm({
        title: "Are you shure to delete this supplier",
        okText: "Yes",
        okType: "danger",
        onOk: () => {
            dispatch(deleteSupplier(supplier));
        }
    })
}
const handleAprove =(supplier)=>{
   const {supplierId} =supplier
setIsApprove(true)
setSupplierId(supplierId)

}

const resetApproving =() =>{
    setIsApprove(false)
    setSupplier(null)
    setSupplierId("")
}
const handleDecline =(supplier)=>{

    dispatch(declineSupplier(supplier))
    message.success("declined",1)
 }
 


const SupplierColumns =[
    {
        key:1,
        title:"Supplier ID",
        dataIndex: "supplierId",

    },
    {
        key:2,
        title:"Supplier Name",
        dataIndex: "supplierName",

    },
    {
        key:3,
        title:"Email",
        dataIndex: "email",

    },
    {
        key:4,
        title:"Phone 1",
        dataIndex: "phone1",

    },
  
    {
        key:5,
        title:"User Name",
        dataIndex: "userName",

    },
    
    {
        key:6,
        title:"Status",
        dataIndex: "supplierStatus",

    },
     
    {
        key:7,
        title:"Actions",
        render:(record)=>{
            return(
                <>

    
                 <Button  onClick={()=> handleSupplierDelete(record)}icon= {<DeleteOutlined  /> } style={{ color: "red", marginLeft: 10, fontSize: 18 }} />
              
                            <Button onClick={()=>handleAprove(record)} style={{border:"2px solid #797772",marginLeft:10,marginRight:10}} icon ={<BlockOutlined />}>Approve</Button>
                  
                 
                   <Button  onClick={()=>handleDecline(record)} style={{border:"2px solid #797772"}} icon ={<MoreOutlined />}> Decline</Button>
                </>
            )
        }

    }
]

const renderCreateSupplierAcountModal = () => {
    return (
      <>
        <Modal
          title="Create Supplier Account"
          visible={isApprove}
          okText="create"
          onCancel={resetApproving}
          onOk={() => {
             dispatch(approveSupplier(supplierId, supplier))
             resetApproving()
          }}
        >
          <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
           
            User Name
          </label>

          <Input placeholder='Enter User Name'
            style={{ marginBottom: 10 }}
            value={supplier?.userName}
            allowClear
            onChange={(e) => {
              setSupplier((pre) => {
                return { ...pre, userName: e.target.value };
              });
            }}
          />
          <label style={{ fontWeight: 400, color: "blue", marginBottom: 5 }}>
           
           Password
          </label>
          <Input.Password placeholder='Enter Password'
            value={supplier?.password}
            allowClear
            onChange={(e) => {
              setSupplier((pre) => {
                return { ...pre, password: e.target.value };
              });
            }}
                />
            
         
        </Modal>
      </>
    );
    };
    

    return (
        <>
            <div style={button_search }>
            
                <div style={search_div}>
                <Input placeholder='Enter Supplier Name ' style={search_input} />
                    <Button style={search_btn}> Search</Button>
                   
                </div>
            
            </div>  

        <Table 
        dataSource={suppliers}
        columns ={SupplierColumns}
        bordered="true"
        >

        </Table>
        {isApprove && renderCreateSupplierAcountModal()}
        </>
    )
}
export default SupplierTable;