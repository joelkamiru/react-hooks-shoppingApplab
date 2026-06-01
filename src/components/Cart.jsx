import React from 'react'

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      
    
      <p>Total Items: {cartItems.length}</p>

      <ul>
        {/* TODO: Include items here in li tags with text 'ITEM.NAME is in your cart.' */}
    
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} is in your cart.
          </li>
        ))}
      </ul>

      {cartItems.length === 0 && <p>Your cart is empty.</p>}
    </div>
  )
}

export default Cart
