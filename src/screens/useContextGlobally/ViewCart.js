import React, { useContext, useEffect, useState } from 'react'
import "./Cart.css";
import { cartContext } from '../../App';

function ViewCart() {
  const [total, setTotal] = useState(0);
  const { cart } = useContext(cartContext)

  useEffect(()=>{
    setTotal(cart.reduce((acc,curr) => acc + parseInt(curr.amt),0))
  },[cart])
  return (
    <>
      <div className='cart-container'>

        {cart.map((product) => (
          <div className="cart-product" key={product.id}>
            <div className="img">
              <img src={product.pic} alt='image' />
            </div>
            <div className="cart-product-details">
              <h3>{product.name}</h3>
              <p>Price Rs : {product.amt}</p>
            </div>
          </div>
        ))}
      </div>
      <h3>Total Amount Rs: {total}</h3>
    </>
  )
}

export default ViewCart