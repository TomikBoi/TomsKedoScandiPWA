import React from "react";
import "./progress-step.styles.scss";

class ProgressStep extends React.Component {
  render() {
    const {
      stepDescription,
      accomplished,
      stepNumber,
      position,
      index,
      children,
      transition = null,
      transitionDuration = 300,
    } = this.props;
    return (
      <div className="step-container">
        <div className="step-number">{stepNumber}</div>
        <div className="step-description">{stepDescription.replace("_STEP", "")}</div>
      </div>
    );
  }
}

export default ProgressStep;
