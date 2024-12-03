import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../apiInstance/Api";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("/users");

      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error("Failed to fetch users:", error);
      throw thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

export const addUserSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    dataArray: [],
    error: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.dataArray.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.dataArray = state.dataArray.filter((user) => user.id !== action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.dataArray = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
    //   .addCase(deleteUser.fulfilled, (state, action) => { 
    //     state.dataArray = state.dataArray.filter((user) => user.id !== action.payload); }) 
    //   .addCase(deleteUser.rejected, (state, action) => { 
    //     state.error = action.error.message; });;
  },
});

export const { addUser, deleteUser } = addUserSlice.actions;
export default addUserSlice.reducer;
