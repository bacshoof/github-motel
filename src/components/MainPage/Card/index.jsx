import React from 'react';

import './Card.scss'

function Card(props) {
    const { 
        imgUrl, 
        title, 
        bonus,
        handleTitle,
        handledisplayInput,
    } = props;

    const handleClick = (title) => {
        handleTitle(title);
        handledisplayInput()
    }

    return (
        <div className='card'>
            <div className="card__img">
                <img 
                    src={imgUrl}
                    alt="" 
                    className='card__img-img'
                />
            </div>
            <div className="card__title"
                onClick={() => {handleClick(title)}}
            >
                {title}
            </div>
            <div className="card__bonus">
                +{bonus}đ
            </div>
        </div>
    )
}

export default Card;
