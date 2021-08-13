import { createSlice } from "@reduxjs/toolkit";

const initialMaster = {};

const master = createSlice({
    name: 'master',
    initialState: initialMaster,
    reducers: {
        getMasterRequest: (state, action) => {},
        
        createMaster: (state, action) => {
            return state = action.payload
        },
    }
})

const { reducer, actions } = master;
export default reducer;
export const { createMaster, getMasterRequest } = actions
