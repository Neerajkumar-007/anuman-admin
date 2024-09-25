import React from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { deleteMember } from "../../../Redux/Actions/admin/adminPanel";
const DeleteMemberModal = (props) => {
  const dispatch = useDispatch();

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
          Delete Member
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="text-center mb-0">
          Are you sure you want to delete this member?
        </h4>
      </Modal.Body>
      <Modal.Footer>
        <button
          onClick={() => {
            dispatch(deleteMember(props.memberId)).then(props.onHide);
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

export default DeleteMemberModal;
