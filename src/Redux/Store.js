import { configureStore } from "@reduxjs/toolkit";
import adminAuthReducer from "./Reducers/admin/authSlice";
import adminPanelReducer from "./Reducers/admin/adminPanelSlice";
import globalReducer from "./Reducers/globalSlice";
export const store = configureStore({
  reducer: {
    adminAuth: adminAuthReducer,
    adminPanel: adminPanelReducer,
    globalSlice: globalReducer,
  },
});
