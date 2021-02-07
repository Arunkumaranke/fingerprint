import React from 'react';
import './header.css';
import { Col, Row, Typography } from 'antd';
import { MailFilled, PhoneFilled } from '@ant-design/icons';
import logo from '../../assets/img/tsugami.jpg';

const { Text } = Typography;
const Header = () =>{
    return(
        <>
        <Row className="header">
            <Col className="header-data" span={24}>
                <Row className="headerContent">
                <PhoneFilled />
                <Text>1800 3456 2458</Text>
                <MailFilled />
                <Text>info.tech@gmail.com</Text>
                </Row>
                <Row justify className="headerContent">
                    <Col className="flex" span={10}>
                    <img className="img" src={logo} alt="" />
                    </Col>
                    <Col className="flex header-text" span={14}>
                    <span>CNC Lathe</span>
                    <span>CNC Sliding Head Stock</span>
                    <span>CNC Turnmill Centre</span>
                    <span>ENQUIRE NOW</span>
                    </Col>
                </Row>
            </Col>
        </Row>
       </>
    )
}
export default Header;