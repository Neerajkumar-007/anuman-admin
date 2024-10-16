// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import AddAdmin from "./AddAdmin";

const CreateAdminModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="admin-popup"
    >
    <AddAdmin onHide={props.onHide} userData={props.userData}/>
    </Modal>
  );
};

export default CreateAdminModal;
