import React, { useEffect } from 'react'
import './navbar.scss'
import {Link, useNavigate } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { darkMode, lightMode} from '../reducer/theme'
import { logout } from '../reducer/auth'
function Navbar({ authUser, theme }) {
    
    function clearStorage() {
        dispatch(logout())
        localStorage.clear('user')
    }
    const dispatch = useDispatch()
    return (
        <div className={`navbar ${(theme.bgc === "white" ? "lightMode" : "darkMode") }`}>
            <Link to="/"><span className='logo'>E-Shop</span></Link>
            {JSON.parse(localStorage.getItem('user')) ? 
            (<ul className='list'>
                <li className='list-item'>
                    <img className='avatar' src="https://i.guim.co.uk/img/media/d31ebd49b32a5aa609a584ababb1e03bc70b4942/573_213_2929_1758/master/2929.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=f635c67f6d38faabc03568df3ad1a7d9" alt="" />
                </li>
                <li className='list-item'>{authUser.username}</li>
                <li className='list-item' onClick={() => clearStorage()} >Logout</li>
                <li className='list-item'><Link to="/cart"><AiOutlineShoppingCart/></Link></li>
                {theme.bgc === "white" ? <li className='list-item' onClick={() => dispatch(darkMode())}><MdOutlineDarkMode /></li>
                : <li className='list-item' onClick={() => dispatch(lightMode())}><MdOutlineLightMode /></li>}
            </ul>) : 
            (<div><Link to="/login">Login</Link></div>)}
        </div>
    )
}

export default Navbar