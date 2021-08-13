import React from 'react'
import moment from 'moment'

import './Card-notify.scss';

function Cardnotify({action}) {
    const { 
        username, 
        type,
        item,
        price,
        createdAt,
    } = action

    return (
        <div className='card-notify'>
            <div className="card-notify__body">
                <div className="card-notify__body-title">
                    <span className="card-notify__body-title-username">{username} </span>
                     : {type} {item}
                </div>
                {(price > 0) && <div className="card-notify__price">
                    {price}k
                </div> }
            </div>

            <div className="card-notify__time">
                {moment(createdAt).format("H:mm, DD/MM")}
            </div>
        </div>
    )
}

export default Cardnotify
