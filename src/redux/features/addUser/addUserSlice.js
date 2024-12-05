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
      const state = thunkAPI.getState();
      const existingUsers = state.users.dataArray;
      // Check for duplicate ID
      const idExists = existingUsers.some((user) => user.id === data.id);
      if (idExists) {
        throw new Error("ID already exists");
      }
      // Check for duplicate email
      const emailExists = existingUsers.some(
        (user) => user.email === data.email
      );
      if (emailExists) {
        throw new Error("Email already exists");
      }
      const maxId = existingUsers.reduce(
        (max, user) => (user.id > max ? user.id : max),
        0
      );
      const newId = maxId + 1;
      // Increment the highest ID by 1
      const newUser = { ...data, id: newId };
      // Assign the new user ID
      const response = await jsonApi.post("/users", newUser);
      if (response.status === 201) {
        return response.data;
        // Return the response data (including id)
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
  },
  reducers: {},
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
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.dataArray = state.dataArray
          .filter((user) => user.id !== action.payload)
          .map((user, index) => ({
            ...user,
            id: index + 1,
          }));
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
        state.dataArray.push(action.payload); // Add new user data
        state.isLoading = false;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export default addUserSlice.reducer;
