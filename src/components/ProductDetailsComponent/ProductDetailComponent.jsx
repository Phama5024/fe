import { Col, Image, Row } from 'antd'
import React from 'react'
import imageProduct from '../../assets/images/BanhkemChristmas.webp'
import imageProductSmall from '../../assets/images/BanhkemChristmas.webp'
import { WrapperAddressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQuantityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './style'
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ProductDetailComponent = () => {
    const onChange = () => { }
    return (
        <Row style={{ padding: '16px', background: '#fff', borderRadius:'4px' }}>
            <Col span={10} style={{borderRight:'1px solid #e5e5e5', paddingRight: '8px'}}>
                <Image src={imageProduct} alt="image product" preview={false} />
                <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
                    <WrapperStyleColImage span={6}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={6}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={6}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={6}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image small" preview={false} />
                    </WrapperStyleColImage>
                </Row>
            </Col>
            <Col span={14} style={{paddingLeft: '10px'}}>
                <WrapperStyleNameProduct>Bánh kem Christmas</WrapperStyleNameProduct>
                <div>
                    <StarFilled style={{ fontSize: '13px', color: 'yellow' }} />
                    <StarFilled style={{ fontSize: '13px', color: 'yellow' }} />
                    <StarFilled style={{ fontSize: '13px', color: 'yellow' }} />
                    <StarFilled style={{ fontSize: '13px', color: 'yellow' }} />
                    <StarFilled style={{ fontSize: '13px', color: 'yellow' }} />
                    <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
                </div>
                <WrapperPriceProduct>
                    <WrapperPriceTextProduct>200.000đ</WrapperPriceTextProduct>
                </WrapperPriceProduct>
                <WrapperAddressProduct>
                    <span>Giao tới </span>
                    <span className='address'>Phương Liệt, Thanh Xuân, Hà Nội </span> -
                    <span className='change-address'> Đổi địa chỉ</span>
                </WrapperAddressProduct>
                <div style={{margin:'10px 0 20px',padding:'10px 0', borderTop:'1px solid #e5e5e5', borderBottom:'1px solid #e5e5e5'}}>
                    <div style={{marginBottom: '10px'}}>Số lượng</div>
                    <WrapperQuantityProduct>
                        <button style={{border: 'none', background:'transparent'}}>
                            <MinusOutlined style={{ color: '#000', fontSize: '15px' }} />
                        </button>
                        <WrapperInputNumber defaultValue={1} onChange={onChange} size="small" />
                        <button style={{border: 'none', background:'transparent'}}>
                            <PlusOutlined style={{ color: '#000', fontSize: '15px' }} />
                        </button>
                    </WrapperQuantityProduct>
                </div>
                <div style={{display:'flex', alignItems:'center', gap:'12px' }}>
                    <ButtonComponent
                        bordered={false}
                        size={40}
                        styleButton={{ 
                            background: '#b1c23c',
                            height: '48px',
                            width: '220px',
                            border: 'none',
                            borderRadius: '4px'
                        }}
                        textButton={'Đặt hàng'} 
                        styleTextButton={{color : '#fff', fontSize: '15px', fontWeight: '700'}}
                    ></ButtonComponent>
                    <ButtonComponent
                        bordered={false}
                        size={40}
                        styleButton={{ 
                            background: '#fff',
                            height: '48px',
                            width: '220px',
                            border: '1px solid #212529',
                            borderRadius: '4px'
                        }}
                        textButton={'Mua ngay'} 
                        styleTextButton={{color : '#212529', fontSize: '15px'}}
                    ></ButtonComponent>
                </div>
            </Col>
        </Row>
    )
}

export default ProductDetailComponent