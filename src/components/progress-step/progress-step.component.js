import React from "react";
import "./progress-step.styles.scss";

class ProgressStep extends React.Component {
  render() {
    const {
      stepDescription,
      activeStep,
      stepNumber,
      item,
      activatedSteps
    } = this.props;
    return (
      <div className="step-container">
        <div className={`step-number ${activeStep === item || activatedSteps.includes(item) ? 'step-number-active' : ''}`}>{stepNumber}</div>
        <div className={`step-description ${activeStep === item || activatedSteps.includes(item) ? 'step-description-active' : ''}`}>{stepDescription.replace("_STEP", "")}</div>
      </div>
    );
  }
}

export default ProgressStep;
