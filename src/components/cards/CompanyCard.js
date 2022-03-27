import  React,{useState,useEffect} from 'react'
import {Card, Row,Col,Form,Button,Input,Modal} from "antd"
import { useDispatch, useSelector } from 'react-redux';
import {listCompany,addCompany,updateCompany} from '../../redux/actions/companyAction'





const CompanyCard =()=>{
   
    const company = useSelector((state) =>state.company);
    const [newCompany,setNewCompany] = useState(null);
    const [isAdd,setIsAdd] = useState(false);
    const [address ,setAddress] =useState(null);
    
    const dispatch =useDispatch();


    useEffect(()=>{
        dispatch(listCompany())
    },[dispatch])



const handleSubmit =() =>{
    dispatch(addCompany(newCompany));
}
const resetAdd =() =>{
    setIsAdd(false);
    setAddress(null);
}


    const compCard =()=>{
        return (
            <>
            <Row>
    <Col span={24}> <h1 style={{fontSize:20}}> <span style={{fontWeight:700,marginRight:20,color:"blue"}}>Company Name :</span>  <span  style={{fontWeight:500, fontFamily:"cursive"}}> {company.companyName}</span> </h1></Col>


   </Row>
   <Row>
   <Col span={12}>
   <Card title ="Contact Information">
   <h2> <span style={{fontWeight:600,marginRight:20 ,color:"blue"}}> Email:</span>{company.email}</h2>
   <h2><span style={{fontWeight:600,marginRight:20,color:"blue"}}> Phone 1:</span>{company.phone1}</h2>
   <h2><span style={{fontWeight:600,marginRight:20,color:"blue"}}> Phone 2:</span>{company.phone2}</h2>


   </Card>
   </Col>
   <Col span={12}>
   <Card title ="Address Information" >
     {company.address?(
     <div>
    <h2><span style={{fontWeight:600,marginRight:20}}> Country:</span>{company.country}</h2>
   <h2> <span style={{fontWeight:600,marginRight:20}}> City:</span>{company.city}</h2>
   <h2><span style={{fontWeight:600,marginRight:20}}>Sub City</span>{company.sub_city}</h2>
   <h2> <span style={{fontWeight:600,marginRight:20}}> Street:</span>{company.street}</h2>
   <h2> <span style={{fontWeight:600,marginRight:20}}> State:</span>{company.state}</h2>
   <h2><span style={{fontWeight:600,marginRight:20}}> Postal Code</span>{company.postalCode}</h2>
     </div>
     )
:(
     <div>
 <Button onClick={() =>setIsAdd(true)} size ="large" style={{background:"blue",color:"#fff"}}>Add Address</Button>
     </div>)
        
     }
 
   </Card>
       </Col>
   </Row>
            </>
        )
    }

    const compForm  =() =>{
        return (
            <Form  style={{marginTop:20}}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            initialValues={{ remember: true }}


            autoComplete="off"
        >
            <Form.Item
                label="Company Name"
                name="companyName"
                rules={[{ required: true, message: 'Enter company name' }]}
            >
                <Input  placeholder='enter company name' value={newCompany?.companyName} 
                onChange ={(e) =>{
                    setNewCompany(pre=>{
                      return{...pre,companyName:e.target.value}  
                    })
                }}
                />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Enter company email' }]}
            >
                <Input  placeholder='enter comapany email' value={newCompany?.email}     
                onChange ={(e) =>{
                    setNewCompany(pre=>{
                      return{...pre,email:e.target.value}  
                    })
                }}/>
            </Form.Item>

            <Form.Item
                label="Phone1"
                name="phone1"
                
            >
                <Input  placeholder=' enter comapny phone1' value={newCompany?.phone1}   
                   onChange ={(e) =>{
                    setNewCompany(pre=>{
                      return{...pre,phone1:e.target.value}  
                    })
                }}/>
            </Form.Item>
            <Form.Item
                label="Phone2"
                name="phone2"
                
            >
                <Input  placeholder='enter company phone2' value={newCompany?.phone2} 
                     onChange ={(e) =>{
                        setNewCompany(pre=>{
                          return{...pre,phone2:e.target.value}  
                        })
                    }}/>
            </Form.Item>


            <Form.Item wrapperCol={{ offset: 8, span: 10 }}>
                <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form.Item>
        </Form> 
        )
    }
return(
     
    <>
    {company? compCard():compForm()}
    <Modal 
    title ="Add address information"
    visible ={isAdd}
    okText ="Save"
    onCancel={resetAdd}
    onOk ={()=>{

    }}

    >
        <Input placeholder='Enter Coutry' style={{marginBottom:10,padding:10}}/>
        <Input placeholder='Enter City' style={{marginBottom:10,padding:10}}/>
        <Input placeholder='Enter Sub City' style={{marginBottom:10,padding:10}}/>
        <Input placeholder='Enter Street' style={{marginBottom:10,padding:10}}/>
        <Input placeholder='Enter State' style={{marginBottom:10,padding:10}}/>
        <Input placeholder='Enter Postal Code' style={{marginBottom:10,padding:10}}/>

    </Modal>
    </>
)
    
       
            
   
}


export default CompanyCard;