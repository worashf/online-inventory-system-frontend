import React from 'react'
import {Layout} from 'antd'
import { SideBar } from '../components/SideBar'
import { HeaderBar } from '../components/HeaderBar'
import { FooterBar } from '../components/FooterBar'

const {Header,Content,Sider,Footer} = Layout

 const ItemContainer = ({children}) => {
  return(
<Layout className="site-layout">
                <Sider theme="light" style={{borderRight:"1px solid #111"}}>
            
                
                      <SideBar/>
            </Sider>
        <Layout>
          <Header  style={{ background:"#997105",height:100,textAlign:"center"
          ,paddingTop:20}}>
               <HeaderBar/>
             </Header>
            <Content style={{ with: "100%", height: 500 }}>
                      {children}
                    </Content>
          <Footer style={{background:"#997105",}}>
              <FooterBar/>
          </Footer>
        </Layout>
            </Layout>
   )

 }

 export default ItemContainer