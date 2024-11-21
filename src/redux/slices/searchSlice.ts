import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SearchSliceState {
  searchValue: string,
  currentPage: number,
}

const initialState: SearchSliceState = {
  searchValue: '',
  currentPage: 1,
}

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setCurrentPage(state, actions: PayloadAction<number>) {
      state.currentPage = actions.payload;
    },
    setSearchValue(state, actions: PayloadAction<string>) {
      state.searchValue = actions.payload;
    }
  }
})

export const selectCurrentPage = (state: RootState) => state.searchSlice;

export const { setCurrentPage, setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;