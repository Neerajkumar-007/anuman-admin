import React from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { deleteAdmins, deleteCategory, deleteQuestion, blockRoles, getrolesList } from "../../Redux/Actions/admin/adminPanel";
import { modalBody } from "./PopupData";

const DeleteModal = (props) => {
  console.log(props.userBlock,"props.userBlock");
  const dispatch = useDispatch();
  const handleClick = () => {
    switch (props.modalName) {
      case "deleteAdmin":
        dispatch(deleteAdmins(props.adminId)).then((res) => {
          if (res?.payload?.user) {
            props.onHide()
          }
        });
        break;
        case "deleteRole":
          dispatch(blockRoles({
            id: props.roleId, 
            data: { block: props.userBlock ? false : true }
          })).then((res) => {
            if (res) {
              dispatch(getrolesList())
              props.onHide()
            }
          });
          break;
      case "deleteCategory":
        dispatch(deleteCategory(props.categoryId)).then((res) => {
          if (res?.payload?.user) {
            props.onHide()
          }
        });
        break;
      case "deleteQuestion":
          dispatch(deleteQuestion(props.quesId)).then((res) => {
            if (res?.payload) {
              props.onHide()
            }
          });
          break;
      }
    }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="delete_admin_modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {/* delete admin
        {modalBody[props.modalName]} */}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="text-center mb-0">
        {modalBody[props.modalName]}
        </h4>
      </Modal.Body>
      <Modal.Footer>
        <button
          onClick={() => {
            handleClick();
          }}
          type="submit"
          className="btn btn-primary btn-custom btn-lg w-100 submit_btn confirmation_btn"
        >
          Yes
        </button>
        <button
          onClick={props.onHide}
          type="submit"
          className="btn btn-primary btn-custom btn-lg w-100 submit_btn confirmation_btn"
        >
          No
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
