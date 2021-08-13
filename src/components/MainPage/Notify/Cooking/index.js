import moment from 'moment';
import React from 'react';

import './Notify-Cooking.scss';

function Cooking({cooking}) {

    const time = parseInt(moment(cooking.createdAt).format('HH'));
    const dateCooking = moment(cooking.createdAt).format('DD');
    const now = moment(Date.now()).format('DD');

    return (
        <div className="notify__cooking">
                { dateCooking === now 
                ?   <>
                        <div className="notify__cooking-body">
                            <div className='notify__cooking-body-title'>
                                Nay {cooking.username} nấu 
                                cơm {(7 <= time && time <= 13) && 'Trưa'}
                                {(13 < time && time <= 21) && 'Tối'}
                                , món {cooking.item}
                            </div>
                            <div className="notify__cooking-body-price">
                                {cooking.price}k
                            </div>
                        </div>

                        <div className='notify__cooking-more'>
                            <div className='notify__cooking-more-buy'>
                                <button className='notify__cooking-more-buy-btn'>
                                    Mua Thêm
                                </button>
                                <ul className='notify__cooking-more-buy-list'>
                                </ul>
                            </div>

                            <div className='notify__cooking-more-eat'>
                                <button className='notify__cooking-more-eat-btn'>
                                    Ăn Với
                                </button>
                                <ul className='notify__cooking-more-eat-list'>
                                    {cooking.member.map((member) => {
                                        return <li className='notify__cooking-more-eat-list-item'>
                                            {member}
                                        </li>
                                    })}
                                </ul>
                            </div>

                            <button className='notify__cooking-more-wash'>
                                Rửa Bát
                            </button>
                        </div>
                    </>
                :   <div className='notify__cooking-body'>
                        {`Hôm nay chả có ai nấu (⌣́_⌣̀)`}
                    </div>
                }
        </div>
    )
}

export default Cooking
