import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import CreateAdminModal from "./CreateAdminModal";
import { getAdmins, getrolesList } from "../../Redux/Actions/admin/adminPanel";
import ReactPaginate from "react-paginate";
import DeleteModal from "../modals/DeleteModal";
import CreateRole from "./CreateRole";

const ManageRoles = () => {
  const roleData=useSelector((state)=>state.adminPanel.roles)
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [delAdminShow, setDelAdminShow] = useState(false);
  const [userData, setUserData] = useState('');
  const [roleId, setRoleId] = useState();
  const [search, setSearch] = useState("");
  const [userBlock,setUserBlock]=useState(false)
  const [page, setPage] = useState(10);
  const [pageCount, setPageCount] = useState();
  const [resultOffset, setResultOffset] = useState(0);
  const [searchedMembers, setSearchedMembers] = useState("");
  const handleAdminDelete = (roleId,block) => {
    setRoleId(roleId);
    setDelAdminShow(true);
    setUserBlock(block)
  };
  const handleAdminUpdate = (admindata) => {
    setUserData(admindata);
    setModalShow(true);
  };
  useEffect(() => {
    dispatch(getrolesList())
  }, []);

  useEffect(() => {
    if (page && searchedMembers) {
      setPageCount(Math.ceil(searchedMembers.length / page));
    }
  }, [searchedMembers, page]);

  useEffect(() => {
    if (roleData) {
      setSearchedMembers(roleData);
    }
  }, [roleData]);
  useEffect(() => {
    const newArr = (Array.isArray(roleData) ? roleData : [])?.filter((data) =>
      data.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchedMembers(newArr || []); 
  }, [search, roleData]);

  const handlePageClick = (event) => {
    setResultOffset((event.selected * page) % searchedMembers.length);
  };
  return (
    <Layout>
      <div id="layout-wrapper" className="bg-dash admin-table">
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <div>
                      <span className="small_text">Manage Roles</span>
                      <h4 className="mb-sm-0 font-size-28">
                        Roles
                        <span className="header-title-text">
                          {/* {admins?.length} */}
                        </span>
                      </h4>
                    </div>
                    <div className="page-title-right">
                      <form className="app-search d-none d-lg-block ">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative w-100">
                            <input
                              value={search}
                              onChange={(e) => {
                                setSearch(e.target.value);setResultOffset(0)
                              }}
                              type="text"
                              className="form-control"
                              placeholder="Search"
                            />
                            <span className="bx bx-search"></span>
                          </div>
                          <img
                            // src={admin_avatar_header}
                            className="avata_serch"
                            alt=""
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <CreateRole
                show={modalShow}
                onHide={() => setModalShow(false)}
                userData={userData}
              />
              {roleId && (
                <DeleteModal
                  show={delAdminShow}
                  onHide={() => setDelAdminShow(false)}
                  roleId={roleId}
                  modalName={'deleteRole'}
                  userBlock={userBlock}
                />
              )}
              <div className="row">
                <div className="col-xl-12">
                  <div className="members_tbl">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                          <h4 className="title_text">Roles</h4>
                          <span>
                            <Link>
                              <button
                                type="button"
                                onClick={() =>{setModalShow((prev) => !prev);setUserData('')}}
                                className="btn cre_new"
                              >
                                Create
                              </button>
                            </Link>
                          </span>
                        </div>
                        <div className="table-responsive table-defaut-design dealer-table-c">
                          <table
                            id="datatable"
                            className="table  vehicles_table  w-100"
                          >
                            <thead>
                              <tr>
                                <th>Sr.No.</th>
                                <th>Title</th>
                                <th>Access</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody className="td_color trans_table_fix_height">
                              {Array.isArray(searchedMembers) &&
                              searchedMembers.length > 0 ? (
                                searchedMembers
                                  ?.slice(resultOffset, resultOffset + page)
                                  ?.map((role, i) => {
                                    return (
                                      <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{role?.title}</td>
                                        <td>
                                          {role?.permissions.join(", ")}
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            onClick={() =>
                                              handleAdminDelete(role?._id,role.block)
                                            }
                                            className={`btn que_btn ${role.block?'bloked_user':''}`}
                                          >
                                            {
                                              role.block?"Blocked":"Unblock"
                                            }
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() =>
                                              handleAdminUpdate(role)
                                            }
                                            className="deleteBtn "
                                          >
                                            <i className="bx bx-edit"></i>
                                          </button>
                                        </td>
                                      </tr>
                                    );
                                  })
                              ) : (
                                <tr>
                                  <td
                                    colSpan={5}
                                    valign="middle"
                                    className="h-370"
                                  >
                                    <p className="no_content_table">
                                      No Admins yet
                                    </p>
                                  </td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center pagination_inner mt-1">
                      <ReactPaginate
                        className="pagination"
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ManageRoles