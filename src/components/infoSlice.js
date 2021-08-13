import { createSlice } from "@reduxjs/toolkit";

const initialInfo = [
    {
        name: 'Me',
        scores: 10,
        imgUrl: 'https://media-cdn.laodong.vn/storage/newsportal/2020/3/27/793830/Meo-Mac-Covid-19.jpg',
        star: 4
    },
    {
        name: 'Dương',
        scores: 12,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQTmKUSC9qKVO_nBcI7rSNGnO-LGV1nvjjr-rHylXq4pb1F1uxbwdHEpwlk5TRixl90VE&usqp=CAU',
        star: 3
    },
    {
        name: 'Ninh Hội',
        scores: 10,
        imgUrl: 'https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg',
        star: 4
    },
    {
        name: 'Mậm',
        scores: 12,
        imgUrl: 'https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg',
        star: 3
    },
    {
        name: 'Bình Boong',
        scores: 10,
        imgUrl: 'https://d.newsweek.com/en/full/1817497/border-collie-dog.jpg',
        star: 4
    },
    {
        name: 'Linh',
        scores: 12,
        imgUrl: 'https://img2.thejournal.ie/article/5170458/river?version=5170546&width=1340',
        star: 3
    },
    {
        name: 'Hải',
        scores: 10,
        imgUrl: 'https://yt3.ggpht.com/ytc/AKedOLRvxGYSdEHqu0X4EYcJ2kq7BttRKBNpfwdHJf3FSg=s900-c-k-c0x00ffffff-no-rj',
        star: 4
    },
    {
        name: 'Yến',
        scores: 12,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOMtsxj8L3aV-qLoVamcf-kCuSRb0kf8Unmg&usqp=CAU',
        star: 3
    }
]

const infoList = createSlice({
    name: 'infoList',
    initialState: initialInfo,
    reducers: {
    }
})

const { reducer } = infoList;
export default reducer;

