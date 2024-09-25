import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../service/Api";

export const adminLogin = createAsyncThunk(
  "admin/login",
  async (data, thunkAPI) => {
    const response = await API.post("/admin/login", data);
    return response.data;
  }
);
export const getAccessList = createAsyncThunk(
  "admin/getAccessList",
  async ( thunkAPI) => {
    const response = await API.get("/admin/getAccessList");
    return response.data;
  }
);
