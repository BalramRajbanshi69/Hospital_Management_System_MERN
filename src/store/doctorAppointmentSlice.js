import { APIAuthenticated } from "../http";
import { STATUSES } from "../misc/statuses";
import {createSlice} from "@reduxjs/toolkit"

const doctorAppointmentSlice = createSlice({
    name:"appointment",
    initialState:{
        data:[],
        status:STATUSES.SUCCESS
    },
    reducers:{
        setAppointment(state,action){
            state.data = action.payload
        },
        setStatus(state,action){
            state.status = action.payload
        }
    }
})

export const {setAppointment,setStatus } = doctorAppointmentSlice.actions
export default doctorAppointmentSlice.reducer



export function doctorAppointment(data){
    return async function doctorAppointmentThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const response = await APIAuthenticated.post("/appointment/book-appointments",data)
            console.log(response.data.data);
            dispatch(setAppointment(response.data.data))
            dispatch(setStatus(STATUSES.SUCCESS))
        } catch (error) {
            console.error(error);
            dispatch(setStatus(STATUSES.ERROR));
 
        }
    }
}