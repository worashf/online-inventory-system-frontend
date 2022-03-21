import React from "react";
import  {Menu} from 'antd'
import {Link} from 'react-router-dom'



export const SideBar =()=>{



    return(
    <>
        <Menu  mode="inline" theme ="dark" className="menu">
            <Menu.Item key="/" className="menu-item" >
            <Link to="/" className="menu-link" style ={{color:"white", fontSize:"25px"}}>Button P</Link>
            </Menu.Item>
            <Menu.Item key="grid" className="menu-item">
            <Link to="/grid"  className="menu-link" style ={{color:"white", fontSize:"25px"}}> Grid Practice</Link>
            </Menu.Item>
            <Menu.Item key="laylout" className="menu-item">
            <Link to="/layout"  className="menu-link" style ={{color:"white", fontSize:"25px"}}> Layout Practice</Link>
            </Menu.Item>
            <Menu.Item key="menu" className="menu-item">
            <Link to="/menu"  className="menu-link" style ={{color:"white", fontSize:"25px"}}> Menu Practice</Link>
            </Menu.Item>
            <Menu.Item key="dropdown" className="menu-item">
            <Link to="/table"  className="menu-link" style ={{color:"white", fontSize:"25px"}}> Table Practice</Link>
            </Menu.Item>
            <Menu.Item key="form" className="menu-item" style ={{marginLeft:"20px"}}>
            <Link to="/form"  className="menu-link" style ={{color:"white", fontSize:"25px"}}> Form Practice</Link>
            </Menu.Item>
            <Menu.Item key="input" className="menu-item">
            <Link to="/input"  className="menu-link" style ={{color:"white", fontSize:"25px"}}> Input Practice</Link>
            </Menu.Item>
        </Menu>
    </>
    )
}