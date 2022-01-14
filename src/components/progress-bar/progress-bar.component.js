import React from "react";
import ProgressStep from "../progress-step/progress-step.component";
import "./progress-bar.styles.scss";

class ProgressBar extends React.Component {
  render() {
    const {
      bgcolor,
      completed,
      activeStep,
      stepPositions = [],
      unfilledBackground = null,
      filledBackground = null,
      stepNumber,
      numberOfSteps,
    } = this.props;
    const divideBy = Object.keys(numberOfSteps).length;

    return (
      <div className="progressbar-container">
        {Object.keys(numberOfSteps).map((item, index, arr) => (
          <React.Fragment key={index}>
          {console.log(item)},
            {arr.length - 1 === index ? (
              <>
                <div
                  className="progressbar-filler"
                  style={{ width: `calc(100% / ${divideBy})` }}></div>
              </>
            ) : (
              <>
                <div
                  className="progressbar-filler"
                  style={{ width: `calc(100% / ${divideBy})` }}
                />
                <ProgressStep stepNumber={index + 1} stepDescription={item}/>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default ProgressBar;
