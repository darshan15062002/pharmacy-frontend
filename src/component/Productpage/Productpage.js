import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Product from '../Home/Product';
import ReactStars from 'react-rating-stars-component'
import { addToCart } from '../../store/cartSlice.js'
import { useDispatch } from 'react-redux';
const Productpage = () => {
    const [product, setProduct] = useState([])
    const [show, setShow] = useState(false)
    const [p, setP] = useState([])
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)


    useEffect(() => {
        const getAllProduct = async () => {
            const res = await axios.get(`https://pharmacy-backend-nngo.onrender.com/api/v1/product?page=${page}`).then((data) => {
                setProduct(data.data.product)
            })
        }
        getAllProduct()
    }, [page])

    const options = {
        edit: false,
        color: 'rgba(20,20,20,0.1',
        activeColor: 'tomato',
        value: 2.5,
        isHalf: true,
        size: window.innerWidth < 600 ? 20 : 25
    }
    const buttonStyle = {
        padding: "10px",
        fontSize: '12px',
    }
    return (
        <>
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
                <div className="show_wraper" >
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
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                <button style={{ ...buttonStyle }} onClick={() => setPage(1)}>1</button>
                <button style={{ ...buttonStyle }} onClick={() => setPage(2)}>2</button>
                <button style={{ ...buttonStyle }} onClick={() => setPage(3)} >3</button >........
                <button style={{ ...buttonStyle }} onClick={() => setPage(page + 1)}>Next</button>
            </div></>
    )
}

export default Productpage