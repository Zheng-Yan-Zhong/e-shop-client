import React, { useEffect } from 'react'
import './card.scss'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove} from '../reducer/cart'
function Card({post}) {
    const cart = useSelector((state) => state.cart.value)
    const dispatch = useDispatch() 
    
    const addCart = (item) => {
        dispatch(add(item))
        alert('added to cart')
    }
    useEffect(() => {
        console.log(cart);
    },[addCart])
    return (
        <div className="card">
            <img src={post.img} alt="" className="card-img" />
            <span className="title">{post.title}</span>
            <span>${post.price}</span>
            <span>{post.description}</span>
            <button onClick={() => addCart(post)}>add to cart</button>
        </div>
    )
}

export default Card