import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccessList } from "../../Redux/Actions/admin/auth";
import ConditionSidebar from "../sidebar/ConditionSidebar";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";

const Layout = ({ children }) => {
  const admins = useSelector((state) => state.adminAuth.loginUserData);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAccessList())
  },[])
  return (
    <>
      <Topbar />
      {admins.title=="superAdmin"?<Sidebar />:<ConditionSidebar access_list={admins?.permissions}/>}
      {children}
    </>
  );
};

export default Layout;
