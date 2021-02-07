import React from 'react';
import banner from '../../assets/img/banner.jfif';
import { Col, Row } from 'antd';

const Banner = () => {
    return(
        <Row>
            <img width="100%" height="80%" src={banner} alt="" />
        </Row>
    )
}
export default Banner;