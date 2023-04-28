import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import './LoginSignIn.css'
import axios from 'axios';

function LoginSignIn() {
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [showL, setShowLogin] = useState(true)
    const [showR, setShowRegister] = useState(false)
    const [tap, setTap] = useState('login')
    const [name, setName] = useState()


    const switcherTabs = (e, condition) => {
        e.preventDefault();
        if (condition == 'register') {
            setTap(condition)
            setShowRegister(true)
            setShowLogin(false)

        }
        else {
            setTap(condition)
            setShowRegister(false)
            setShowLogin(true)
        }
    }
    const loginSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('https://pharmacy-backend-nngo.onrender.com/api/v1/login', { email, password }).catch((err) => {
            console.log(err);
            return;

        })
        res && navigate('/')
    }
    const registerSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('https://pharmacy-backend-nngo.onrender.com/api/v1/register', { email, name, password }).catch((err) => {
            alert(err);
            return;

        })
        res && navigate('/')


    }
    return (
        <div className='LoginSignUpContainer'>
            <div className="LoginSignUpBox">
                <div className="">
                    <div className="Login_SignUp_toggle">
                        <p onClick={(e) => { switcherTabs(e, 'login') }} style={{ background: tap === "login" && "green", color: tap === "login" && "white" }}>Login</p>
                        <p onClick={(e) => { switcherTabs(e, 'register') }} style={{ background: tap === "register" && "green", color: tap === "register" && "white" }}>Register</p>
                    </div>


                </div>
                {showL && (<form className='login_form' onSubmit={loginSubmit}>
                    <div className="login_Email">
                        <MailOutlineIcon className='icon' />
                        <input type="email" placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="login_Password">
                        <LockOpenIcon className='icon' />
                        <input type="password" required placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <Link to="/passord/forget" className='forget'>Forget Password ?</Link>
                    <input type="submit" value="Login" className='login_Btn' />
                </form>)}
                {showR && (<form className='login_form' onSubmit={registerSubmit}  >
                    <div className="login_Email">
                        <PersonOutlineOutlinedIcon className='icon' />
                        <input type="text" placeholder='Name' required value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="login_Email">
                        <MailOutlineIcon className='icon' />
                        <input type="email" placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="login_Password">
                        <LockOpenIcon className='icon' />
                        <input type="password" required placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <input type="submit" value="Register" className='login_Btn' />
                </form>)}

            </div>

        </div>
    )
}

export default LoginSignIn
