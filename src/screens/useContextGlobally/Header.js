import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import { cartContext } from '../../App'

function Header() {
  const {cart} = useContext(cartContext)
  return (
    <div className='navbar'>
      <div className='logo'>Food cart</div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/Cart"}> <span className='cart-count'>{cart.length}</span> View cart</Link>
          </li>
        </ul>
    </div>
  )
}

export default Header