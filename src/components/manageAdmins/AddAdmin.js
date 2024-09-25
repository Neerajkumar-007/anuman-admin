import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createAdmin, getrolesList, updateAdmin } from "../../Redux/Actions/admin/adminPanel";
const AddAdmin = ({ setAddUser,onHide,userData }) => {
  console.log(userData);
  const [loading, setLoading] = useState(false);
  const roleData=useSelector((state)=>state.adminPanel.roles)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getrolesList())
  }, []);
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.username) {
      errors.username = "Required";
    }
    if (!values.role) {
      errors.role = "Required";
    }
    if (!values.password) {
      errors.password = "Enter password";
    } else if (values.password.split(" ").length > 1) {
      errors.password = "Space not allowed";
    } else if (values.password.length < 8) {
      errors.password = "Password must be 8 characters long ";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm password";
    } else if (values.confirmPassword.split(" ").length > 1) {
      errors.confirmPassword = "Space not allowed";
    } else if (values.password != values.confirmPassword) {
      errors.confirmPassword = "Password doesn't match";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: userData?.name || "",           
      username: userData?.username || "",
      password: "",
      confirmPassword: "",
      role: userData?.role?.id || "",
    },
    validate,
    onSubmit: async (values) => {
      setLoading(true);
      const { confirmPassword, ...formValues } = values;
      try {
        if (userData) {
          dispatch(updateAdmin({ id: userData._id, data: formValues })).then((res) => {
            console.log(res);
            if (res.payload.data) {
              onHide();
            }
          });
        } else {
        dispatch(createAdmin(formValues)).then((res) => {
          if(res.payload.data){
            onHide();
          }
        });
      }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         {userData?"Update Admin":"Create Admin"} 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="table-responsive table-defaut-design">
          <label htmlFor="">Name</label>
          <div className="form-group mb-3">
            <input
              className="form-control"
              onChange={formik.handleChange}
              placeholder="Full Name"
              name="name"
              value={formik.values.name}
            />
            {formik.errors.name ? (
              <p className="formik-errors">{formik.errors.name}*</p>
            ) : null}
          </div>
          <label htmlFor="">User Name</label>
          <div className="form-group mb-3">
            <input
              className="form-control"
              onChange={formik.handleChange}
              placeholder="Full Name"
              name="username"
              value={formik.values.username}
            />
            {formik.errors.username ? (
              <p className="formik-errors">{formik.errors.username}*</p>
            ) : null}
          </div>
          <label htmlFor="">Role</label>

          <div className="form-group mb-3 role-select">
            <select
              id=""
              class="select-dropdown"
              onChange={formik.handleChange}
              value={formik.values.role}
              name="role"
            >
              <option value="" selected>
                Select Role
              </option>
              {roleData?.map((item, i) => {
                        return <option value={item?._id}>{item?.title}</option>;
                      })}
            </select>
            <div className="btn_submit add_btn">
              <button
                type="button"
                className="btn btn-primary btn-custom btn-lg w-100 submit_btn confirmation_btn"
                onClick={() => setAddUser(true)}
              >
                Add +
              </button>
            </div>
            {formik.errors.role ? (
              <p className="formik-errors">{formik.errors.role}*</p>
            ) : null}
          </div>
          <label htmlFor="">Password</label>
          <div className="form-group mb-3">
            <input
              className="form-control"
              type="password"
              onChange={formik.handleChange}
              placeholder="password"
              name="password"
              value={formik.values.password}
            />

            {formik.errors.password ? (
              <p className="formik-errors">{formik.errors.password}*</p>
            ) : null}
          </div>
          <label htmlFor="">Confirm Password</label>
          <div className="form-group mb-3">
            <input
              className="form-control"
              type="confirmPassword"
              id="c-password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={formik.handleChange}
              value={formik?.values?.confirmPassword?.trim()}
            />
            {formik.errors.confirmPassword ? (
              <div className="formik-errors">
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <div className="btn_submit ">
          <button
            type="submit"
            className="btn btn-primary btn-custom btn-lg w-100 submit_btn confirmation_btn"
            disabled={loading}
          >
              {loading ? (
              <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              userData?"Update":"Submit"
            )}
          </button>
        </div>
      </Modal.Footer>
    </form>
  );
};

export default AddAdmin;
