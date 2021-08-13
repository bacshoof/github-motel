import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import io from 'socket.io';

import Header from './components/Header';
import Background from './components/Background';
import MainPage from './components/MainPage';
import { getMemberRequest } from './components/memberSlice';
import { getMasterRequest } from './components/MasterSlice';
import { getActionRequest } from './components/actionSlice';
import { getCookingRequest } from './components/cookingSlice';

function App() {
  const [isSticky, setSticky] = useState(false)

  const bodyRef = useRef();
  const socket = io();

  const handleScroll = () => {
    setSticky(bodyRef.current.getBoundingClientRect().top <= -40)
  }

  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);
  const dispatch = useDispatch()

  
  useEffect(() => {
    dispatch(getMasterRequest())
    dispatch(getMemberRequest())
    dispatch(getActionRequest())
    dispatch(getCookingRequest())
  }, [])

  return (
    <div className="App">
      <Background/>
      <Header isSticky={isSticky}/>
      <div className='space'></div>
      <div 
        className='body'
        ref={bodyRef}
      >
        <MainPage/>
      </div>
    </div>
  );
}

export default App;
