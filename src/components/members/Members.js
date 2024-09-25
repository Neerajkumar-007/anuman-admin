import Layout from "../layout/Layout";

export default function Member() {


  return (
    <Layout>
      <div id="layout-wrapper" className="bg-dash admin-table">
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              {/* <!-- start page title --> */}

              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <div>
                      <span className="small_text">Members</span>
                      <h4 className="mb-sm-0 font-size-28">
                        All Members
                        <span className="header-title-text">
                          {/* {members && members.length} */}
                        </span>
                      </h4>
                    </div>
                    <div className="page-title-right">
                      {/* <!-- App Search--> */}
                      <form className="app-search d-none d-lg-block ">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative w-100">
                            <input
                              // value={query}
                              // onChange={(e) => {
                              //   setQuery(e.target.value);
                              //   setResultOffset(0);
                              // }}
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
              <div className="row">
                <div className="col-xl-12">
                  <div className="members_tbl">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
                          <h4 className="title_text">All Members</h4>
                        </div>
                        <div className="table-responsive table-defaut-design dealer-table-c">
                          <table
                            id="datatable"
                            className="table dt-responsive dealers_table nowrap w-100 custom-table-new position-relative"
                          >
                            <thead>
                              <tr>
                                <th>Member No.</th>
                                <th>Name</th>
                                <th>Joining Date</th>
                                <th>Email Address</th>
                                <th>Paid to Date</th>
                                <th>Status</th>
                                <th>Last Log in</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody className="td_color td_blue">
                              {/* {searchedMembers ? (
                                searchedMembers
                                  ?.slice(
                                    resultOffset,
                                    resultOffset + resultPerPage
                                  )

                                  ?.map((member) => {
                                    return (
                                      <tr
                                        key={member?.member?._id}
                                        className="members_row font-black"
                                      >
                                        <td>{member?.member?.memberNo}</td>
                                        <td
                                          onClick={() =>
                                            handleMemberClick(member)
                                          }
                                          className="name_cursor"
                                        >
                                          {member?.member?.firstName.concat(
                                            " ",
                                            member?.member?.lastName
                                          )}
                                        </td>
                                        <td>
                                          {MomentFunc.Date(
                                            member?.member?.createdAt
                                          )}
                                        </td>
                                        <td>{member?.member?.email}</td>
                                        <td>
                                          {member?.pastConsultations?.length}
                                        </td>
                                        <td>
                                          {
                                            member?.upcomingConsultations
                                              ?.length
                                          }
                                        </td>
                                        <td>
                                          {MomentFunc.Date(
                                            member?.upcomingConsultations[0]
                                              ?.date
                                          )}
                                        </td>
                                        <td>
                                          £{" "}
                                          {member?.paidToDate
                                            ? member?.paidToDate
                                            : "-"}{" "}
                                        </td>
                                        <td>
                                          {member?.member?.verified == 0
                                            ? "Not Verified"
                                            : "Verified"}
                                        </td>
                                        <td>
                                          {MomentFunc.Date(
                                            member?.member?.lastLogin
                                          )}
                                        </td>
                                        <td>
                                          <button
                                            type="button"
                                            onClick={() =>
                                              handleMemberDelete(
                                                member?.member?._id
                                              )
                                            }
                                            className="deleteBtn "
                                            // data-bs-toggle="modal"
                                            // data-bs-target="#exampleModal"
                                          >
                                            <i class="bx bx-trash"></i>
                                          </button>
                                        </td>
                                      </tr>
                                    );
                                  })
                              ) : (
                                <tr>
                                  <td
                                    colSpan={11}
                                    valign={"middle"}
                                    className="h-370"
                                  >
                                    <p className="no_content_table">
                                      No Members Yet
                                    </p>
                                  </td>
                                </tr>
                              )} */}
                            </tbody>
                          </table>
                        </div>
                        <div className="d-flex justify-content-center pagination_inner mt-1">
                          {/* <ReactPaginate
                            className="pagination"
                            breakLabel="..."
                            nextLabel=">"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="<"
                            renderOnZeroPageCount={null}
                          /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- table row end --> */}
            </div>{" "}
            {/* <!-- container fluid --> */}
          </div>{" "}
          {/* <!-- End Page-content --> */}
        </div>
        {/* <!-- end main content--> */}
      </div>
    </Layout>
  );
}
