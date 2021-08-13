import { createSlice } from "@reduxjs/toolkit";

const initialCooking = [];

const cooking = createSlice({
    name: 'cooking',
    initialState: initialCooking,
    reducers: {
        getCookingRequest: (state, action) => {},
        
        createCooking: (state, action) => {
            return state = action.payload
        },
    }
})

const { reducer, actions } = cooking;
export default reducer;
export const { getCookingRequest, createCooking } = actions