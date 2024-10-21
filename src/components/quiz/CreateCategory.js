import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createCategory, updateCategory } from "../../Redux/Actions/admin/adminPanel";

const CreateCategory = ({ onHide, categoryData }) => {
  const dispatch = useDispatch();
  const [iconPreview, setIconPreview] = useState(null);

  useEffect(() => {
    if (categoryData && categoryData.img) {
      setIconPreview(categoryData.img);
    }
  }, [categoryData]);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.icon && !categoryData) {
      errors.icon = "Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: categoryData?.title || "",
      icon: null,
    },
    enableReinitialize: true,
    validate,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("title", values.name);
      if (values.icon) {
        formData.append("img", values.icon);
      }

      try {
        if (categoryData) {
          dispatch(updateCategory({id:categoryData._id, data:formData})).then((res) => {
            if (res.payload.category) {
              onHide();
            }
          });
        } else {
          dispatch(createCategory(formData)).then((res) => {
            if (res.payload.success) {
              onHide();
            }
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      formik.setFieldValue("icon", file);
      setIconPreview(URL.createObjectURL(file));
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {categoryData ? "Update Category" : "Create Category"}
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
          <label htmlFor="">Icon</label>
          <div className="form-group mb-3">
            <input
              type="file"
              className="form-control"
              id="icon"
              name="icon"
              onChange={handleFileChange}
              accept="image/*"
            />
            {iconPreview && (
              <div className="icon-preview">
                <img
                  src={iconPreview}
                  alt="Icon preview"
                  className="icon-preview-img"
                />
              </div>
            )}
            {formik.errors.icon ? (
              <p className="formik-errors">{formik.errors.icon}*</p>
            ) : null}
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <div className="btn_submit">
          <button
            type="submit"
            className="btn btn-primary btn-custom btn-lg w-100 submit_btn confirmation_btn"
          >
            {categoryData ? "Update" : "Submit"}
          </button>
        </div>
      </Modal.Footer>
    </form>
  );
};

export default CreateCategory;
