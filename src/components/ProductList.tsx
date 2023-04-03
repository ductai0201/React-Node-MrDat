import React from 'react'
import { IProduct } from '../interfaces/product'

type ProductListProps = {
    products: IProduct[]
}

const ProductList = ({products,onRemove}:ProductListProps) => {
    if(!products) return <div>Loading....</div>
  
  return (
    <div >
        {products?.map((item,index)=> <div key={index}>{item.name} <button onClick={()=> onRemove(item._id)}> Xóa </button></div>)}
    </div>
  )
}

export default ProductList