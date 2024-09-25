import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { adminLogin } from "../Redux/Actions/admin/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be 6 characters long";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await dispatch(adminLogin(values))
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div>
     <div className="bg-grey-admin">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="auth-full-page-content p-md-4 p-4 h-100">
                <div className="w-100 h-100">
                  <div className="d-flex flex-column h-100">
                    <div className="my-auto mx-width">
                      <div className="mt-4">
                        <div className="titl_text mb-5">
                          <h1 className="blue-heading-admin">Sign In</h1>
                          <p className="g-color fw-regular">
                            Enter your username and password to sign in!
                          </p>
                        </div>
                        <form
                          className="login-from-p"
                          onSubmit={formik.handleSubmit}
                        >
                          <div className="mb-3">
                            <label htmlFor="username" className="form-label ">
                              Username<span className="blue_text">*</span>
                            </label>
                            <input
                              name="username"
                              onChange={formik.handleChange}
                              type="username"
                              className="form-control"
                              id="username"
                              placeholder="Name"
                              value={formik.values.username}
                            />
                            {formik.errors.username ? (
                              <p style={{ color: "red" }}>
                                {formik.errors.username}*
                              </p>
                            ) : null}
                          </div>

                          <div className="mb-3 ">
                            <label htmlFor="username" className="form-label ">
                              Password<span className="blue_text">*</span>
                            </label>
                            <div className="input-group">
                              <input
                                onChange={formik.handleChange}
                                name="password"
                                type={show ? "text" : "password"}
                                className="form-control br-none"
                                id="password"
                                placeholder="Min.8 characters "
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                value={formik.values.password}
                              />

                              <button
                                onClick={() => setShow((prevVal) => !prevVal)}
                                className="btn btn-light "
                                type="button"
                                id="password-addon"
                              >
                                <i
                                  className={
                                    show
                                      ? "mdi mdi-eye-off-outline"
                                      : "mdi mdi-eye-outline"
                                  }
                                ></i>
                              </button>
                            </div>
                            {formik.errors.password ? (
                              <p style={{ color: "red" }}>
                                {formik.errors.password}*
                              </p>
                            ) : null}
                          </div>

                          <div className="d-flex justify-content-between check-login mb-3">
                            <div className="form-check ">
                              <input
                                  // onChange={(e) =>
                                  //   dispatch(keepMeLoggedIn(e.target.checked))
                                  // }
                                className="form-check-input"
                                type="checkbox"
                                id="remember-check"
                              />
                              <label
                                className="form-check-label light-green-text"
                                htmlFor="remember-check"
                              >
                                Keep me logged in
                              </label>
                            </div>
                          </div>
                          <div className="mt-4 d-grid">
                            <button
                              type="submit"
                              className="btn btn-primary-admin"
                              disabled={loading}
                            >
                               {loading ? (
                                <div className="spinner-border text-light" role="status">
                                  <span className="visually-hidden">Loading...</span>
                                </div>
                              ) : (
                                "Sign In"
                              )}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end col --> */}

            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="auth-full-bg bg-black pt-lg-5 p-4">
                <div className="bg-overlay">
                  <div className="new_logo">
                    <h1>Anuman</h1>
                    {/* <img src={admin_logo_login} alt="" /> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end col --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container-fluid --> */}
      </div>
    </div>
  );
}
