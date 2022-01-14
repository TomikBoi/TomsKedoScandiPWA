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
        <div className="step-number" style={{backgroundColor: `${activeStep === item || activatedSteps.includes(item) ? '#A82222' : ''}`}}>{stepNumber}</div>
        <div className="step-description" style={{color: `${activeStep === item || activatedSteps.includes(item) ? 'black' : ''}`}}>{stepDescription.replace("_STEP", "")}</div>
      </div>
    );
  }
}

export default ProgressStep;
