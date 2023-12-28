import React from 'react'
import ProductDetailsComponent from '../../components/ProductDetailsComponent/ProductDetailComponent'

const ProductDetailPage = () => {
  return (
    <div style={{padding: '0 120px', background: '#efefef', height: '1000px'}}>
        <h5 style={{marginTop: 0, marginBottom: 0}}>Trang chủ</h5>
        <div>
            <ProductDetailsComponent/>
        </div>
    </div>
  )
}

export default ProductDetailPage