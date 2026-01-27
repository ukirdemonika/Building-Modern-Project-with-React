import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name:'loading',
    initialState:{
        value:
            {
              completed: true,
                successful : false
            },
            
        
    },
    reducers:{
loadingStarted: (state)=>{
    state.value.completed = false;
},
loadingCompleted: (state)=>{
    state.value.completed = true;
    state.value.successful = true;
},
loadingFailed: (state)=>{
    state.value.successful = false;
    state.value.completed = true;
}

    }
});
export const { loadingStarted, loadingCompleted, loadingFailed } = loadingSlice.actions;
export default loadingSlice.reducer;
