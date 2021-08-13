import React, { useEffect, useState } from 'react';

import './Inputform.scss';
import api from '../../../api';
import { useDispatch, useSelector } from 'react-redux';
import { getActionRequest } from '../../actionSlice';
import { getMemberRequest } from '../../memberSlice';
import { getCookingRequest } from '../../cookingSlice';

function Inputform(props) {
    const {
        title,
        displayInput,
        handledisplayInput,
    } = props

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

    const handleonChangename = (e) => {
        setObjApi({
            ...objApi,
            item: e.target.value
        })
    }

    const handleonChangeprice = (e) => {
        setObjApi({
            ...objApi,
            price: e.target.value
        })
    }

    const resetItem = () => {
        setObjApi({
            ...objApi,
            item: undefined
        })
    }

    console.log(objApi)

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
        <div className={`inputform ${displayInput? 'inputform-on' : ''}`}>
            <div className="inputform__overlay"
                onClick={() => {
                    handledisplayInput();
                    resetItem();
                }}
            ></div>
            <form 
                className="inputform__body" 
                onSubmit={title === 'Nấu Ăn' 
                    ? handleSubmitCooking 
                    : handleSubmitOther}
            >
                <div className="inputform__header">
                    {title}
                </div>
                {(title === 'Mua' || title === 'Nấu Ăn') &&
                    <>
                    <div className='input'>
                        <label htmlFor="name" className="inputform__label">
                            {title==='Mua' ? 'Mua gì?' : 'Nấu món gì?'}
                        </label>
                        <input 
                            type="text" 
                            className="inputform__input" 
                            id='name'
                            onChange={handleonChangename}
                        />
                    </div>

                    <div className="input">
                        <label htmlFor="price" className="inputform__label">
                            Hết bao nhiêu (k)
                        </label>
                        <input 
                            type="number" 
                            className="inputform__input" 
                            id='price' 
                            onChange={handleonChangeprice}
                        />
                    </div>
                    </>
                }
                <button
                    className='inputform__btn'
                    type='submit'
                >
                    Xác Nhận
                </button>
            </form>
        </div>
    )
}

export default Inputform
