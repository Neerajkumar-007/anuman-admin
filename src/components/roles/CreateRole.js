import React from 'react'
import Modal from "react-bootstrap/Modal";
import AddRole from '../manageAdmins/AddRole';

const CreateRole = (props) => {
    console.log(props.userData);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="admin-popup"
    >
        <AddRole onHide={props.onHide} userData={props.userData}/>
    </Modal>
  )
}

export default CreateRole