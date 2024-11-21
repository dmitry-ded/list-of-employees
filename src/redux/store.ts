import { configureStore } from "@reduxjs/toolkit";
import employeesSlice from "./slices/employeeSlice"
import searchSlice from "./slices/searchSlice"
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    employeesSlice,
    searchSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();