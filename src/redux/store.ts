import {combineReducers, configureStore} from "@reduxjs/toolkit";
import counterSlice from "@/redux/slices/counterSlice";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import generalAppInfoSlice from "@/redux/slices/generalAppInfoSlice";

// Must register reducer in a store.
export const store = configureStore({
    reducer: {
        counterSlice,
        generalAppInfoSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
