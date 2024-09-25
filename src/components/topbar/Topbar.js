import React from "react";

const Topbar = () => {
  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          {/* <!-- LOGO --> */}
          <div className="navbar-brand-box">
            <a href="/login" className="logo logo-dark">
              <span className="logo-sm">
                Anuman
                {/* <img src={admin_logo_sidebar} alt="" height="22" /> */}
                <img
                src=""
                  // src={require("../../../assets/images/blck-logo.png")}
                  alt="logo"
                />
              </span>
              <span className="logo-lg">
              Anuman
                {/* <img src={admin_logo_sidebar} alt="" height="17" /> */}
                <img
                src=""
                  // src={require("../../../assets/images/blck-logo.png")}
                  alt="logo"
                />
              </span>
            </a>

            <a href="/login" className="logo logo-light">
              <span className="logo-sm">
              Anuman
                {/* <img src={admin_logo_sidebar} alt="" height="12" /> */}
                <img
                src=""
                  // src={require("../../../assets/images/blck-logo.png")}
                  alt="logo"
                />
              </span>
              <span className="logo-lg">
              Anuman
                {/* <img src={admin_logo_sidebar} alt="" height="40" /> */}
                <img
                src=""
                  // src={require("../../../assets/images/blck-logo.png")}
                  alt="logo"
                />
              </span>
            </a>
          </div>

          <button
            type="button"
            className="btn btn-sm px-3 font-size-16 header-item waves-effect d-none"
            id="vertical-menu-btn"
          >
            <i className="fa fa-fw fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
