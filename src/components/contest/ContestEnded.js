import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import CreateAdminModal from "./CreateAdminModal";
import { getContests } from "../../Redux/Actions/admin/adminPanel";
import ReactPaginate from "react-paginate";
// import DeleteModal from "../modals/DeleteModal";

const ContestEnded = () => {
    const contest = useSelector((state) => state.adminPanel.liveContest);
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const [modalShow, setModalShow] = useState(false);
    const [delAdminShow, setDelAdminShow] = useState(false);
    const [userData, setUserData] = useState('');
    const [adminId, setAdminId] = useState();
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(10);
    const [pageCount, setPageCount] = useState();
    const [resultOffset, setResultOffset] = useState(0);
    const [searchedMembers, setSearchedMembers] = useState("");
    const handleAdminDelete = (adminId) => {
      setAdminId(adminId);
      setDelAdminShow(true);
    };
    const handleAdminUpdate = (admindata) => {
      setUserData(admindata);
      setModalShow(true);
    };
    useEffect(() => {
      dispatch(getContests({status:"ended"}));
    }, []);
  
    useEffect(() => {
      if (page && searchedMembers) {
        setPageCount(Math.ceil(searchedMembers.length / page));
      }
    }, [searchedMembers, page]);
  
    useEffect(() => {
      if (contest) {
        setSearchedMembers(contest);
      }
    }, [contest]);
    useEffect(() => {
      const newArr = (Array.isArray(contest) ? contest : [])?.filter((data) =>
        data.name.toLowerCase().includes(search.toLowerCase())
      );
      setSearchedMembers(newArr || []); 
    }, [search, contest]);
  
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
                      <span className="small_text">Ended Contest</span>
                      <h4 className="mb-sm-0 font-size-28">
                      Contest
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
              {/* <CreateAdminModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                userData={userData}
              />
              {adminId && (
                <DeleteModal
                  show={delAdminShow}
                  onHide={() => setDelAdminShow(false)}
                  adminId={adminId}
                  modalName={'deleteAdmin'}
                />
              )} */}
              <div className="row">
                <div className="col-xl-12">
                  <div className="members_tbl">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                          <h4 className="title_text">Ended Contest</h4>
                          {/* <span>
                            <Link>
                              <button
                                type="button"
                                onClick={() =>{setModalShow((prev) => !prev);setUserData('')}}
                                className="btn cre_new"
                              >
                                Create
                              </button>
                            </Link>
                          </span> */}
                        </div>
                        <div className="table-responsive table-defaut-design dealer-table-c">
                          <table
                            id="datatable"
                            className="table  vehicles_table  w-100"
                          >
                            <thead>
                              <tr>
                                <th>Sr.No.</th>
                                <th>Name</th>
                                <th>Price Pool</th>
                                <th>End Time</th>
                                <th>Fee</th>
                                <th>Rank</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody className="td_color trans_table_fix_height">
                              {Array.isArray(searchedMembers) &&
                              searchedMembers.length > 0 ? (
                                searchedMembers
                                  ?.slice(resultOffset, resultOffset + page)
                                  ?.map((contest, i) => {
                                    return (
                                      <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{contest?.name}</td>
                                        <td>{contest?.pricePool}</td>
                                        <td>{contest?.endTime}</td>
                                        <td>{contest?.entryFee}</td>
                                        <td>
                                          {contest?.status}
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            onClick={() =>
                                              handleAdminDelete(contest?._id)
                                            }
                                            className="deleteBtn "
                                          >
                                            <i className="bx bx-trash"></i>
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() =>
                                              handleAdminUpdate(contest)
                                            }
                                            className="deleteBtn "
                                          >
                                            <i className="bx bx-edit"></i>
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() =>
                                              navigate('/manage-category/Questions/:id')
                                            }
                                            className="btn que_btn"
                                          >
                                            Block
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
                                      No Ended Contest yet
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

export default ContestEnded