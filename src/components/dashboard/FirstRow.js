import React from "react";

const FirstRow = ({ dashboardData }) => {
  return (
    <div className="row">
      <div className="col-md-9">
        <div className="card">
          <div className="card-body h160">
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
              <h4 className="title_text"> User Data</h4>
            </div>
            <div className="row justify-content-between">
              <div className="col-lg-2 col-md-12">
                <div className="bglight dasb_text">
                  <h2>{dashboardData?.month}</h2>
                  <p className="dasb_text_p">Monthly</p>
                  <p className="dasb_textlastp">New Users This Month</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-12">
                <div className="bgbrown dasb_text">
                  <h2>{dashboardData?.week}</h2>
                  <p className="dasb_text_p">Weekly</p>
                  <p className="dasb_textlastp">New Users This Week</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-12">
                <div className="bgblue dasb_text">
                  <h2> {dashboardData?.today}</h2>
                  <p className="dasb_text_p">Today</p>
                  <p className="dasb_textlastp"> New Users This Today</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-12">
                <div className="bgblue dasb_text">
                  <h2>{dashboardData?.blockedUsers}</h2>
                  <p className="dasb_text_p">Blocked</p>
                  <p className="dasb_textlastp">Total Users Bloked</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-12">
                <div className="bgblue dasb_text">
                  <h2>{dashboardData?.unblockedUsers}</h2>
                  <p className="dasb_text_p">Unblocked</p>
                  <p className="dasb_textlastp">Total Users Unblocked</p>
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
              <h4 className="title_text">Total Users</h4>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="bg_dasg_ble bgblue dasb_text">
                  <h2>{dashboardData?.total}</h2>
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
  );
};

export default FirstRow;
