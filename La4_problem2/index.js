import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FeedbackHome from "./components/FeedbackHome";

function App() {
  return (
    <div className="container">
      <FeedbackHome />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
