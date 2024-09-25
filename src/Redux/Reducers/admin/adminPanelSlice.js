import { createSlice } from "@reduxjs/toolkit";
import {
  createAdmin, createCategory, createQuestion, createRole, deleteAdmins, deleteCategory, deleteQuestion, getAdmins, getCategoryList, getCategoryQuestion, getrolesList, updateAdmin,
} from "../../Actions/admin/adminPanel";
import { toast } from "react-toastify";
export const toastSuccess = (err) => {
  toast.success(err, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
  });
};

export const toastError = (err) => {
  toast.error(err, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
  });
};

export const toastInfo = (msg) => {
  toast.info(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
  });
};

const initialState = {
  members: null,
  admins: [],
  roles: [],
  categoryList: [],
  categoryData:null,
  categoryQuestions:null,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const adminPanelSlice = createSlice({
  name: "adminPanel",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAdmin.fulfilled, (state, { payload }) => {
        if (payload?.data) {
          state.admins.unshift(payload.data[0]);
          toastSuccess(payload.message);
        }
        if (!payload) {
          toastError(payload.message);
        }
      })
      .addCase(deleteAdmins.fulfilled, (state, { payload }) => {
        if (payload) {
          const newArr = state.admins.filter(
            (mem) => mem._id != payload.user._id
          );
          state.admins = newArr;
          toastSuccess(payload.message);
        }
        if (!payload) {
          toastError(payload.message);
        }
      })
      .addCase(updateAdmin.fulfilled, (state, { payload }) => {
        if (payload) {
          state.admins=state.admins
          toastSuccess(payload.message);
        }
        if (!payload) {
          toastError(payload.message);
        }
      })
      .addCase(createRole.fulfilled, (state, { payload }) => {
        if (payload) {
          state.roles.unshift(payload.role);
          toastSuccess(payload.message);
        }
        if (payload.status==400) {
          toastError(payload.message);
        }
      })
      .addCase(getAdmins.fulfilled, (state, { payload }) => {
        if (payload) {
          state.admins = payload;
        }
      })
      .addCase(getrolesList.fulfilled, (state, { payload }) => {
        if (payload) {
          state.roles = payload;
        }
      })
      .addCase(getCategoryList.fulfilled, (state, { payload }) => {
        if (payload) {
          state.categoryList = payload;
        }
      })
      .addCase(deleteCategory.fulfilled, (state, { payload }) => {
        if (payload) {
          const newArr = state.categoryList.filter(
            (cat) =>{
              if(cat._id === payload.user._id && !payload.user.block){
                return false
              }else{
                return true
              }
            } 
          );
          if(newArr){
           const newList= state.categoryList =  state.categoryList.filter(
              (cat) => cat._id != payload.user._id )
              state.categoryList = newList
          }
          toastSuccess(payload.message);
        }
        if (!payload) {
          toastError(payload.message);
        }
      })
      .addCase(createCategory.fulfilled, (state, { payload }) => {
        if (payload) {
          state.categoryList.unshift(payload.data);
          toastSuccess(payload.message);
        }
        if (payload.status==400) {
          toastError(payload.message);
        }
      })
      .addCase(getCategoryQuestion.fulfilled, (state, { payload }) => {
        if (payload) {
          state.categoryData = payload.category;
          state.categoryQuestions = payload.question;
        }
      })
      .addCase(deleteQuestion.fulfilled, (state, { payload }) => {
        if (payload) {
          const newArr = state.categoryQuestions.filter(
            (que) => que._id != payload.data._id
          );
          state.categoryQuestions = newArr;
          toastSuccess(payload.message);
        }
        if (!payload) {
          toastError(payload.message);
        }
      })
      .addCase(createQuestion.fulfilled, (state, { payload }) => {
        if (payload) {
          state.categoryQuestions.unshift(payload);
          toastSuccess(payload.message);
        }
        if (payload.status==400) {
          toastError(payload.message);
        }
      })
  },
});

export const { pushNeedAssist } = adminPanelSlice.actions;

export default adminPanelSlice.reducer;
