import React from 'react'
import { useSelector } from 'react-redux'

import InfoCard from './InfoCard';
import './Information.scss';

function Information(props) {
    const { handleClick, isInfo } = props;

    const member = useSelector(state => state.member)

    return (
        <div className={`information ${ isInfo && 'information-on'}`}>
            <ul className={`information__list ${ isInfo && 'information__list-on'}`}>
                <div className="information__list-header">
                    Các Tình Yêu
                </div>
                {
                    member.data.map((mem) => {
                        return(
                            <li className='information__list-item'>
                                <InfoCard key={mem._id} info={mem}/>
                            </li>
                        )
                    })
                }
            </ul>
            <div 
                className={`information__overlay ${ isInfo && 'information__overlay-on'}`}
                onClick={handleClick}
            ></div>
        </div>
    )
}

export default Information;
