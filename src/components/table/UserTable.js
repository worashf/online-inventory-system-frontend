
import React,{useState,useEffect} from 'react'
import {Table,Button,Input,Modal,Select,message} from 'antd'
import {EditOutlined,DeleteOutlined,MoreOutlined,
    BlockOutlined,PlusSquareOutlined,UserOutlined} from "@ant-design/icons"
import { useSelector,useDispatch } from 'react-redux'
import { addRole,listRoles,deleteRole,updateRole} from '../../redux/actions/roleActions'
import { addUser,listUsers } from '../../redux/actions/userAction'

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
    "marginLeft": "10px",
    "fontSize": "20px",
    "paddingBottom":"20px",
    "border":"1px solid #6e6859 "

}

const search_div = {
    "display":"flex"
}
const {Option} =Select
const UserTable =() =>{

 const [isAddRole,setIsAddRole] =useState(false);
 const [isAddUser, setIsAddUser] =useState(false);
 const [role,setRole] =useState(null);
 const [user,setUser] =useState(null);



const roles = useSelector(state=> state.roles);
const users = useSelector(state=>state.users.users);
const dispatch = useDispatch();


useEffect(()=>{
    dispatch(listRoles())
    dispatch(listUsers())
},[])

const handleAddRole =() =>{
    setIsAddRole(true)

}
const resetAddRole =()=>{
    setIsAddRole(false)
    setRole(null)
}

const handleAddUser =() =>{
    setIsAddUser(true);

}
const resetAddUser=()=>{
    setIsAddUser(false);
    setUser(null);
}
    const UserColumns =[
        {
            key:1,
            title:"User Id",
            dataIndex: "userId",

        },
        {
            key:2,
            title:"First Name",
            dataIndex: "firstName",

        },
        {
            key:3,
            title:"Last Name",
            dataIndex: "lastName",

        },
        {
            key:4,
            title:"Email",
            dataIndex: "email",

        },
        {
            key:5,
            title:"Status ",
            dataIndex: "userStatus",
        },
      {
key:6,
title:"User Name",
dataIndex: "userName"
      },
        {
            key:7,
            title:"Actions",
            render:(record)=>{
                return(
                    <>
                      <Button style={{border:"2px solid #797772"}} icon ={<MoreOutlined />}> Details</Button>
                     <EditOutlined style={{ color: "blue", marginLeft: 10, fontSize: 18 }}  /> 
                        <DeleteOutlined style={{ color: "red", marginLeft: 10, fontSize: 18 }} />
                        <Button style={{border:"2px solid #797772",marginLeft:10}} icon ={<BlockOutlined />}>Block User</Button>
                    </>
                )
            }

        }
    ]


  const renderRoleAddModal = () => {
    return (
      <>
        <Modal
          title="Add Role"
          visible={isAddRole}
          okText="Save"
          onCancel={resetAddRole}
          onOk={() => {
          dispatch(addRole(role))
          message.success("saved",1)
          resetAddRole()
          }}
        >
          <label style={{ fontWeight: 400, color: "blue", marginBottom: 10 }}>
           
            Role Name
          </label>

          <Input placeholder='Enter Role Name'
            style={{ marginBottom: 10 }}
            value={role?.roleName}
            allowClear
            onChange={(e) => {
              setRole((pre) => {
                return { ...pre, roleName: e.target.value };
              });
            }}
          />

         
        </Modal>
      </>
    );
  };


  const renderUserAddModal = () => {
    return (
      <>
        <Modal
          title="Add User"
          visible={isAddUser}
          okText="Save"
          onCancel={resetAddUser}
          onOk={() => {
          dispatch(addUser(user))
          message.success("saved",1)
           resetAddUser()
          }}
        >
              <label style={{ fontWeight: 400, color: "blue", marginBottom: 10,display:"block" }}>
           
           Select User Role
         </label>
                  <Select 
               onChange={value => {
                  setUser(pre =>{
                    return { ...pre, roleId: value };
                    ;
                  })
              }}
              name="user type"
              placeholder="Please select user type"
                    >
                   { roles&& 
                       Array.isArray(roles) &&
                    roles.map(role=>{
                          return <Option  style ={{ marginBottom: 10,}} value ={role.roleId}>{role.roleName}</Option>
                       })}
                       </Select>
          <label style={{ fontWeight: 400, color: "blue", marginBottom: 10,marginTop:10,display:"block" }}>
           
        First Name
          </label>

          <Input placeholder='Enter First Name'
            style={{ marginBottom: 10 }}
            value={user?.firstName}
            allowClear
            onChange={(e) => {
              setUser((pre) => {
                return { ...pre, firstName: e.target.value };
              });
            }}
          />
    <label style={{ fontWeight: 400, color: "blue", marginBottom: 10,marginTop:10,display:"block" }}>
           
           Last Name
             </label>
   
             <Input placeholder='Enter Last Name'
               style={{ marginBottom: 10 }}
               value={user?.lastName}
               allowClear
               onChange={(e) => {
                 setUser((pre) => {
                   return { ...pre, lastName: e.target.value };
                 });
               }}
             />
                 <label style={{ fontWeight: 400, color: "blue", marginBottom: 10,marginTop:10,display:"block" }}>
           
           User Name
             </label>
   
             <Input placeholder='Enter User Name'
               style={{ marginBottom: 10 }}
               value={user?.userName}
               allowClear
               onChange={(e) => {
                 setUser((pre) => {
                   return { ...pre, userName: e.target.value };
                 });
               }}
             />
                 <label style={{ fontWeight: 400, color: "blue", marginBottom: 10,marginTop:10,display:"block" }}>
              Email
             </label>
   
             <Input placeholder='Enter email'
               style={{ marginBottom: 10 }}
               value={user?.email}
               allowClear
               onChange={(e) => {
                 setUser((pre) => {
                   return { ...pre, email: e.target.value };
                 });
               }}
             />
                 <label style={{ fontWeight: 400, color: "blue", marginBottom: 10,marginTop:10,display:"block" }}>
           
        Password
             </label>
   
             <Input.Password placeholder='Enter Password'
               style={{ marginBottom: 10 }}
               value={user?.password}
               allowClear
               onChange={(e) => {
                 setUser((pre) => {
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
           <div style={button_search}>
        <Button  onClick={handleAddRole} icon ={<PlusSquareOutlined  style ={{color:"#fff"}}/>} size="large" style={add_button}>
          Create Role
        </Button>
        <Button  onClick={handleAddUser} icon ={<UserOutlined style ={{color:"#fff"}}/>} size="large" style={add_button}>
          Create User
        </Button>
      </div>

        <Table 
        dataSource={users}
        columns ={UserColumns}
        bordered="true"
        >

        </Table>
        {isAddRole && renderRoleAddModal()}
        {isAddUser && renderUserAddModal()}
        </>
    )
}
export default UserTable;