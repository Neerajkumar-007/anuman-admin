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
      {props.questinsShow ? <CreateCategory catId={props.catId} onHide={props.onHide} categoryData={props.categoryData}/> : <CreateQuestions onHide={props.onHide} catId={props.catId} quesData={props.quesData}/>}
    </Modal>
  );
};

export default CreateQuizModal;
