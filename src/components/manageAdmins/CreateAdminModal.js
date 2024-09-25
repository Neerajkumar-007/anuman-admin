// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import AddAdmin from "./AddAdmin";
import AddRole from "./AddRole";

const CreateAdminModal = (props) => {
  const [AddUser, setAddUser] = useState(false);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="admin-popup"
    >
      {AddUser ? (
        <AddRole setAddUser={setAddUser} onHide={props.onHide}/>
      ) : (
        <AddAdmin setAddUser={setAddUser} onHide={props.onHide} userData={props.userData}/>
      )}
    </Modal>
  );
};

export default CreateAdminModal;
