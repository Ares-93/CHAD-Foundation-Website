import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./FeedbackForm.css";

function FeedbackForm({ onClose }) {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Check if the feedback form has been shown or submitted before
  useEffect(() => {
    const formShown = localStorage.getItem("feedbackFormShown");
    if (formShown) {
      setSubmitted(true); // If the form has already been shown or submitted, don't show it again
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedbackData = {
      rating,
      comment,
    };

    emailjs
      .send(
        "service_bqm8kqr",
        "template_ef0bxzt",
        feedbackData,
        "Q-xjSLW-oYj7nvq7C"
      )

      .then(
        () => {
          setSubmitted(true);
          localStorage.setItem("feedbackFormShown", "true"); // Save in local storage to prevent showing again
        },
        (error) => {
          console.error("EmailJS error:", error);
        }
      );
  };

  const handleClose = () => {
    setSubmitted(true);
    localStorage.setItem("feedbackFormShown", "true"); // Save in local storage to prevent showing again
    onClose(); // Close the modal
  };

  return (
    <div className="feedback-modal">
      <div className="feedback-content">
        <span className="close-button" onClick={handleClose}>
          &times;
        </span>
        {submitted ? (
          <h2>Thank you for your heartfelt feedback!</h2>
        ) : (
          <>
            <h2>Please share your thoughts!</h2>
            <form onSubmit={handleSubmit} className="feedback-form">
              <div className="form-group" style={{ marginBottom: "20px" }}>
                <label>
                  How would you rate your experience with our website so far?{" "}
                  <br />
                  (1 - extremely bad, 10 - extremely good)
                </label>
                <div className="rating-options">
                  {[...Array(10)].map((_, i) => (
                    <button
                      key={i + 1}
                      type="button"
                      className={`rating-button ${
                        rating === i + 1 ? "selected" : ""
                      }`}
                      onClick={() => setRating(i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: "20px" }}>
                <label>
                  If you have any suggestions, comments, or anything to say,
                  please feel free to write it below:
                </label>
                <div className="textarea-container" style={{ width: "100%" }}>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows="4"
                    placeholder="Your feedback..."
                    style={{
                      width: "100%",
                      padding: "10px",
                      marginTop: "10px",
                    }}
                  />
                </div>
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default FeedbackForm;
