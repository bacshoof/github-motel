import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';

import infoList from '../components/infoSlice';
import member from '../components/memberSlice';
import master from '../components/MasterSlice';
import action from '../components/actionSlice';
import cooking from '../components/cookingSlice';

import mySaga from "../saga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = {
    infoList: infoList,
    member: member,
    master: master,
    action: action,
    cooking: cooking,
}

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(mySaga)

export default store;