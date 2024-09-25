import Modal from "react-bootstrap/Modal";
import CreateCategory from "./CreateCategory";
import CreateQuestions from "./CreateQuestions";

const CreateQuizModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="admin-popup"
    >
      {props.questinsShow ? <CreateCategory catId={props.catId} onHide={props.onHide}/> : <CreateQuestions onHide={props.onHide} catId={props.catId}/>}
    </Modal>
  );
};

export default CreateQuizModal;
