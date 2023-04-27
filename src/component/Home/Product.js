import React from 'react'

// import { useDispatch } from 'react-redux';

import ReactStars from "react-rating-stars-component";


function Product({ item }) {

    // const dispatch = useDispatch()
    const options = {
        edit: false,
        color: 'rgba(20,20,20,0.1',
        activeColor: 'tomato',
        value: 2.5,
        isHalf: true,
        size: window.innerWidth < 600 ? 20 : 25
    }
    // const handleClick = () => {
    //     dispatch(addToCart(item))
    // }

    return (



        <div className="product_Cart">
            <img src={item.images[0].url} alt={item.name} />
            <p>{item.name}</p>
            <div>
                <ReactStars {...options} /><span>(256 Reiviews)</span></div>
            <span>{item.price}Rs</span>
            {/* <button onClick={() => handleClick(item)} >ADD TO CART</button> */}
        </div>


    )
}

export default Product
