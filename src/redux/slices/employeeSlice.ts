import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

type NumberOfEmployees = {
  id: string,
  firstName: string,
  lastName: string,
  middleName: string,
  birthDate: string,
  departament: string,
  post: string,
  salary: number,
  photo: string,
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface EmployeesSliceState {
  employees: NumberOfEmployees[],
  status: Status,
}

const initialState: EmployeesSliceState = {
  employees: [],
  status: Status.LOADING,
}

type PaginationsParams = {
  currentPage: number,
}

export const fetchEmployees = createAsyncThunk<NumberOfEmployees[], PaginationsParams>(
  `employees/fetchEmployeesStatus`,
  async (params) => {
    const { currentPage } = params;
    const { data } = await axios.get<NumberOfEmployees[]>(`https://66e9e82987e41760944b0db3.mockapi.io/items?page=${currentPage}&limit=3`);
    
    return data
  },
)

const employeesSlice = createSlice({
  name: "employess",
  initialState,
  reducers: {
    setEmployees(state, actions: PayloadAction<NumberOfEmployees[]>) {
      state.employees = actions.payload;
    },
  },
  extraReducers: (bilder) => {
    bilder.addCase(fetchEmployees.pending, (state) => {
      state.status = Status.LOADING;
      state.employees = [];
    })
    bilder.addCase(fetchEmployees.fulfilled, (state, actions) => {
      state.status = Status.SUCCESS;
      state.employees = actions.payload;
    })
    bilder.addCase(fetchEmployees.rejected, (state) => {
      state.status = Status.ERROR;
      state.employees = [];
    })

  }
})

export const selectEmployeesData = (state: RootState) => state.employeesSlice

export const { setEmployees } = employeesSlice.actions;

export default employeesSlice.reducer;