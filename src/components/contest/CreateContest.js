import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createContest, getCategoryList, updateAdmin } from "../../Redux/Actions/admin/adminPanel";

const CreateContest = (props) => {
  const [loading, setLoading] = useState(false);
  const [catData,setCatdata] =useState([])
  const categoryData = useSelector((state) => state.adminPanel?.categoryList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryList())
  }, []);
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.type) {
      errors.type = "Required";
    }
    if (!values.categoryId) {
      errors.categoryId = "Required";
    }
    if (!values.pricePool) {
      errors.pricePool = "Required";
    }
    if (!values.entryFee) {
      errors.entryFee = "Required";
    }
    // if (!values.endTime) {
    //   errors.endTime = "Required";
    // }
    if (!values.users) {
      errors.users = "Required";
    }
    if (!values.max) {
      errors.max = "Required";
    }
    if (!values.min) {
      errors.min = "Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: props.userData?.name || "",           
      type: props.userData?.type || "",
      categoryId: props.userData?.categoryId?.id || "",
      pricePool:"",
      entryFee:"",
      // endTime:"",
      users:"",
      max:"",
      min:""

    },
    validate,
    onSubmit: async (values) => {
      setLoading(true);
      const { confirmPassword, ...formValues } = values;
      try {
        if (props.userData) {
          dispatch(updateAdmin({ id: props.userData._id, data: formValues })).then((res) => {
            if (res.payload.user) {
              props.onHide();
            }
          });
        } else {
        dispatch(createContest(formValues)).then((res) => {
          if(res.payload.data){
            props.onHide();
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
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="admin-popup"
    >
     <form onSubmit={formik.handleSubmit}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         {props.userData?"Update Contest":"Create Contest"} 
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
          <label htmlFor="">Contest Type</label>
          <div className="form-group mb-3">
              <select
              id=""
              class="select-dropdown"
              onChange={formik.handleChange}
              value={formik.values.type}
              name="type"
            >
              <option value="" selected>
                Select here...
              </option>
              <option value='isFree'>Free</option>
              <option value='isPaid'>Paid</option>
            </select>
            {formik.errors.type ? (
              <p className="formik-errors">{formik.errors.type}*</p>
            ) : null}
          </div>
          <label htmlFor="">Category</label>

          <div className="form-group mb-3 role-select">
            <select
              id=""
              class="select-dropdown"
              onChange={formik.handleChange}
              value={formik.values.categoryId}
              name="categoryId"
            >
              <option value="" selected>
                Select Category
              </option>
              {categoryData?.map((item, i) => {
                        return <option value={item?._id}>{item?.title}</option>;
                      })}
            </select>
            {formik.errors.categoryId ? (
              <p className="formik-errors">{formik.errors.categoryId}*</p>
            ) : null}
          </div>
         <div className="d-flex justify-content-between">
         <div className="form-group mb-3">
          <label htmlFor="">Prize Pool</label>
            <input
              type="number"
              className="form-control"
              onChange={formik.handleChange}
              placeholder="Prize pool"
              name="pricePool"
              value={formik.values.pricePool}
            />
            {formik.errors.pricePool ? (
              <p className="formik-errors">{formik.errors.pricePool}*</p>
            ) : null}
          </div>
          <div className="form-group mb-3">
          <label htmlFor="">Entry Fee</label>
            <input
              type="number"
              className="form-control"
              onChange={formik.handleChange}
              placeholder="Fees"
              name="entryFee"
              value={formik.values.entryFee}
            />
            {formik.errors.entryFee ? (
              <p className="formik-errors">{formik.errors.entryFee}*</p>
            ) : null}
          </div>
          <div className="form-group mb-3">
          <label htmlFor="">Rank Users</label>
            <input
              type="number"
              className="form-control"
              onChange={formik.handleChange}
              placeholder="Enter Users"
              name="users"
              value={formik.values.users}
            />
            {formik.errors.users ? (
              <p className="formik-errors">{formik.errors.users}*</p>
            ) : null}
          </div>
         </div>
          <div className="d-flex justify-content-around">
          {/* <div className="form-group mb-3">
          <label htmlFor="">Set Time</label>
            <input
              type="number"
              className="form-control"
              onChange={formik.handleChange}
              placeholder="Enter end time"
              name="endTime"
              value={formik.values.endTime}
            />
            {formik.errors.endTime ? (
              <p className="formik-errors">{formik.errors.endTime}*</p>
            ) : null}
          </div> */}
          <div className="form-group mb-3">
          <label htmlFor="">Maximum</label>
            <input
              type="number"
              className="form-control"
              onChange={formik.handleChange}
              placeholder="Maximum"
              name="max"
              value={formik.values.max}
            />
            {formik.errors.max ? (
              <p className="formik-errors">{formik.errors.max}*</p>
            ) : null}
          </div>
          <div className="form-group mb-3">
          <label htmlFor="">Minimun</label>
            <input
              type="number"
              className="form-control"
              onChange={formik.handleChange}
              placeholder="Minimun"
              name="min"
              value={formik.values.min}
            />
            {formik.errors.min ? (
              <p className="formik-errors">{formik.errors.min}*</p>
            ) : null}
          </div>
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
              props.userData?"Update":"Submit"
            )}
          </button>
        </div>
      </Modal.Footer>
    </form>
    </Modal>
  );
};

export default CreateContest;
