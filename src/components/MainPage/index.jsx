import React from 'react'

import Card from './Card'
import Notify from './Notify'
import Inputform from './Inputform'
import './MainPage.scss'
import { useState } from 'react'

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
            />
        </div>
    )
}

export default MainPage
