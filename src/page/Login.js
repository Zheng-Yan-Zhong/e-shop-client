import React, {useState} from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FiGithub, FiFacebook } from 'react-icons/fi'
import { Link , useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../reducer/auth'
import './login.scss'
function Login() {
  const [username, setUserName] = useState('')
  const [password, setPassWord] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const fetchContent = {
      method: 'POST',
      mode: 'cors',
      body:  JSON.stringify({username: username, password: password}),
      headers: {
          'Content-Type': "application/json"
      }
  } 

  function loginMethod(e) {
    e.preventDefault()
    console.log(username, password);
    fetch('https://e-shop-tw.herokuapp.com/login', fetchContent)
    .then((result) => result.json())
    .then((status) => status.accessToken ? 
      (
        localStorage.setItem('user', JSON.stringify(status)),
        dispatch(login(JSON.parse(localStorage.getItem('user')))),
        navigate('/')
      )
      : alert('Sorry invalid'))
    .catch((err) => console.log(err))
    //每次必定執行清除
    setUserName('')
    setPassWord('')
  }

  if(localStorage.getItem('user')) {
    const data = JSON.parse(localStorage.getItem('user'))
    return <h2>{`Hi ${data.username}`}</h2>
  } else {
    return (<div className='login'>
      <h3>Login</h3>
      <div className="wrapper">
        <div className='left'>
          <a href="/"><FiFacebook /></a>
          <a href="/"><FcGoogle /></a>
          <a href="/"><FiGithub /></a>
        </div>
        <div className="right">
          <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder="username" value={username} />
          <input type="text" onChange={(e) => setPassWord(e.target.value)} placeholder="password" value={password} />
          <button onClick={loginMethod}>login</button>
          <Link to="/register">Not have account? click - register</Link>
        </div>
      </div>
    </div>)
  }
}

export default Login