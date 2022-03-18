import React, { memo, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './cart.scss'
import { Link } from 'react-router-dom'
import { MdDeleteOutline } from 'react-icons/md'
import { increase, decrease, remove } from '../reducer/cart'
function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.value)
  const [total, setTotal] = useState(0)
  
  useEffect(() => {
    setTotal(cart.reduce((prev, current) => prev + current.count * current.price, 0))
  },[cart])

  if(cart.length > 0) {
    return (
      <div className='cart'>
        <p>Order List</p>
        {
          cart.map((item, index) => {
            const {title, img, price, count, id} = item
            return (
            <ul className='cart-list' key={index.toString()}>
                <img src={img} alt="" />
                <div className="content">
                  <p>{title}</p>
                  <p>{price}</p>
                </div>
                <div className="buttons">
                  <button onClick={() => dispatch(decrease(index))}>-</button>
                  <span>{count}</span>
                  <button onClick={() => dispatch(increase(index))}>+</button>
                  <button onClick={() => dispatch(remove(id))}><MdDeleteOutline /></button>
                </div>
            </ul>)
          })
        }
        <div className='total'>
          <span>Total: {total}</span>
          <button>Check out</button>
        </div>
      </div>)
      } else {
        return <div className="empty">
          <span>It's empty</span>
          <p><Link to="/">go to add something</Link></p>
        </div>
      }
  }

export default memo(Cart)