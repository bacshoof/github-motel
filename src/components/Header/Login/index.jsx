import React from 'react'
import Cookie from 'js-cookie';

import './Login.scss'
import api from '../../../api';
import { useState } from 'react';

function Login(props) {
    const { isLogin, handleClickLogin } = props;
    const [username, setusername] = useState()
    const [pass, setpass] = useState()

    const handleOnchangeName = (e) => {
        setusername(e.target.value)
    }

    const handleOnchangePass = (e) => {
        setpass(e.target.value)
    }

    const handleSubmit = async (event) => {
        //event.preventDefault();
        try {
            const user = await api.fetchLogin( username, pass )
            if(user.data.token){
                Cookie.set('token', user.data.token)
            }
            else {
                console.log('Đăng nhập không thành công')
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div className={`login ${ isLogin && 'login-on'}`}>
                <div 
                    className="login__overlay"
                    onClick={handleClickLogin}
                ></div>
                <form 
                    className="login__body"
                    onSubmit={handleSubmit}
                >
                    <div className="login__body-header">
                        LogIn
                    </div>
                    <div className="login__body-name">
                        <label htmlFor="name" className="login__body-name-label">
                            Name
                        </label>
                        <input 
                            type="text" 
                            className="login__body-name-input" 
                            id='name'
                            onChange={handleOnchangeName}
                        />
                    </div>
                    <div className="login__body-pass">
                        <label htmlFor="pass" className="login__body-pass-label">
                            Pass
                        </label>
                        <input 
                            type="password" 
                            className="login__body-pass-input" 
                            id='pass'
                            onChange={handleOnchangePass}
                        />
                    </div>
                        <button 
                            className="login__body-submit"
                        >
                            Đăng Nhập
                        </button>
                </form>
            </div>
    )
}

export default Login
