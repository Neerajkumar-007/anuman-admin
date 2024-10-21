import { createSlice } from "@reduxjs/toolkit";
import {
  createAdmin,
  createCategory,
  createQuestion,
  createRole,
  deleteAdmins,
  deleteCategory,
  deleteQuestion,
  blockRoles,
  getAdmins,
  getCategoryList,
  getCategoryQuestion,
  getContests,
  getDashboard,
  getrolesList,
  updateAdmin,
  updateCategory,
  updateQuestion,
  updateRole,
  createContest,
  getContestRanks,
  goLiveContest,
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
  dashboardData: [],
  roles: [],
  categoryList: [],
  categoryData: null,
  categoryQuestions: null,
  liveContest: [],
  endedContest: [],
  draftContest: [],
  rankData: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const adminPanelSlice = createSlice({
  name: "adminPanel",
  initialState,
  reducers: {},
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
        if (payload.user) {
        //   const updatedAdmin = state.admins.map((data) =>
        //   data._id === payload.user._id ? { ...data, ...payload.user } : data
        // );
        // console.log(updatedAdmin,"updatedAdmin");
        // state.admins = updatedAdmin;
          toastSuccess(payload.message);
        }
        if (!payload) {
          toastError(payload.message);
        }
      })
      .addCase(updateCategory.fulfilled, (state, { payload }) => {
        if (payload) {
          const updatedCategory = state.categoryList.map((data) =>
            data._id === payload.category._id
              ? { ...data, ...payload.category }
              : data
          );
          state.categoryList = updatedCategory;
          toastSuccess(payload.message);
        }
        if (!payload) {
          toastError(payload.message);
        }
      })
      .addCase(updateQuestion.fulfilled, (state, { payload }) => {
        if (payload) {
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
        if (payload.status == 400) {
          toastError(payload.message);
        }
      })
      .addCase(blockRoles.fulfilled, (state, { payload }) => {
        if (payload) {
          const updatedRoles = state.roles.map((role) =>
            role._id === payload.role._id ? { ...role, ...payload.role } : role
          );
          state.roles = updatedRoles;
          toastSuccess(payload.message);
        }
        if (!payload) {
          toastError(payload.message);
        }
      })
      .addCase(updateRole.fulfilled, (state, { payload }) => {
        if (payload) {
          const updatedRoles = state.roles.map((role) =>
            role._id === payload.role._id ? { ...role, ...payload.role } : role
          );
          state.roles = updatedRoles;
          toastSuccess(payload.message);
        }
        if (!payload) {
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
          const newArr = state.categoryList.filter((cat) => {
            if (cat._id === payload.user._id && !payload.user.block) {
              return false;
            } else {
              return true;
            }
          });
          if (newArr) {
            const newList = (state.categoryList = state.categoryList.filter(
              (cat) => cat._id != payload.user._id
            ));
            state.categoryList = newList;
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
        if (payload.status == 400) {
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
        if (payload.status == 400) {
          toastError(payload.message);
        }
      })
      .addCase(getDashboard.fulfilled, (state, { payload }) => {
        if (payload) {
          state.dashboardData = payload;
        }
      })
      .addCase(getContests.fulfilled, (state, { payload }) => {
        if (payload) {
          state.liveContest = payload;
          state.endedContest = payload;
          state.draftContest = payload;
        }
      })
      .addCase(createContest.fulfilled, (state, { payload }) => {
        if (payload.data) {
          state.draftContest.unshift(payload.data);
          toastSuccess(payload.message);
        }
        if (!payload) {
          toastError(payload.message);
        }
      })
      .addCase(goLiveContest.fulfilled, (state, { payload }) => {
        if (payload) {
          const newArr = state.liveContest.filter(
            (data) => data._id != payload.contest._id
          );
          state.liveContest = newArr;
          toastSuccess(payload.message);
        }
        if (!payload) {
          toastError(payload.message);
        }
      })
      .addCase(getContestRanks.fulfilled, (state, { payload }) => {
        if (payload) {
          state.rankData = payload.contest;
        }
      });
  },
});

export const { pushNeedAssist } = adminPanelSlice.actions;

export default adminPanelSlice.reducer;
