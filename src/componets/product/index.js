import { Col, Row } from 'antd';
import React from 'react';
import './product.css';
const Product = () => {
    return(
        <Row className="product">
            <Col span={24}>
            <Row>
                <h3>Product</h3>
            </Row>
            </Col>
        </Row>
    )
}
export default Product;