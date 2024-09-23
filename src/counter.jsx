
import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name: "counter",
    initialState: {

        count: 0

    },
    reducers: {
        // Action
        addd (state,action){
        state.count = action.payload;
        },
        decCount(state,) {
            if (state.count > 0) {
                state.count = state.count - 1;
            }
           
        },
        incCount(state) {
            state.count = state.count + 1


        },
        recentCount(state) {
            state.count = 0
        }

    }

});
