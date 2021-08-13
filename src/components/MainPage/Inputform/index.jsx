import React from 'react';

import './Inputform.scss';

function Inputform(props) {
    const {
        title,
        displayInput,
        handledisplayInput,
        handleSubmitCooking,
        handleSubmitOther,
        resetItem,
        handleonChange,
    } = props

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
                            onChange={handleonChange}
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
                            onChange={handleonChange}
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
