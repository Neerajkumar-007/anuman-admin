import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
// import CreateQuizModal from "./CreateQuizModal";
import ReactPaginate from "react-paginate";
import { getCategoryQuestion, getContestRanks } from "../../Redux/Actions/admin/adminPanel";
// import DeleteModal from "../modals/DeleteModal";
const ManageRank = () => {
  const ranksList = useSelector((state) => state.adminPanel?.rankData);
  console.log(ranksList,"ranksList")
  // const categoryData = useSelector((state) => state.adminPanel?.categoryData);
  // const categoryQuestions = useSelector((state) => state.adminPanel.categoryQuestions);
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const { id } = useParams();
  const [modalShow, setModalShow] = useState(false);
  const [delAdminShow, setDelAdminShow] = useState(false);
  const [quesId, setQuesId] = useState();
  const [quesData, setQuesData] = useState('');
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(10);
  const [pageCount, setPageCount] = useState();
  const [resultOffset, setResultOffset] = useState(0);
  const [searchedMembers, setSearchedMembers] = useState("");
  const handleAdminDelete = (Id) => {
    setQuesId(Id);
    setDelAdminShow(true);
  };
  const handleUpdateQuestion = (data) => {
    setQuesData(data);
    setModalShow(true)
  };
  useEffect(() => {
    // dispatch(getCategoryQuestion(id))
    dispatch(getContestRanks(id))
  }, []);

  useEffect(() => {
    if (page && searchedMembers) {
      setPageCount(Math.ceil(searchedMembers.length / page));
    }
  }, [searchedMembers, page]);

  useEffect(() => {
    if (ranksList.rank) {
      setSearchedMembers(ranksList.rank);
    }
  }, [ranksList.rank]);

  useEffect(() => {
    const newArr = ranksList.rank?.filter((data) =>
      data.rank.toLowerCase().includes(search)
    );
    setSearchedMembers(newArr);
  }, [search]);

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
                      <span className="small_text">Manage Ranks</span>
                      <h4 className="mb-sm-0 font-size-28">
                      Ranks
                      </h4>
                    </div>
                    <div className="page-title-right">
                      <form className="app-search d-none d-lg-block ">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative w-100">
                            <input
                              onChange={(e) => {
                                setSearch(e.target.value); setResultOffset(0);
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
              {/* <CreateQuizModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                catId={id}
                quesData={quesData}
              />
              {quesId && (
                <DeleteModal
                  show={delAdminShow}
                  onHide={() => setDelAdminShow(false)}
                  quesId={quesId}
                  modalName={'deleteQuestion'}
                />
              )} */}
              <div className="row">
                <div className="col-xl-12">
                  <div className="members_tbl">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                          <h4 className="title_text">Contest: {ranksList?.name}</h4>
                          {/* <span>
                            <Link>
                              <button
                                type="button"
                                onClick={() => {setModalShow(true);setQuesData('')}}
                                className="btn cre_new"
                              >
                                Create Questions
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
                                <th>SR.NO.</th>
                                <th>Rank</th>
                                <th>Reward</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody className="td_color trans_table_fix_height">
                              {searchedMembers ? (
                                searchedMembers
                                  ?.slice(resultOffset, resultOffset + page)
                                  ?.map((que,i) => {
                                    return (
                                      <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{que?.rank}</td>
                                        <td>{que?.reward}</td>
                                        <td>
                                          <button
                                            type="button"
                                            onClick={() =>
                                              handleAdminDelete(que?._id)
                                            }
                                            className="deleteBtn "
                                          >
                                            <i class="bx bx-trash"></i>
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() =>
                                              handleUpdateQuestion(que)
                                            }
                                            className="deleteBtn "
                                          >
                                            <i class="bx bx-edit"></i>
                                          </button>
                                          {/* <button
                                            type="button"
                                            onClick={() =>
                                              navigate('/manage-category/Questions/:id')
                                            }
                                            className="btn que_btn"
                                          >
                                            Block
                                          </button> */}
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
                                      No Rank yet
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
  );
};

export default ManageRank;
