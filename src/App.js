import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './page/Home'
import Login from './page/Login'
import './reset.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'
import Register from './page/Register'
import Cart from './page/Cart'
import { useSelector, useDispatch } from 'react-redux'
import { login } from './reducer/auth'
function App() {
    const theme = useSelector((state) => state.theme.value)
    const authUser = useSelector((state) => state.auth.value)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(login(JSON.parse(localStorage.getItem('user'))))
    }, [])
    return (
        <Router>
            <div>
                <Navbar theme={theme} authUser={authUser} />
                <Routes>
                    <Route exact path="/E-shop-client/" element={<Home />} />
                    <Route path="/E-shop-client/login"  element={<Login />} />
                    <Route path="/E-shop-client/register" element={<Register />} />
                    <Route path="/E-shop-client/cart" element={<Cart />} />
                </Routes>
            </div>   
        </Router>
    )
}

export default App