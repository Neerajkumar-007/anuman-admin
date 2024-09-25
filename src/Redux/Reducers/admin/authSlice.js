import { createSlice } from "@reduxjs/toolkit";
import { adminLogin, getAccessList } from "../../Actions/admin/auth";
import { toast } from "react-toastify";
const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  loggedInStatus: false,
  loginUserData:[]
};

const toastFunc = (err) => {
  toast.error(err, {
    position: "top-right",
    autoClose: 5000,
    limit: 1,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.fulfilled, (state, { payload }) => {
        state.user = payload;
        if (payload.token) {
          window.sessionStorage.setItem("adminToken", payload.token);
          window.location.href = "/admin/dashboard";
        }
        else if(!payload.token) {
          toastFunc(payload.message);
        }
      })
      .addCase(getAccessList.fulfilled, (state, { payload }) => {
        state.user = payload;
        if (payload) {
          state.loginUserData = payload.role;
        }
        else if(!payload.token) {
          toastFunc(payload.message);
        }
      })
     
  },
});

export const { keepMeLoggedIn, resetAdminData } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;
