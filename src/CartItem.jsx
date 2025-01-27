import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';
import { createImmutableStateInvariantMiddleware } from '@reduxjs/toolkit';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    console.clear();
    let totalAmount = 0;
    let price = 0;
    cart.forEach((item) => {
        console.log(`${item.name} ${item.quantity} ${item.cost}`);
        price = item.cost.slice(1);
        totalAmount += price * item.quantity;
    });
    console.log(`Cart total is $${totalAmount}`);
    return (totalAmount);
  };

 // const handleContinueShopping = (e) => {
 
 // };



  const handleIncrement = (item) => {
    const increment = item;
    increment.quantity++;
    dispatch(updateQuantity(increment));
  };

  const handleDecrement = (item) => {
    const newQuantity = item.quantity - 1;
    if(newQuantity === 0){
        dispatch(removeItem(item));
    }
    else{
        dispatch(updateQuantity(item, newQuantity));
    }
  };

  const handleRemove = (index) => {
    dispatch(removeItem(index));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
  };

const handleCheckoutShopping = (e) => {
  alert('Functionality to be added for future reference');
};

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={onContinueShopping}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;


