import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { createQuestion, getCategoryQuestion, updateQuestion } from "../../Redux/Actions/admin/adminPanel"; // Assuming updateQuestion is the update API call

const CreateQuestions = ({ catId, onHide, quesData }) => {
  const dispatch = useDispatch();
  const [contentData, setContentData] = useState(null);
  const [questions, setQuestions] = useState([
    {
      title: quesData?.title || "",
      type: quesData?.type || "text",
      categoryId:quesData.categoryId||catId,
      options: quesData?.options || ["", "", "", ""],
      correctOption: quesData?.correctOption || 1,
      content: quesData?.contentUrl || null,
    },
  ]);

  useEffect(() => {
    if (quesData && quesData.contentUrl) {
      setContentData(quesData.contentUrl);
    }
  }, [quesData]);

  const validationSchema = Yup.object({
    questions: Yup.array().of(
      Yup.object().shape({
        title: Yup.string().required("Question heading is required"),
        options: Yup.array()
          .of(Yup.string().required("Option is required"))
          .min(4, "You must provide at least 4 options"),
        correctOption: Yup.number().min(1, "Select the correct option"),
      })
    ),
  });

  const handleMediaChange = (qIndex, e, setFieldValue) => {
    const file = e.target.files[0];
    const imageMaxSize = 500 * 1024;
    const videoMaxSize = 10 * 1024 * 1024;

    if (file) {
      const fileSize = file.size;
      if (questions[qIndex].type === "image" && fileSize > imageMaxSize) {
        alert("Image size should not exceed 500KB.");
        e.target.value = null;
        return;
      }

      if (questions[qIndex].type === "video" && fileSize > videoMaxSize) {
        alert("Video size should not exceed 10MB.");
        e.target.value = null;
        return;
      }

      setContentData(file);
      const mediaURL = URL.createObjectURL(file);
      setFieldValue(`questions[${qIndex}].content`, mediaURL);
    }
  };

  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append("title", values.questions[0].title);
    formData.append("type", values.questions[0].type);
    formData.append("categoryId", values.questions[0].categoryId);
    values.questions[0].options.forEach((option, index) => {
      formData.append(`options[${index}]`, option);
    });
    formData.append("correctOption", values.questions[0].correctOption);
    if (contentData) {
      formData.append("content", contentData);
    }
    if (quesData) {
      dispatch(updateQuestion({id:quesData._id,data:formData})).then((res) => {
        if (res.payload) {
          dispatch(getCategoryQuestion(catId))
          onHide(); 
        }
      });
    } else {
      dispatch(createQuestion(formData)).then((res) => {
        if (res.payload) {
          onHide();
        }
      });
    }
  };

  return (
    <Formik
      initialValues={{ questions }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {quesData ? "Update Question" : "Add Question"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              {values.questions.map((q, qIndex) => (
                <div key={qIndex} style={{ marginBottom: "20px" }}>
                  <label htmlFor={`questions[${qIndex}].type`}>
                    Choose question Type
                  </label>
                  <div className="form-group mb-3">
                    <Field
                      as="select"
                      name={`questions[${qIndex}].type`}
                      className="form-control"
                    >
                      <option value="text">Text</option>
                      <option value="image">Image</option>
                      <option value="video">Video</option>
                    </Field>
                  </div>

                  {["image", "video"].includes(q.type) && (
                    <>
                      <input
                        className="form-control"
                        type="file"
                        accept={q.type === "image" ? "image/*" : "video/*"}
                        onChange={(e) =>
                          handleMediaChange(qIndex, e, setFieldValue)
                        }
                        style={{ marginBottom: "10px" }}
                      />
                      {q.content && q.type === "image" ? (
                        <img
                          src={q.content}
                          alt="Preview"
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                            border: "1px solid #ddd",
                            borderRadius: "4px",
                          }}
                        />
                      ) : (
                        <video
                          src={q.content}
                          controls
                          style={{
                            width: "50%",
                            height: "auto",
                            border: "1px solid #ddd",
                            borderRadius: "4px",
                          }}
                        />
                      )}
                    </>
                  )}
                  <div>
                    <label htmlFor={`questions[${qIndex}].title`}>
                      Question Name
                    </label>
                    <div className="form-group mb-3">
                      <Field
                        name={`questions[${qIndex}].title`}
                        className="form-control"
                        placeholder="Enter question"
                      />
                      <ErrorMessage
                        name={`questions[${qIndex}].title`}
                        component="div"
                        className="error"
                      />
                    </div>
                  </div>
                  {q.options.map((option, oIndex) => (
                    <div key={oIndex} style={{ marginTop: "10px" }}>
                      <Field
                        name={`questions[${qIndex}].options[${oIndex}]`}
                        className="options-field"
                        placeholder={`Option ${oIndex + 1}`}
                      />
                      <Field
                        type="radio"
                        name={`questions[${qIndex}].correctOption`}
                        value={oIndex + 1}
                        checked={values.questions[qIndex].correctOption === oIndex + 1}
                        onChange={() =>
                          setFieldValue(`questions[${qIndex}].correctOption`, oIndex + 1)
                        }
                      />
                      <ErrorMessage
                        name={`questions[${qIndex}].options[${oIndex}]`}
                        component="div"
                        className="error"
                      />
                    </div>
                  ))}
                  <ErrorMessage
                    name={`questions[${qIndex}].correctOption`}
                    component="div"
                    className="error"
                  />
                </div>
              ))}
            </div>
          </Modal.Body>

          <Modal.Footer className="justify-content-between">
            <div className="btn_submit">
              <button
                type="button"
                className="btn btn-primary btn-custom btn-lg w-100 submit_btn confirmation_btn"
                onClick={onHide}
              >
                Cancel
              </button>
            </div>
            <div className="btn_submit">
              <button
                type="submit"
                className="btn btn-primary btn-custom btn-lg w-100 submit_btn confirmation_btn"
              >
                {quesData ? "Update" : "Submit"}
              </button>
            </div>
          </Modal.Footer>
        </Form>
      )}
    </Formik>
  );
};

export default CreateQuestions;
