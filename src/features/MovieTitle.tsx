import { createSlice } from "@reduxjs/toolkit";
export const titleSlice = createSlice({
    name: "title",
    initialState:{value:{"name":""}},
    reducers:{
        updateName:(state,action)=>
        {
            state.value = action.payload;
        },
    }
});
export const {updateName} = titleSlice.actions;
export default titleSlice.reducer;