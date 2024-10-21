import React from 'react'

const SecondRow = ({dashboardData}) => {
  return (
    <div className="row">
      <div className="col-md-9">
        <div className="card">
          <div className="card-body h160">
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 position-relative">
              <h4 className="title_text">Question Data</h4>
            </div>
            <div className="row justify-content-between">
              <div className="col-lg-2 col-md-12">
                <div className="bglight dasb_text">
                  <h2>{dashboardData?.image}</h2>
                  <p className="dasb_text_p">Image</p>
                  <p className="dasb_textlastp">Total Image Questions</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-12">
                <div className="bgbrown dasb_text">
                  <h2>{dashboardData?.text}</h2>
                  <p className="dasb_text_p">Text</p>
                  <p className="dasb_textlastp">Total Text Questions</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-12">
                <div className="bgblue dasb_text">
                  <h2>{dashboardData?.video}</h2>
                  <p className="dasb_text_p">Videos</p>
                  <p className="dasb_textlastp">Total Videos Questions</p>
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
                  <h2>{dashboardData?.todayPercentage}</h2>
                  <p className="dasb_text_p">Percentage</p>
                  <p className="dasb_textlastp">Today Users Percentage</p>
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
              <h4 className="title_text">Questions</h4>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="bg_dasg_ble bgblue dasb_text">
                  <h2>
                   {dashboardData?.total}
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

export default SecondRow