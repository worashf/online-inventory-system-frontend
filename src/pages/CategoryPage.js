
import React from  'react'
import {Layout} from 'antd'
import { SideBar } from '../components/SideBar'
import { HeaderBar } from '../components/HeaderBar'
import { FooterBar } from '../components/FooterBar'
import CategoryTable from '../components/table/CategoryTable'
import ItemContainer from './item.container'


const {Header,Content,Sider,Footer} = Layout



const CategoryPage =() =>{
    return(
        <ItemContainer>
              <CategoryTable />
        </ItemContainer>
    )
}


export default CategoryPage;