import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperPriceDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style'
import { StarFilled } from '@ant-design/icons'
import logo from '../../assets/images/logocake.jpg'

const CardComponent = () => {
    return (
        <WrapperCardStyle
            hoverable
            headStyle={{ width: '200px', height: '200px' }}
            style={{ width: 230}}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <img
                alt='logo'
                src={logo}
                style={{ width: '35px', height: '35px', position: 'absolute', top: -1, left: -1, borderTopLeftRadius: '5px' }}
            />
            <StyleNameProduct>Bánh kem</StyleNameProduct>
            <WrapperReportText>
                <span style={{ marginRight: '4px' }}>
                    <span>5 </span><StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                </span>
                <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
            </WrapperReportText>
            <WrapperPriceText>
                <span style={{marginRight: '8px'}}>1.000.000đ</span>
                <WrapperPriceDiscountText>
                    -5%
                </WrapperPriceDiscountText>
            </WrapperPriceText>
        </WrapperCardStyle>
    )
}

export default CardComponent