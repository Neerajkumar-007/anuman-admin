import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import ManageAdmins from "../components/manageAdmins/ManageAdmins";
import Member from "../components/members/Members";
import ManageCategory from "../components/quiz/ManageCategory";
import ManageQuestions from "../components/quiz/ManageQuestions";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

const RoutesPage = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route  path="/admin" element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route exact path="manageAdmins" element={<ManageAdmins />} />
          <Route exact path="manage-category" element={<ManageCategory />} />
          <Route exact path="manage-category/Questions/:id" element={<ManageQuestions />} />
          <Route exact path="member" element={<Member />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesPage;
