import { createSlice} from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: "counter",
    initialState:{
        value: 0
    },
    reducers:{
        increment(state){
          state.value++;
        },
        decnement(state){
          state.value--;
        },
        addment(state, action){
          state.value += action.payload
        },
        reset(state){
          state.value = 0;
        }
    }
})

export const { increment, decnement, addment, reset} = counterSlice.actions
export default counterSlice.reducer;
