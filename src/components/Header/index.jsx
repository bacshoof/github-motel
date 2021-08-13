import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';

import './Header.scss'
import Information from '../Information';
import Login from './Login';
import Master from './Master';

function Header(props) {

    const { isSticky } = props;

    const token = Cookies.get('token')

    const [ isInfo, setInfo ] = useState(false)
    const [isLogin, setLogin] = useState(false)
    const [masterInfo, setmasterInfo] = useState({});

    const handleClick = () => {
        setInfo(!isInfo);
    }


    const handleLogin = () => {
        setLogin(!isLogin)
    }
    
    const master = useSelector(state => state.master)
    
    useEffect(() => {
        setmasterInfo(master)
    }, [master])

    return (
        <div className={`header ${isSticky ? 'header-sticky' : ''}`}>
            {!token &&
                <div 
                className="header__login" 
                onClick={handleLogin}
            >
                LogIn
            </div>}
            <div className='header__logo'>For You</div>
            <div 
                className="header__more"
                onClick={handleClick}
            >
                    <i class="header__more-icon fas fa-bars"></i>
            </div>
            <Login 
                isLogin={isLogin} 
                handleClickLogin={handleLogin}
            />
            {masterInfo.name &&
                <Master 
                masterInfo={masterInfo}
            />}
            <Information 
                handleClick={handleClick} 
                isInfo={isInfo}
            />
        </div>
    )
}

export default Header;   
