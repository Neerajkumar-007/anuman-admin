import React from 'react'

const FirstRow = () => {
  return (
    <div className="row">
      <div className="col-md-9">
        <div className="card">
          <div className="card-body h160">
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
              <h4 className="title_text"> Overview</h4>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="bglight dasb_text">
                  <h2>
                      0
                      {/* {usersDashboard?.totalUsers} */}
                  </h2>
                  <p className="dasb_text_p">Total Users </p>
                  <p className="dasb_textlastp">
                    {/* {usersDashboard?.usersPerMonth} */}
                     New Users This Month
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="bgbrown dasb_text">
                  <h2>
                    {/* {usersDashboard?.totalCons?.length > 0
                      ? usersDashboard?.totalCons?.length
                      : "0"} */}
                      0
                  </h2>
                  <p className="dasb_text_p"> </p>
                  <p className="dasb_textlastp">
                    {/* {usersDashboard?.consPerMonth} */}
                     New Booking This Month
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="bgblue dasb_text">
                  <h2>90</h2>
                  <p className="dasb_text_p">Practice Refferals</p>
                  <p className="dasb_textlastp">0% increase from last month</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="bgblue dasb_text">
                  <h2>90</h2>
                  <p className="dasb_text_p">Income</p>
                  <p className="dasb_textlastp">0% increase from last month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <div className="card-body h160">
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
              <h4 className="title_text">Live Users</h4>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="bg_dasg_ble bgblue dasb_text">
                  <h2>
                      0
                    {/* {onlineUsers && onlineUsers?.length > 0
                      ? onlineUsers?.length
                      : "0"} */}
                  </h2>
                  <p className="mb-2">
                    Total <br />
                    &nbsp;
                  </p>
                </div>
              </div>
              {/* <div className="col-md-6">
                <div className="bg_dasg_ble bgyelow dasb_text">
                  <h2>12,123</h2>
                  <p className="mb-2">
                    Total <br />
                    &nbsp;
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstRow