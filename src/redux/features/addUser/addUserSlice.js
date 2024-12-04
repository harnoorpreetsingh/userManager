import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jsonApi } from "../../apiInstance/Api";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const response = await jsonApi.get("/users");
      return response.data;
    } catch (error) {
      console.error("Failed to fetch users:", error);
      throw thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id, thunkAPI) => {
    console.log(id, "delete ididididididididididididididi");
    try {
      const response = await jsonApi.delete(`/users/${id}`);
      console.log(response, "resrsrsrsrsrsrs");
      if (response.status === 200) {
        return id; // Returning the deleted user ID
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
      const response = await jsonApi.post("/users", data);
      if (response.status === 201) {
        return response.data; // Return the response data (including id)
      }
    } catch (error) {
      console.error("Failed to add user:", error);
      throw thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

const addUserSlice = createSlice({
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
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.dataArray = state.dataArray.filter(
          (user) => user.id !== action.payload
        ).map(
          (item, index) => ({
            ...item,
            id: index + 1,
          })
        );
        state.isLoading = false;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.newUser.push(action.payload); // Add new user data
        state.isLoading = false;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export default addUserSlice.reducer;
