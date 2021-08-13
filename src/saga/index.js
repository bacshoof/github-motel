import { takeLatest, call, put } from 'redux-saga/effects'

import api from '../api';
import { getMemberRequest, getMemberSuccess } from '../components/memberSlice';
import { createMaster, getMasterRequest } from '../components/MasterSlice';
import { getActionRequest, createAction } from '../components/actionSlice';
import { createCooking, getCookingRequest } from '../components/cookingSlice';

function* fetchMemberSaga() {
    const member = yield call(api.fetchMember);
    yield put(getMemberSuccess(member.data))
}

function* fetchMasterSaga() {
    const data = yield call(api.fetchOne)
    yield put(createMaster(data.data))
}

function* fetchActionSaga() {
    const action = yield call(api.fetchAction)
    yield put(createAction(action.data))
}

function* fetchCookingSaga() {
    const cooking = yield call(api.fetchCooking)
    yield put(createCooking(cooking.data))
}


function* mySaga() {   
    yield takeLatest(getMemberRequest, fetchMemberSaga)
    yield takeLatest(getMasterRequest, fetchMasterSaga)
    yield takeLatest(getActionRequest, fetchActionSaga)
    yield takeLatest(getCookingRequest, fetchCookingSaga)
}

export default mySaga;