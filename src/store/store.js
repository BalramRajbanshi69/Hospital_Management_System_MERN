import { configureStore } from "@reduxjs/toolkit";
import  doctorAppointmentReducer  from "./doctorAppointmentSlice";


const store = configureStore({
    reducer:{
        appointment:doctorAppointmentReducer
    }
})


export default store