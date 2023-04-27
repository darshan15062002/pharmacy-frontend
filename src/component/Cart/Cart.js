import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeToCart } from '../../store/cartSlice';
import './Cart.css'
function Cart() {
    const dispatch = useDispatch()
    const product = useSelector((state) => state.cart)
    console.log(product);
    return (
        <div style={{ height: '100vmax' }}>
            <h1 className='heading'>Cart</h1>
            {product.map((item) => {
                return <div className="cart_wraper">
                    <div className="cart_Right"><img src={item.images[0].url} alt={item.name} />
                    </div>
                    <div className="cart_Left">
                        <h1>{item.name}</h1>
                        <p>{item.discription}</p>
                        <span>{item.price}Rs</span><button style={{ width: '50%', padding: '3px 2px', background: 'green', color: 'white' }} onClick={() => { dispatch(removeToCart(item._id)) }}>Remove</button></div>

                </div>
            })}
        </div>
    )
}

export default Cart
