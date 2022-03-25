import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} =props;

    return (
        <div className='cart'>
            <h2>Select Your Car</h2>
            <p>{cart.name}</p>
            <button className='btn-one'>Choose One</button><br/>
            <button className='btn-two'>Choose Again</button>
        </div>
    );
};

export default Cart;