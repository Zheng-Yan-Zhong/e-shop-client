import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import './register.scss'
function Register() {
    const [username, setUserName] = useState('')
    const [password, setPassWord] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const fetchContent = {
        method: 'POST',
        mode: 'cors',
        body:  JSON.stringify({username: username, password: password, email: email}),
        headers: {
            'Content-Type': "application/json"
        }
    }
    async function register() {
        console.log(username, password, email);
        fetch('https://e-shop-tw.herokuapp.com/register',fetchContent)
        .then((res) => res.json())
        .then((status) => console.log(status))
        .then(() => alert('successful'))
        .then(() => navigate('/login'))
        .catch((error) => console.log(error))
    }
    return (
        <div className="register">
            <div className="form">
                <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder='user'/>
                <input onChange={(e) => setPassWord(e.target.value)} type="text" placeholder='password'/>
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='email'/>
                <button onClick={register}>Sign Up</button>
            </div>
        </div>
    )
}

export default Register