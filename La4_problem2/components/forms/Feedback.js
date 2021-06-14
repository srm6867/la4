import React from "react";
import $ from "jquery";

 class Feedback extends React.Component {
  handleMessage(event) {
    if (event.data && event.data.category === "tfeedbackform") {
      if (event.origin !== "https://app.traggr.com") return;

      if (
        event.data.action === "feedbacksubmitted" &&
        event.data.result === true
      ) {
        // Hide feedback form after 2 seconds
        setTimeout(() => {
          $("#feedbackForm").modal("hide");
        }, 2000);
      }
    }
  }

  constructor() {
    super();
    this.handleMessage = this.handleMessage.bind(this);
  }

  componentDidMount() {
    window.addEventListener("message", this.handleMessage);
  }

  componentWillUnmount() {
    window.removeEventListener("message", this.handleMessage);
  }

  render() {
    return (
      <div className="col-6 bg-light mx-auto text-center">
      
        <p>Shubham Ramdas Mali</p>
        <button
          className="btn btn-success"
          data-toggle="modal"
          data-target="#feedbackForm"
        >
          Give feedback
        </button>
        <div
          className="modal fade"
          id="feedbackForm"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="feedbackFormLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document" style={{ height: 400 }}>
            <div
              className="modal-content"
              style={{ backgroundColor: "#f8f9fa", height: "100%" }}
            >
              <div className="modal-header">
                <h5 className="modal-title">Provide us feedback</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <iframe
                  src="https://app.traggr.com/embed/v1/feedbackform?token=bbb66fd9-52dd-4550-9dfe-3139bb67d37d&verification=bf4dd69f-bb11-4fa6-ae78-5708da8ac81e&bg=%23f8f9fa&bbg=%23212529&bc=%23ffffff&source=5"
                  scrolling="no"
                  style={{ border: "none" }}
                  height="100%"
                  width="100%"
                  title="Feedback Form"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Feedback;