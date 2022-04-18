import React,{useState,useEffect} from 'react';
import { Form, Input,Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { checkTokenAsync } from '../redux/actions/userAction';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import {Link} from "react-router-dom"


const form_div = {
    "background": "#6e6859 ",
    "padding": "20px 20px",
    "widht": "50%",
  
}
const div_css ={
    "height":"90vh",
    "background": "#6e6859 ",
}

const token = localStorage.getItem("token");
const Login  = () => {

    const [data,setData] = useState(null);
    const currentUser=useSelector(state=> state.users.currentUser)
    const navigate = useNavigate();
    const dispatch = useDispatch();

  

    const handleLoginSubmit =async(e) =>{
       e.preventDefault(); 
       const params = new URLSearchParams();
   
       const {userName,password} = data;
      console.log(data)
      params.append("userName",userName);
      params.append("password",password);
   
         const response = await axios.post("http://localhost:8080/api/login",params, { headers: {
           
         'Content-Type': 'application/x-www-form-urlencoded',
         }});
   
         localStorage.setItem("token",response.data.access_token)
        
         
         
                navigate("/home")
      
     
    }
   

    return (
        <>
        <div style={{background:"#ccb15f",height:50}}>
        <h1 style={{color :"#fff",fontSize:30,fontFamily:"cursive" }}> Online Inventory Management System</h1>

        </div>
         <div style={div_css}>

   
        <Form style={form_div} 
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                initialValues={{ remember: true }}
                autoComplete="off"
            >

                <Form.Item
                    label="User name"
                    name="User name"
                    rules={[{ required: true, message: 'Please input your user name' }]}
                >
                    <Input  placeholder='Enter user name'  value={data?.userName}  
                    onChange={(e) => {
                        setData((pre) => {
                         return { ...pre, userName: e.target.value };
                        });
                      }} />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="Password"
                    rules={[{ required: true, message: 'Please input your password' }]}
                >
                    <Input.Password  placeholder='Enter your password' value={data?.password}
                 onChange={(e) => {
                    setData((pre) => {
                     return { ...pre, password: e.target.value };
                    });
                  }} />
                </Form.Item>



                <Form.Item wrapperCol={{ offset: 8, span: 10 }}>
                    <Button type="primary" htmlType="submit" onClick={handleLoginSubmit}>
                        Login
                    </Button>
                </Form.Item>


            </Form>
            <div>
            <div style={{display:"flex",marginLeft: 200}}>
                <h3 style={{color:"#fff",fontFamily:"cursive",fontSize:25}}>Become Supplier?</h3>
            <Link  to ="/signup" style={{marginLeft:10,height:40,
                background:"#325ca8" ,color:"#fff",borderRadius:5,padding:10}} >
                       SignUp Here
              </Link>
              </div>
              <div style={{display:"flex",marginLeft: 200}}>
              <h3 style={{color:"#fff",fontFamily:"cursive",fontSize:25}}> Become Customer?</h3>
            <Link  to ="/signup" style={{marginLeft:10,height:40,
                background:"#a89432" ,color:"#fff",borderRadius:5,padding:10}} >
                       SignUp Here
              </Link>

            </div>
            </div>
            </div>
        
        </>
    )
}
export default  Login;

