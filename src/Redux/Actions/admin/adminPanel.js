import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../service/Api";

//Actions for manage admin Page
export const createAdmin = createAsyncThunk(
  "createAdmin",
  async (data, thunkApi) => {
    const response = await api.post("/admin/createUser", data);
    return response.data;
  }
);
export const getAdmins = createAsyncThunk("getAdmins", async (thunkApi) => {
  const response = await api.get("/admin/getUsers");
  return response.data;
});
export const deleteAdmins = createAsyncThunk("deleteAdmins", async (id, thunkApi) => {
  const response = await api.delete(`/admin/deleteUser?id=${id}`);
  return response.data;
});
export const updateAdmin = createAsyncThunk("updateAdmin", async ({ id, data }, thunkApi) => {
  const response = await api.post(`/admin/editUser?id=${id}`,data);
  return response.data;
});
// role
export const createRole = createAsyncThunk(
  "createRole",
  async (data, thunkApi) => {
    const response = await api.post("/role/createRole", data);
    return response.data;
  }
);
export const getrolesList = createAsyncThunk(
  "getrolesList",
  async (data, thunkApi) => {
    const response = await api.get("/role/getRoles", data);
    return response.data;
  }
);
export const blockRoles = createAsyncThunk("blockRoles", async ({ id, data }, thunkApi) => {
  const response = await api.patch(`/role/updateBlockStatus?id=${id}`,data);
  return response.data;
});
export const updateRole = createAsyncThunk("updateRole", async ({ id, data }, thunkApi) => {
  const response = await api.patch(`/role/updateRole?id=${id}`,data);
  return response.data;
});
// category
export const getCategoryList = createAsyncThunk(
  "getCategoryList",
  async (thunkApi) => {
    const response = await api.get("/category/getCategories");
    return response.data;
  }
);
export const deleteCategory = createAsyncThunk("deleteCategory", async (id, thunkApi) => {
  const response = await api.delete(`/category/deleteCategory?id=${id}`);
  return response.data;
});
export const createCategory = createAsyncThunk(
  "createCategory",
  async (data, thunkApi) => {
    const response = await api.post("/category/createCategory", data);
    return response.data;
  }
);
export const updateCategory = createAsyncThunk("updateCategory", async ({ id, data }, thunkApi) => {
  console.log(data);
  const response = await api.patch(`/category/updateCategory?id=${id}`,data);
  return response.data;
});
// questions
export const getCategoryQuestion = createAsyncThunk(
  "getCategoryQuestion",
  async (id, thunkApi) => {
    const response = await api.get(`/category/getCategoryById?id=${id}`);
    return response.data;
  }
);
// question
export const deleteQuestion = createAsyncThunk("deleteQuestion", async (id, thunkApi) => {
  const response = await api.delete(`/questions/deleteQuestion?id=${id}`);
  return response.data;
});
export const createQuestion = createAsyncThunk(
  "createQuestion",
  async (data, thunkApi) => {
    const response = await api.post("/questions/addQuestion", data);
    return response.data;
  }
);
export const updateQuestion = createAsyncThunk("updateQuestion", async ({ id, data }, thunkApi) => {
  const response = await api.patch(`/questions/updateQuestion?id=${id}`,data);
  return response.data;
});
// Dashboard
export const getDashboard = createAsyncThunk("getDashboard", async (thunkApi) => {
  const response = await api.get("/dashboard/getDetails");
  return response.data;
});
// contest
export const getContests = createAsyncThunk(
  "getContests",
  async (data, thunkApi) => {
    const response = await api.post("/contest/getContestByStatus", data);
    return response.data;
  }
);
export const createContest = createAsyncThunk(
  "createContest",
  async (data, thunkApi) => {
    const response = await api.post("/contest/createContest", data);
    return response.data;
  }
);
export const getContestRanks = createAsyncThunk(
  "getContestRanks",
  async (id, thunkApi) => {
    const response = await api.get(`/contest/getContestById?id=${id}`);
    return response.data;
  }
);