
import React,{useState,useEffect} from 'react'
import {Table,Button,Input,Modal} from 'antd'
import {EditOutlined,DeleteOutlined, DownCircleOutlined} from "@ant-design/icons"
import { useDispatch,useSelector } from 'react-redux'
import { listBrands ,addBrand,updateBrand,deleteBrand} from '../../redux/actions/brandActions'

const { TextArea } = Input;
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
const BrandTable =() =>{

  const [isAdd, setIsAdd] = useState(false);
  const [isEdit,setIsEdit] =useState(false);

  const [brand,setBrand] =useState(null);
    
  const brands = useSelector(state =>state.brands);
 
  const dispatch =useDispatch();

    const BrandColumns =[
        {
            key:1,
            title:"Brand ID",
            dataIndex: "brandId",

        },
        {
            key:2,
            title:"Brand Name",
            dataIndex: "brandName",

        },
        {
            key:3,
            title:"Actions",
            render:(record)=>{
                return(
                    <>
                     <EditOutlined onClick={() =>{handleEditBrand(record)}} style={{ color: "blue", marginLeft: 10, fontSize: 18 }}  /> 
                  <DeleteOutlined style={{ color: "red", marginLeft: 10, fontSize: 18 }} 
                   onClick ={()=>{handleDeleteBrand(record)}}/>
                    </>
                )
            }

        }
    ]
useEffect(() =>{
 dispatch(listBrands())
},[dispatch])

const handleAddBrand =() =>{
    setIsAdd(true)
}


const resetAdd =()=>{
    setIsAdd(false);
    setBrand(null);
}
const handleDeleteBrand =(brand) =>{
    Modal.confirm({
        title: "are you sure to delete this brand",
        okText: "Yes",
        okType: "danger",
        onOk: () => {
            dispatch(deleteBrand(brand));
        }
    })
}

const handleEditBrand =(brand) =>{
    setIsAdd(false);
 setIsEdit(true);
 setBrand({...brand})

}

const resetEditing =() =>{
    setIsEdit(false);
    setBrand(null);

    }
    const renderAddModal = () => {
        return (
            <>
            <Modal
         title ="Add Brand"
         visible ={isAdd}
         okText ="Save"
         onCancel={resetAdd}
         onOk ={()=>{
           
          
             dispatch(addBrand(brand));
             // setIsAdd(false)
        
          
             
         }}
         
         >
             <label style={{fontWeight:400,color:"blue", marginBottom:5}}> Brand Name</label>
 
 <Input style={{marginBottom:10}} value ={brand?.brandName} allowClear onChange ={(e) =>{
     setBrand(pre =>{
         return {...pre, brandName:e.target.value}
     })
 }}/>
 <label style={{fontWeight:400,color:"blue", marginBottom:5}}> Brand Description</label>
 <TextArea value={brand?.brandDescription} allowClear onChange ={(e) =>{
 setBrand(pre =>{
     return {...pre,brandDescription:e.target.value}
 })
 }}/>
         </Modal>
            </>
        )
    }



    const renderEditModal = () => {
        return (
            <>
                <Modal
    title ="Update Brand"
    visible ={isEdit}
    okText ="Update"
    okType="primary"
    onCancel={resetEditing}
    onOk ={()=>{
       dispatch(updateBrand(brand));
          setIsEdit(false);
    }}
    
    >
        <label style={{fontWeight:400,color:"blue", marginBottom:5}}> Brand Name</label>

<Input style={{marginBottom:10}} value ={brand?.brandName} allowClear onChange ={(e) =>{
setBrand(pre =>{
    return {...pre, brandName:e.target.value}
})
}}/>
<label style={{fontWeight:400,color:"blue", marginBottom:5}}> Brand Description</label>
<TextArea value={brand?.brandDescription} allowClear onChange ={(e) =>{
setBrand(pre =>{
return {...pre,brandDescription:e.target.value}
})
}}/>
    </Modal> 

            </>
        )
    }
    return (
        <>
            <div style={button_search }>
                <Button icon ={<DownCircleOutlined  style={ {color:"#fff"}}/>} size ="large" style={add_button} onClick ={handleAddBrand}>Add Brand</Button>
                <div style={search_div}>
                <Input placeholder='Enter Brand Name ' style={search_input} />
                <Button  style={search_btn}> Search</Button>
                </div>
            
            </div>  

        <Table 
        dataSource={brands}
        columns ={BrandColumns}
        bordered="true"
        >

        </Table>
    {isAdd?renderAddModal():renderEditModal()}
 
        
        </>
    )
}
export default BrandTable;