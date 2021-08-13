import React from 'react';

import './InfoCard.scss';

function InfoCard({info}) {
    return (
        <div className='info-card'>
                <img 
                    src={info.imgUrl}
                    className="info-card__img" 
                    alt=''
                />

            <div className="no-flex">
                <div className="info-card__name">
                    {info.name}
                </div>
                <div className="info-card__scores">
                    <span className="info-card__scores-number">
                        {info.scores}
                    </span> điểm
                </div>
            </div>
            <div className="info-card__contribute">
                {info.contribute}k
            </div>
        </div>
    )
}

export default InfoCard
