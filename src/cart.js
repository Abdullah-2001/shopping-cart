import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adjustQty, decrease, getCartItems, increase, itemPrice, removeFromCart } from './store/dataSlice';

const Cart = () => {

  const [cartItems, setCartItems] = useState([]);
  const getTotalPrice = useSelector(itemPrice);
  const getItems = useSelector(getCartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    setCartItems(getItems)
  })

  const remove = (v, i) => {
    dispatch(removeFromCart(v))
  }

  console.log(getTotalPrice, "total price");
  console.log(cartItems, "items");

  return (

    <>

      <div className="shopping-cart mt-2">

        <div className="column-labels">
          <label className="product-image">Image</label>
          <label className="product-details">Product</label>
          <label className="product-price">Price</label>
          <label className="product-quantity">Quantity</label>
          <label className="product-removal">Remove</label>
          <label className="product-line-price">Total</label>
        </div>

        {cartItems.length === 0 ? (
          <h1>Cart is empty</h1>
        ) : (
          cartItems.map((v, i) => {
            let isAvailable = v.availablity === getItems.find((item) => item.id === v.id)?.Qty
            return (
              <div className="product" key={i}>
                <div className="product-image">
                  <img src={v.image} />
                </div>
                <div className="product-details">
                  <h4 className="product-title">{v.name}</h4>
                  <p className="product-description">{v.details}</p>
                </div>
                <h4 className="product-price">{v.price}</h4>
                <div className="product-quantity">
                  <button disabled={isAvailable} className='btn btn-success' onClick={() => dispatch(increase(v, i))}>+</button>
                  <p style={{ margin: "0 10px" }}>{v.Qty}</p>
                  <button className='btn btn-danger' onClick={() => dispatch(decrease(v, i))}>-</button>
                </div>
                <div className="product-removal">
                  <button className="btn btn-danger" onClick={() => remove(v, i)}>
                    Remove
                  </button>
                </div>
                <h4 className="product-line-price">{v.totalPrice}</h4>
              </div>
            )
          }))}

        <div className="totals">
          <div className="totals-item">
            <label>Subtotal</label>
            <div className="totals-value" id="cart-subtotal">{getTotalPrice}</div>
          </div>
          <div className="totals-item">
            <label>Tax (5%)</label>
            <div className="totals-value" id="cart-tax">3.60</div>
          </div>
          <div className="totals-item">
            <label>Shipping</label>
            <div className="totals-value" id="cart-shipping">3.75</div>
          </div>
          <div className="totals-item totals-item-total">
            <label>Grand Total</label>
            <div className="totals-value" id="cart-total">{getTotalPrice}</div>
          </div>
        </div>
        <button className="checkout btn btn-dark">Checkout</button>
      </div>

    </>

  )

}

export default Cart;