import React, { Fragment, useEffect, useState } from 'react'
import { CgMouse } from 'react-icons/cg'
import Product from './Product.js'
import CloseIcon from '@mui/icons-material/Close';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';

import { useDispatch, useSelector } from 'react-redux'
import './Home.css'
import axios from 'axios'
import { addToCart } from '../../store/cartSlice.js'
import ReactStars from 'react-rating-stars-component'
function Home() {
    const dispatch = useDispatch()
    const [product, setProduct] = useState([])
    const [show, setShow] = useState(false)

    const [p, setP] = useState([])

    useEffect(() => {
        const getAllProduct = async () => {
            const res = await axios.get('https://pharmacy-backend-nngo.onrender.com/api/v1/product').then((data) => {
                setProduct(data.data.product)
            })
        }
        getAllProduct()
    }, [])



    const options = {
        edit: false,
        color: 'rgba(20,20,20,0.1',
        activeColor: 'tomato',
        value: 2.5,
        isHalf: true,
        size: window.innerWidth < 600 ? 20 : 25
    }




    return (
        <Fragment>
            <div className="banner">
                <p>WELCOME TO PHARMACY</p>
                <h1>FIND MEDICINE BELOW</h1>
                <a href="#container">
                    <button >SCROLL<CgMouse /></button>
                </a>
                <a href='https://darshan15062002.github.io/QueAns/'><button style={{ display: 'flex', alignItems: 'center' }} >GAME <SportsEsportsOutlinedIcon /></button></a>
            </div>
            <h1 className='Home_heading'>Feature Product</h1>
            <div className="container" id="container">
                {product.map((item) => {

                    return <div onClick={() => {
                        setShow(true)
                        setP(item)
                    }}><Product item={item} /></div>
                })}

            </div>
            {show && (
                <div className="show_wraper">
                    <span style={{ fontSize: "25px" }} onClick={() => { setShow(false) }}><CloseIcon /></span>
                    <img src={p.images[0].url} alt="" style={{ height: '16rem' }} className="show_Right" />
                    <div className="show_Left">
                        <h1>{p.name}</h1>
                        <p>{p.discription}</p>
                        <span style={{ display: "flex", alignItems: 'center', gap: '20px' }}><ReactStars {...options} /><span>(256 Reiviews)</span></span>
                        <button style={{ width: '50%', padding: '3px 2px', background: 'green', color: 'white' }} onClick={() => { dispatch(addToCart(p)) }}>ADD TO CART</button>

                    </div>
                </div >
            )
            }
        </Fragment >

    )
}

export default Home
