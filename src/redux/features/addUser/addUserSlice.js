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

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id, thunkAPI) => {
    try {
      const response = await api.delete(`/users/${id}`);
      if (response.status === 200) {
        return id;
      }
    } catch (error) {
      console.error("Failed to delete user:", error);
      throw thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

export const addUser = createAsyncThunk(
  "users/addUser",
  async (data, thunkAPI) => {
    try {
      // const state = thunkAPI.getState();
      // const newId = state.users.dataArray.length + 1; // Use the length of dataArray as the new ID
      // const newUser = { ...data, id: newId };
      const response = await api.post("/users", data);
      if (response.status === 201) {
        console.log(response.data, "response.data");
        return response.data; // Return the response data which includes the id
      }
    } catch (error) {
      console.error("Failed to add user:", error);
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
    newUser: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.dataArray = [...action.payload, ...state.newUser];
        state.isLoading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        console.log(action.payload, "add case del user");
        state.dataArray = state.dataArray.filter(
          (user) => user.id !== action.payload
        );
        state.isLoading = false;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(addUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.newUser.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export default addUserSlice.reducer;
