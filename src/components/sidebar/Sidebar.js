import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isHref = (pageStr, secondPageStr) => {
    if (
      window.location.href.split("/").includes(pageStr) ||
      window.location.href.split("/").includes(secondPageStr)
    ) {
      return true;
    } else {
      return false;
    }
  };
  const handleLogout = () => {
    window.sessionStorage.clear();
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="vertical-menu">
      <div data-simplebar="" className="h-100">
        {/* <!--- Sidemenu --> */}
        <div id="sidebar-menu">
          {/* <!-- Left Menu Start --> */}
          <div className="side-panel-flex-direction">
            <ul className="metismenu list-unstyled mt-4" id="side-menu">
              <li className="mm-active">
                <Link
                  className={
                    isHref("dashboard") ? "waves-effect active" : "waves-effect"
                  }
                  to="/admin/dashboard"
                >
                  <i>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0001 19V14H14.0001V19C14.0001 19.55 14.4501 20 15.0001 20H18.0001C18.5501 20 19.0001 19.55 19.0001 19V12H20.7001C21.1601 12 21.3801 11.43 21.0301 11.13L12.6701 3.6C12.2901 3.26 11.7101 3.26 11.3301 3.6L2.9701 11.13C2.6301 11.43 2.8401 12 3.3001 12H5.0001V19C5.0001 19.55 5.4501 20 6.0001 20H9.0001C9.5501 20 10.0001 19.55 10.0001 19Z"
                        fill={isHref("dashboard") ? "#1B95BC" : "#a6b0cf"}
                      />
                    </svg>
                  </i>
                  <span
                    style={{
                      color: isHref("dashboard") ? "#1B95BC" : "#a6b0cf",
                      fontWeight: isHref("dashboard") ? "600" : "400",
                    }}
                    key="t-dashboards"
                  >
                    Dashboard
                  </span>
                </Link>
              </li>

              <li className="mm-active">
                <Link
                  className={
                    isHref("member", "memberdetails")
                      ? "waves-effect active"
                      : "waves-effect"
                  }
                  to="/admin/member"
                >
                  <i>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="10"
                        r="3"
                        stroke={
                          isHref("member", "memberdetails")
                            ? "#1B95BC"
                            : "#a6b0cf"
                        }
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></circle>
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke={
                          isHref("member", "memberdetails")
                            ? "#1B95BC"
                            : "#a6b0cf"
                        }
                        strokeWidth="2"
                      ></circle>
                      <path
                        d="M17.7805 18.8264C17.9076 18.7566 17.9678 18.6055 17.914 18.4708C17.5284 17.5045 16.7856 16.6534 15.7814 16.0332C14.6966 15.3632 13.3674 15 12 15C10.6326 15 9.30341 15.3632 8.21858 16.0332C7.21444 16.6534 6.4716 17.5045 6.08598 18.4708C6.03223 18.6055 6.09236 18.7566 6.21948 18.8264C9.81971 20.803 14.1803 20.803 17.7805 18.8264Z"
                        fill={
                          isHref("member", "memberdetails")
                            ? "#1B95BC"
                            : "#a6b0cf"
                        }
                      ></path>
                    </svg>
                  </i>
                  <span
                    style={{
                      color: isHref("member", "memberdetails")
                        ? "#1B95BC"
                        : "#a6b0cf",
                      fontWeight: isHref("member", "memberdetails")
                        ? "600"
                        : "400",
                    }}
                    key="t-dashboards"
                  >
                    Members
                  </span>
                </Link>
              </li>
              <li className="mm-active">
                <Link
                  to="/admin/roles"
                  className={
                    isHref("roles") ? "waves-effect active" : "waves-effect"
                  }
                >
                  <i>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="10"
                        r="3"
                        stroke={
                          isHref("member", "memberdetails")
                            ? "#1B95BC"
                            : "#a6b0cf"
                        }
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></circle>
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke={
                          isHref("member", "memberdetails")
                            ? "#1B95BC"
                            : "#a6b0cf"
                        }
                        strokeWidth="2"
                      ></circle>
                      <path
                        d="M17.7805 18.8264C17.9076 18.7566 17.9678 18.6055 17.914 18.4708C17.5284 17.5045 16.7856 16.6534 15.7814 16.0332C14.6966 15.3632 13.3674 15 12 15C10.6326 15 9.30341 15.3632 8.21858 16.0332C7.21444 16.6534 6.4716 17.5045 6.08598 18.4708C6.03223 18.6055 6.09236 18.7566 6.21948 18.8264C9.81971 20.803 14.1803 20.803 17.7805 18.8264Z"
                        fill={
                          isHref("member", "memberdetails")
                            ? "#1B95BC"
                            : "#a6b0cf"
                        }
                      ></path>
                    </svg>
                  </i>
                  <span
                    style={{
                      color: isHref("roles") ? "#1B95BC" : "#a6b0cf",
                      fontWeight: isHref("roles") ? "600" : "400",
                    }}
                    key="t-dashboards"
                  >
                    Roles
                  </span>
                </Link>
              </li>
              <li className="mm-active">
                <Link
                  to="/admin/manage-category"
                  className={
                    isHref("manage-category")
                      ? "waves-effect active"
                      : "waves-effect"
                  }
                >
                  <i className="">
                    <svg
                      height="20"
                      viewBox="0 0 24 24"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20,8 L20,5 L18,5 L18,6 L16,6 L16,5 L8,5 L8,6 L6,6 L6,5 L4,5 L4,8 L20,8 Z M20,10 L4,10 L4,20 L20,20 L20,10 Z M18,3 L20,3 C21.1045695,3 22,3.8954305 22,5 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,5 C2,3.8954305 2.8954305,3 4,3 L6,3 L6,2 L8,2 L8,3 L16,3 L16,2 L18,2 L18,3 Z"
                        fill={isHref("manage-category") ? "#1B95BC" : "#a6b0cf"}
                        fill-rule="evenodd"
                      />
                    </svg>
                  </i>
                  <span
                    style={{
                      color: isHref("manage-category") ? "#1B95BC" : "#a6b0cf",
                      fontWeight: isHref("manage-category") ? "600" : "400",
                    }}
                    key="t-dashboards"
                  >
                    Category
                  </span>
                </Link>
              </li>
              {/* <li className="mm-active">
                <Link
                  to="/admin/contest"
                  className={
                    isHref("contest") ? "waves-effect active" : "waves-effect"
                  }
                >
                  <i className="">
                    <svg
                      height="20"
                      viewBox="0 0 24 24"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20,8 L20,5 L18,5 L18,6 L16,6 L16,5 L8,5 L8,6 L6,6 L6,5 L4,5 L4,8 L20,8 Z M20,10 L4,10 L4,20 L20,20 L20,10 Z M18,3 L20,3 C21.1045695,3 22,3.8954305 22,5 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,5 C2,3.8954305 2.8954305,3 4,3 L6,3 L6,2 L8,2 L8,3 L16,3 L16,2 L18,2 L18,3 Z"
                        fill={isHref("contest") ? "#1B95BC" : "#a6b0cf"}
                        fill-rule="evenodd"
                      />
                    </svg>
                  </i>
                  <span
                    style={{
                      color: isHref("contest") ? "#1B95BC" : "#a6b0cf",
                      fontWeight: isHref("contest") ? "600" : "400",
                    }}
                    key="t-dashboards"
                  >
                    Contest
                  </span>
                </Link>
              </li> */}
              <li className={`mm-active ${isOpen ? "sub-open" : ""}`}>
                <Link
                  className={
                    isHref("contest") ? "waves-effect active" : "waves-effect"
                  }
                  onClick={toggleDropdown}
                >
                  <i className="">
                    <svg
                      height="20"
                      viewBox="0 0 24 24"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20,8 L20,5 L18,5 L18,6 L16,6 L16,5 L8,5 L8,6 L6,6 L6,5 L4,5 L4,8 L20,8 Z M20,10 L4,10 L4,20 L20,20 L20,10 Z M18,3 L20,3 C21.1045695,3 22,3.8954305 22,5 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,5 C2,3.8954305 2.8954305,3 4,3 L6,3 L6,2 L8,2 L8,3 L16,3 L16,2 L18,2 L18,3 Z"
                        fill={isHref("contest") ? "#1B95BC" : "#a6b0cf"}
                        fillRule="evenodd"
                      />
                    </svg>
                  </i>
                  <span
                    style={{
                      color: isHref("contest") ? "#1B95BC" : "#a6b0cf",
                      fontWeight: isHref("contest") ? "600" : "400",
                    }}
                    key="t-dashboards"
                  >
                    Contest
                  </span>
                </Link>
                <ul className="custom-dropdown">
                  <li>
                    <Link
                      to="/admin/contest/live"
                      className={isHref("live") ? "active" : ""}
                    >
                      Live Contest
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/contest/ended"
                      className={isHref("ended") ? "active" : ""}
                    >
                      Ended Contest
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/contest/draft"
                      className={isHref("draft") ? "active" : ""}
                    >
                      Draft Contest
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/contest/canceled"
                      className={isHref("canceled") ? "active" : ""}
                    >
                      Canceled Contest
                    </Link>
                  </li>
                </ul>
                {/* <Dropdown className="submenu-dropdown">
        <Dropdown.Toggle
          variant="link"
          id="dropdown-basic"
          className={isHref("contest") ? "waves-effect active dropdown-toggle" : "waves-effect dropdown-toggle"}
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            padding: "0.5rem 1rem",
            width: "100%",
          }}
        >
          <i className="">
            <svg
              height="20"
              viewBox="0 0 24 24"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20,8 L20,5 L18,5 L18,6 L16,6 L16,5 L8,5 L8,6 L6,6 L6,5 L4,5 L4,8 L20,8 Z M20,10 L4,10 L4,20 L20,20 L20,10 Z M18,3 L20,3 C21.1045695,3 22,3.8954305 22,5 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,5 C2,3.8954305 2.8954305,3 4,3 L6,3 L6,2 L8,2 L8,3 L16,3 L16,2 L18,2 L18,3 Z"
                fill={isHref("contest") ? "#1B95BC" : "#a6b0cf"}
                fillRule="evenodd"
              />
            </svg>
          </i>
          <span
            style={{
              color: isHref("contest") ? "#1B95BC" : "#a6b0cf",
              fontWeight: isHref("contest") ? "600" : "400",
              marginLeft: "10px",
            }}
          >
            Contest
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/admin/contest/live"
            className={isHref("live") ? "active" : ""}
          >
           Live Contest
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            to="/admin/contest/ended"
            className={isHref("ended")? "active" : ""}
          >
            Ended Contest
          </Dropdown.Item>
          <Dropdown.Item
            as={Link}
            to="/admin/contest/draft"
            className={isHref("draft") ? "active" : ""}
          >
            Draft Contest
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
              </li>
              <li className="mm-active">
                <Link
                  to="/admin/manageAdmins"
                  className={
                    isHref("manageAdmins", "createAdmin")
                      ? "waves-effect active"
                      : "waves-effect"
                  }
                >
                  <i className="">
                    <svg
                      fill="none"
                      height="22"
                      viewBox="0 0 24 24"
                      width="22"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.8094 13.0002L4 12.999C2.896 12.999 2 13.895 2 14.999V16.5L2.00545 16.7296C2.1647 20.044 5.77787 21 8.5 21C9.53057 21 10.6887 20.863 11.739 20.513C11.5082 20.0726 11.3264 19.6025 11.2024 19.1096C10.5039 19.3342 9.68108 19.4686 8.8174 19.4951L8.5 19.5L8.18258 19.4951C6.91951 19.4563 5.74315 19.1869 4.917 18.742C3.95 18.222 3.5 17.509 3.5 16.5V14.999L3.51 14.898C3.53528 14.7733 3.6028 14.689 3.646 14.645C3.69 14.6018 3.77496 14.5343 3.89934 14.509L4 14.499L11.7323 14.4999C12.0194 13.949 12.3832 13.4444 12.8094 13.0002ZM13 6.5C13 4.015 10.985 2 8.5 2C6.015 2 4 4.015 4 6.5C4 8.985 6.015 11 8.5 11C10.985 11 13 8.985 13 6.5ZM5.5 6.5C5.5 4.846 6.846 3.5 8.5 3.5C10.154 3.5 11.5 4.846 11.5 6.5C11.5 8.154 10.154 9.5 8.5 9.5C6.846 9.5 5.5 8.154 5.5 6.5ZM21 7.5C21 5.567 19.433 4 17.5 4C15.567 4 14 5.567 14 7.5C14 9.433 15.567 11 17.5 11C19.433 11 21 9.433 21 7.5ZM15.5 7.5C15.5 6.397 16.397 5.5 17.5 5.5C18.603 5.5 19.5 6.397 19.5 7.5C19.5 8.603 18.603 9.5 17.5 9.5C16.397 9.5 15.5 8.603 15.5 7.5ZM16.0627 12.9013L15.5639 12.3765C15.0203 12.5967 14.5204 12.9068 14.0811 13.2892L14.2792 13.9754C14.5939 15.0656 13.9396 16.1991 12.838 16.4716L12.2538 16.6161C12.2089 16.9038 12.1855 17.199 12.1855 17.4998C12.1855 17.8145 12.2111 18.123 12.2601 18.4232L12.7996 18.5532C13.9121 18.8211 14.5734 19.9661 14.2496 21.0636L14.0633 21.6949C14.5024 22.0805 15.0029 22.3937 15.5474 22.6165L16.0407 22.0977C16.8293 21.2685 18.1515 21.2687 18.9398 22.0982L19.4385 22.623C19.9821 22.4027 20.4821 22.0925 20.9213 21.7101L20.7233 21.0242C20.4085 19.9339 21.0629 18.8005 22.1645 18.528L22.7482 18.3835C22.7931 18.0958 22.8165 17.8006 22.8165 17.4998C22.8165 17.1851 22.7909 16.8765 22.7418 16.5762L22.2029 16.4464C21.0904 16.1785 20.4291 15.0335 20.7529 13.9359L20.9391 13.3051C20.4999 12.9193 19.9995 12.6061 19.4549 12.3833L18.9618 12.9018C18.1732 13.7311 16.8509 13.7309 16.0627 12.9013ZM16.0513 17.4998C16.0513 16.6714 16.7004 15.9998 17.501 15.9998C18.3016 15.9998 18.9507 16.6714 18.9507 17.4998C18.9507 18.3282 18.3016 18.9998 17.501 18.9998C16.7004 18.9998 16.0513 18.3282 16.0513 17.4998Z"
                        fill={
                          isHref("manageAdmins", "createAdmin")
                            ? "#1B95BC"
                            : "#a6b0cf"
                        }
                      />
                    </svg>
                  </i>
                  <span
                    style={{
                      color: isHref("manageAdmins", "createAdmin")
                        ? "#1B95BC"
                        : "#a6b0cf",
                      fontWeight: isHref("manageAdmins", "createAdmin")
                        ? "600"
                        : "400",
                    }}
                    key="t-dashboards"
                  >
                    Manage Admins
                  </span>
                </Link>
              </li>
            </ul>
            <div className="logout-link">
              <Link to="/adminlogin" onClick={handleLogout}>
                Log Out
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- Sidebar --> */}
      </div>
    </div>
  );
};

export default Sidebar;
