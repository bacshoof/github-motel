import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Card from './Card'
import Notify from './Notify'
import Inputform from './Inputform'
import api from '../../api'
import './MainPage.scss'
import { getCookingRequest } from '../cookingSlice'
import { getActionRequest } from '../actionSlice'
import { getMemberRequest } from '../memberSlice'

function MainPage() {
    const ListCard = [
        {
            title: 'Nấu Ăn',
            imgUrl: 'https://media.giphy.com/media/ueoUc3gJ5E6Fa/giphy.gif',
            bonus: 8
        },
        {
            title: 'Mua',
            imgUrl: 'https://media4.giphy.com/media/MEgGD8bV72hfq/giphy.gif',
            bonus: 2
        },
        {
            title: 'Đổ Rác',
            imgUrl: 'https://media0.giphy.com/media/Oj7yTCLSZjSt2JMwi2/200.gif',
            bonus: 10,
        },
        {
            title: 'Rửa Bát',
            imgUrl: 'https://media0.giphy.com/media/12o0tOMUPNozPG/giphy.gif',
            bonus: 5,
        }
    ]

    const [title, settitle] = useState()
    const [displayInput, setdisplayInput] = useState(false)

    const handleTitle = (t) => {
        settitle(t)
    }
    const handledisplayInput = () => {
        setdisplayInput(!displayInput)
    }

    //handle Submit

    const master = useSelector(state => state.master)
    const dispatch = useDispatch();


    const [objApi, setObjApi] = useState({});

    useEffect(() => {
        setObjApi({
            ...objApi,
            username: master.name,
            type: title,
            member: [master.name],
        })
    }, [master,title])

    const handleonChange = (e) => {
        setObjApi({
            ...objApi,
            [e.target.id]: e.target.value
        })
        console.log(objApi)
    }

    const resetItem = () => {
        setObjApi({
            ...objApi,
            item: undefined
        })
    }
    
    const handleSubmitCooking = async (e) => {
        e.preventDefault();
        await api.fetchCreateCooking(objApi);
        dispatch(getCookingRequest());
        handledisplayInput();
    }
    const handleSubmitOther = async (e) => {
        e.preventDefault();
        const price = parseInt(objApi.price);
        const newContribute = price
        await api.fetchCreateAction(objApi)
        await api.fetchUpdateMember(newContribute)
        dispatch(getActionRequest())
        dispatch(getMemberRequest())
        handledisplayInput()
    }

    return (
        <div className='mainpage'>
            <Notify/>

            {ListCard.map((item) => {
                return(
                    <Card 
                        imgUrl={item.imgUrl} 
                        title={item.title} 
                        bonus={item.bonus}
                        handleTitle={handleTitle}
                        handledisplayInput={handledisplayInput}
                    />
                )
            })}

            <Inputform 
                title={title} 
                displayInput={displayInput}
                handledisplayInput={handledisplayInput}
                handleSubmitCooking={handleSubmitCooking}
                handleSubmitOther={handleSubmitOther}
                resetItem={resetItem}
                handleonChange={handleonChange}
            />
        </div>
    )
}

export default MainPage
