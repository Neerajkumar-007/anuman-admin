import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import CreateQuizModal from "./CreateQuizModal";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryList } from "../../Redux/Actions/admin/adminPanel";
import DeleteModal from "../modals/DeleteModal";
const ManageCategory = () => {
  const categoryList = useSelector((state) => state.adminPanel.categoryList);
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [modalShow, setModalShow] = useState(false);
  const [questinsShow, setQuestinsShow] = useState(false);
  const [delAdminShow, setDelAdminShow] = useState(false);
  const [categoryId, setCategoryId] = useState();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(10);
  const [pageCount, setPageCount] = useState();
  const [resultOffset, setResultOffset] = useState(0);
  const [searchedMembers, setSearchedMembers] = useState("");
  const handleAdminDelete = (catId) => {
    setCategoryId(catId);
    setDelAdminShow(true);
  };
  const handleUpdateCat = (catId) => {
    setCategoryId(catId);
    setModalShow(true);
  };
  useEffect(() => {
    dispatch(getCategoryList())
  }, []);

  useEffect(() => {
    if (page && searchedMembers) {
      setPageCount(Math.ceil(searchedMembers.length / page));
    }
  }, [searchedMembers, page]);

  useEffect(() => {
    if (categoryList) {
      setSearchedMembers(categoryList);
    }
  }, [categoryList]);

  useEffect(() => {
    const newArr = categoryList?.filter((data) =>
      data.title.toLowerCase().includes(search)
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
                      <span className="small_text">Manage Category</span>
                      <h4 className="mb-sm-0 font-size-28">
                      Category
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
              <CreateQuizModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                questinsShow={questinsShow}
                catId={categoryId}
              />
               {categoryId && (
                <DeleteModal
                  show={delAdminShow}
                  onHide={() => setDelAdminShow(false)}
                  categoryId={categoryId}
                  modalName={'deleteCategory'}
                />
              )}
              <div className="row">
                <div className="col-xl-12">
                  <div className="members_tbl">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                          <h4 className="title_text">Category</h4>
                          <span>
                            <Link>
                              <button
                                type="button"
                                onClick={() =>{setModalShow(true);setQuestinsShow(true)}}
                                className="btn cre_new"
                              >
                                Create Category
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
                                <th>SR.NO.</th>
                                <th>Icon</th>
                                <th>Title</th>
                                <th>Q-Count</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody className="td_color trans_table_fix_height">
                              {searchedMembers ? (
                                searchedMembers
                                  ?.slice(resultOffset, resultOffset + page)
                                  ?.map((category,i) => {
                                    return (
                                      <tr key={i}>
                                        <td>{i+1}</td>
                                        <td><img height={50} width={50} alt={category?.title} src={category?.img} /></td>
                                        <td>{category?.title}</td>
                                        <td>2</td>
                                        <td>
                                          <button
                                            type="button"
                                            onClick={() =>
                                              handleAdminDelete(category?._id)
                                            }
                                            className="deleteBtn "
                                          >
                                            <i class="bx bx-trash"></i>
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() =>
                                              handleUpdateCat(category?._id)
                                            }
                                            className="deleteBtn "
                                          >
                                            <i class="bx bx-edit"></i>
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() =>
                                              {navigate(`/admin/manage-category/Questions/${category?._id}`);
                                              setQuestinsShow(false)}
                                            }
                                            className="btn que_btn"
                                          >
                                            Q
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
                                      No Category yet
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

export default ManageCategory;
