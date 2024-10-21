import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import { goLiveContest } from "../../../Redux/Actions/admin/adminPanel";
import "react-datepicker/dist/react-datepicker.css";

const GoLiveModal = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [isClone, setIsClone] = useState(false);
  const dispatch=useDispatch()
  const handleChange = (date) => {
    setStartDate(date);
  };
  const handleCheckboxChange = () => {
    setIsClone(!isClone);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(props.contestId){
        dispatch(goLiveContest({id:props.contestId,data:{clone:isClone, endTime: startDate }})).then((res)=>{
            if(res.payload){
                props.onHide() 
            }
        })
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="admin-popup"
    >
      <form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="table-responsive table-defaut-design">
          <label htmlFor="">Clone</label>
          <div className="form-group mb-3">
            <input
                type="checkbox"
                checked={isClone}
                onChange={handleCheckboxChange}
              />
          </div>
          <label htmlFor="">Select date and time</label>
          <div className="form-group mb-3 datecss">
          <DatePicker
            selected={startDate}
            onChange={handleChange}
            showTimeSelect
            dateFormat="Pp"
          />
          </div>
        
          </div>
        </Modal.Body>

        <Modal.Footer>
          <div className="btn_submit">
            <button
              type="submit"
              className="btn btn-primary btn-custom btn-lg w-100 submit_btn confirmation_btn"
            >
              Submit
            </button>
          </div>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default GoLiveModal;