import React from "react";
import "./progress-step.styles.scss";

class ProgressStep extends React.Component {
  render() {
    return (
      <div className="step-container">
        <div className="step-number">1</div>
        <div className="step-description">Shipping</div>
      </div>
    );
  }
}

export default ProgressStep;
