import { createSlice } from "@reduxjs/toolkit";

const initialAction = [];

const action = createSlice({
    name: 'action',
    initialState: initialAction,
    reducers: {
        getActionRequest: (state, action) => {},
        
        createAction: (state, action) => {
            return state = action.payload
        },
    }
})

const { reducer, actions } = action;
export default reducer;
export const { createAction, getActionRequest } = actions