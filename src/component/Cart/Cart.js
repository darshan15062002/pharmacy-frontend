import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeToCart } from '../../store/cartSlice';
import './Cart.css'
function Cart() {
    const dispatch = useDispatch()
    const product = useSelector((state) => state.cart)
    let totle = 0
    product.forEach((item) => {
        totle = totle + item.price
    })
    let diff = totle - 49

    return (
        <>
            <h1 className='heading'>Cart</h1>
            <div style={{ height: '100%', display: 'flex', justifyContent: 'space-around' }}>

                <div className="container">
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
                {product.length1 == 0 ? (<div className="payment">
                    <div className="payment__container">
                        <h3>Totle Cart :</h3><span>{totle} Rs</span></div>
                    <div className="payment__container">
                        <h3>Delivery charges :</h3><span>49 Rs</span></div>
                    <div className="payment__container">
                        <h3>Amount to be paid :</h3><span>{diff} Rs</span></div>
                    <div className="btn"><button>Payment</button></div>
                </div>) :
                    <div className="cart__img">
                        <img src="https://img.freepik.com/premium-vector/shopping-concepta-woman-goes-shopping-woman-is-pushing-empty-shopping-cartflat-vector-cartoon-character-illustration_77116-1411.jpg?w=740" alt="empty cart" />
                    </div>
                }
            </div>
        </>
    )
}

export default Cart
