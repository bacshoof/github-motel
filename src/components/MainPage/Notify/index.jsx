import React from 'react'
import { useSelector } from 'react-redux'

import Cardnotify from './Card-notify'
import Cooking from './Cooking';
import './Notify.scss'

function Notify() {
    const action = useSelector(state => state.action);
    const [cooking] = useSelector(state => state.cooking);

    return (
        <div className='notify'>
            <div className="notify__lable">
                Thông Báo
            </div>
            { cooking != null && <Cooking cooking={cooking}/> }

                <ul className="notify__list">
                    {action.map((action, index) => {
                        return(
                            <li className="notify__list-item" key={index}>
                                <Cardnotify action={action}/>
                            </li>
                        )
                    })}
                </ul> 
            
        </div>
    )
}

export default Notify
