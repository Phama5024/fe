import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperPriceDiscountText, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style'
import { StarFilled } from '@ant-design/icons'
import logo from '../../assets/images/logocake.jpg'
import { useNavigate } from 'react-router-dom'
import { convertPrice } from '../../utils'

const CardComponent = (props) => {
    const {countInStock,description,image,name,price,rating,type,selled,discount,id} = props
    const navigate = useNavigate()
    const handleDetailsProduct = (id) =>{
        navigate(`/product-details/${id}`)
    }
    return (
        <WrapperCardStyle
            hoverable
            headStyle={{ width: '200px', height: '200px' }}
            style={{ width: 230}}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src={image} />}
            onClick={() => handleDetailsProduct(id)}
        >
            <img
                alt='logo'
                src={logo}
                style={{ width: '35px', height: '35px', position: 'absolute', top: -1, left: -1, borderTopLeftRadius: '5px' }}
            />
            <StyleNameProduct>{name}</StyleNameProduct>
            <WrapperReportText>
                <span style={{ marginRight: '4px' }}>
                    <span>{rating}</span><StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                </span>
                <WrapperStyleTextSell> | Đã bán {selled || 1000}</WrapperStyleTextSell>
            </WrapperReportText>
            <WrapperPriceText>
                <span style={{marginRight: '8px'}}>{convertPrice(price)}</span>
                <WrapperPriceDiscountText>
                   - {discount || 5}%
                </WrapperPriceDiscountText>
            </WrapperPriceText>
        </WrapperCardStyle>
    )
}

export default CardComponent