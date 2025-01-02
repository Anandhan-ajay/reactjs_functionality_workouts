import React, { useState } from 'react'
import data from "../../assets/images/Products.json"
import Product from './Product'
import "./Home.css"

function Home() {
    const [products] = useState(data)
  return (
    <div className='product-container'>
        {products.map((product)=>(
            // <div key={product.id}>
            //     <h3>{product.name}</h3>
            // </div>
            <Product key={product.id} product={product} />
        ))}
    </div>
  )
}

export default Home