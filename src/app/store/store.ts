"use client"
import {configureStore} from "@reduxjs/toolkit"
import reducer from "./taskSlice"

export const store = configureStore({
    reducer:{
        tasks:reducer
    },
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;