import  React from 'react'
import {Card, Row,Col} from "antd"



const company ={
    companyId:1,
    companyName:"Zan Zu Trading",
    phone1:"+251955986083",
    phone2:"+251922865193",
    email:"zan@gmail.com",
    country:"Ethiopia",
    city:"Addis Ababa",
    sub_city:"Bole",
    street:"bole road",
    state:"A.A",
    postalCode:"1000"
}


const CompanyCard =()=>{
    return(
        <>
        <Row>
         <Col span={24}> <h1 style={{fontSize:20}}> <span style={{fontWeight:600,marginRight:20}}>Company Name :</span>  <span  style={{fontWeight:500, fontFamily:"cursive"}}> {company.companyName}</span> </h1></Col>


        </Row>
        <Row>
        <Col span={12}>
        <Card title ="Contact Information">
        <h2> <span style={{fontWeight:600,marginRight:20}}> Email:</span>{company.email}</h2>
        <h2><span style={{fontWeight:600,marginRight:20}}> Phone 1:</span>{company.phone1}</h2>
        <h2><span style={{fontWeight:600,marginRight:20}}> Phone 2:</span>{company.phone2}</h2>


        </Card>
        </Col>
        <Col span={12}>
        <Card title ="Address Information" >
        <h2><span style={{fontWeight:600,marginRight:20}}> Country:</span>{company.country}</h2>
        <h2> <span style={{fontWeight:600,marginRight:20}}> City:</span>{company.city}</h2>
        <h2><span style={{fontWeight:600,marginRight:20}}>Sub City</span>{company.sub_city}</h2>
        <h2> <span style={{fontWeight:600,marginRight:20}}> Street:</span>{company.street}</h2>
        <h2> <span style={{fontWeight:600,marginRight:20}}> State:</span>{company.state}</h2>
        <h2><span style={{fontWeight:600,marginRight:20}}> Postal Code</span>{company.postalCode}</h2>

        </Card>
            </Col>
        </Row>
        
        </>
    )
}


export default CompanyCard;