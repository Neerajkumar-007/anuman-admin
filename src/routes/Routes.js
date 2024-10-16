import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contest from "../components/contest/Contest";
import ContestDraft from "../components/contest/ContestDraft";
import ContestEnded from "../components/contest/ContestEnded";
import ManageRank from "../components/contest/ManageRank";
import Dashboard from "../components/dashboard/Dashboard";
import ManageAdmins from "../components/manageAdmins/ManageAdmins";
import Member from "../components/members/Members";
import ManageCategory from "../components/quiz/ManageCategory";
import ManageQuestions from "../components/quiz/ManageQuestions";
import ManageRoles from "../components/roles/ManageRoles";
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
          <Route exact path="roles" element={<ManageRoles />} />
          <Route exact path="contest/live" element={<Contest />} />
          <Route exact path="contest/ended" element={<ContestEnded />} />
          <Route exact path="contest/draft" element={<ContestDraft />} />
          <Route exact path="manage-category/Questions/:id" element={<ManageQuestions />} />
          <Route exact path="/admin/contest/live/:id" element={<ManageRank />} />
          <Route exact path="member" element={<Member />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesPage;
