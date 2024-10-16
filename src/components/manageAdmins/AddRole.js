import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import { useFormik } from "formik";
import { useState } from "react";
import { createRole, updateRole } from "../../Redux/Actions/admin/adminPanel";
import { useDispatch } from "react-redux";

const AddRole = ({ onHide, userData }) => {
  const [selectedList, setSelectedList] = useState([]);
  const [accessList, setAccessList] = useState([]);
  const dispatch = useDispatch();

  const sidebarList = [
    { value: "Dashboard", label: "Dashboard" },
    { value: "Members", label: "Members" },
    { value: "categories", label: "Category" },
    { value: "adminUsers", label: "Manage Admin" },
    { value: "contest", label: "Contest" },
  ];
  useEffect(() => {
    if (userData) {
      formik.setValues({
        title: userData.title || "",
      });
      setSelectedList(
        userData.permissions.map((perm) => {
          return sidebarList.find((item) => item.value === perm);
        })
      );
      setAccessList(userData.permissions || []);
    }
  }, [userData]);

  const handleSelectSidebar = (e) => {
    setSelectedList(e);
    var dataList = e.map((item) => {
      return item.value;
    });
    setAccessList(dataList);
    if (dataList.length > 0) {
      formik.setFieldError("accessList", "");
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Required";
    }
    if (accessList.length === 0) {
      errors.accessList = "At least one access must be selected";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validate,
    onSubmit: async (values) => {
      const updatedValues = {
        ...values,
        permissions: accessList,
      };

      try {
        if (userData && userData._id) {
          await dispatch(updateRole({ id: userData._id, data: updatedValues })).then((res) => {
            if (res) {
              onHide();
            }
          });
        } else {
          await dispatch(createRole(updatedValues)).then((res) => {
            if (res) {
              onHide();
            }
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {userData ? "Update Role" : "Create Role"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="table-responsive table-defaut-design">
          <label htmlFor="">Role Name</label>
          <div className="form-group mb-3">
            <input
              className="form-control"
              onChange={formik.handleChange}
              placeholder="Full Name"
              name="title"
              value={formik.values.title}
            />
            {formik.errors.title ? (
              <p className="formik-errors">{formik.errors.title}*</p>
            ) : null}
          </div>
          <label htmlFor="">Access</label>
          <Select
            className="form-group mb-3"
            isMulti
            options={sidebarList}
            onChange={handleSelectSidebar}
            value={selectedList}
            menuPortalTarget={document.body}
            styles={{
              menuPortal: (base) => ({ ...base, zIndex: 1050 }),
              menu: (base) => ({
                ...base,
                zIndex: 1050,
                maxHeight: "200px",
                overflowY: "auto",
              }),
              control: (base) => ({
                ...base,
                minHeight: "38px",
              }),
            }}
          />
          {formik.errors.accessList ? (
            <p className="formik-errors">{formik.errors.accessList}*</p>
          ) : null}
        </div>
      </Modal.Body>

      <Modal.Footer className="justify-content-between">
        <div className="btn_submit">
          <button
            onClick={() => onHide()}
            type="button"
            className="btn btn-primary btn-custom btn-lg w-100 submit_btn confirmation_btn"
          >
            Cancel
          </button>
        </div>
        <div className="btn_submit">
          <button
            type="submit"
            className="btn btn-primary btn-custom btn-lg w-100 submit_btn confirmation_btn"
          >
           { userData?"Update":"Submit"}
          </button>
        </div>
      </Modal.Footer>
    </form>
  );
};

export default AddRole;
