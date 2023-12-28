import React from 'react'
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style'
import { Badge, Col } from 'antd'

import {
    UserOutlined,
    CaretDownOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

const HeaderComponent = () => {
    return (
        <div style={{width:'100%', background:'#b1c23c',display:'flex',justifyContent:'center'}}>
            <WrapperHeader>
                <Col span={6}>
                    <WrapperTextHeader>FreshCake</WrapperTextHeader>
                </Col>
                <Col span={12}>
                    <ButtonInputSearch
                        size="large"
                        bordered={false}
                        textButton="Tìm kiếm"
                        placeholder="Nhập sản phẩm cần tìm"
                    // onSearch={onSearch}
                    />
                </Col>
                <Col span={6} style={{display: 'flex', gap:'20px', alignItems:'center'}}>
                    <WrapperHeaderAccount>
                        <div>
                            <UserOutlined style={{ fontSize: '30px' }} />
                        </div>
                        <div>
                            <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                            <div>
                                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccount>
                    <div>
                        <Badge count={4} size="small">
                            <ShoppingCartOutlined style={{ fontSize: '30px', color : '#fff' }}/>
                        </Badge>
                            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent