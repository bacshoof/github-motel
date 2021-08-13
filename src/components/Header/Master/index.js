import React from 'react';

import './Master.scss';

function Master({masterInfo}) {

    return (
        <div className={`master ${masterInfo ? 'master-on' : ''}`}>
            <img 
                className='master__img'
                src={masterInfo.imgUrl}
            ></img>
            <div className='master__name'>
                {masterInfo.name}
            </div>
        </div>
    )
}

export default Master
