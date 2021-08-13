import { createSlice } from "@reduxjs/toolkit";

const initialMember = {
    isLoading: false,
    data: [],
};

const member = createSlice({
    name: 'member',
    initialState: initialMember,
    reducers: {
        getMemberRequest: (state, action) => {
            state.isLoading = true
        },

        getMemberSuccess: (state, action) => {
            return state = {
                isLoading: false,
                data: action.payload
            }
        },

        getMemberFailure: (state, action) => {
            state.isLoading = false
        },
    }
})

const { reducer, actions } = member;
export default reducer;
export const { 
    getMemberRequest, 
    getMemberSuccess,
    getMemberFailure,
} = actions
