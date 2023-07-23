
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getData=createAsyncThunk("getData",async()=>{
    const responce=await fetch ("https://jsonplaceholder.typicode.com/todos")
    return responce.json();
})


const fetchData=createSlice({
    name:"add",
    initialState:{
        isLoading:false,
        data:null,
        isError:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(getData.pending,(state,action)=>{
            state.isLoading=true;
            
        });
        builder.addCase(getData.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload
        });
        builder.addCase(getData.rejected,(state,action)=>{
           console.log("error",action.payload);
           state.isError=true
        });
    }
})

export default fetchData.reducer