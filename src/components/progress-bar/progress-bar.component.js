import React from "react";
import ProgressStep from "../progress-step/progress-step.component";
import "./progress-bar.styles.scss";

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activatedSteps: [this.props.activeStep]};
  };

  componentDidUpdate(prevProps) {
    console.log(this.props.activeStep)
    if (this.props.activeStep !== prevProps.activeStep) {
      this.setState({activatedSteps: [...this.state.activatedSteps ,this.props.activeStep]});
    }
  }

  render() {
    const {
      numberOfSteps,
      activeStep
    } = this.props;
    const divideBy = Object.keys(numberOfSteps).length;

    return (
      <div className="progressbar-container">
        {Object.keys(numberOfSteps).map((item, index, arr) => (
          <React.Fragment key={item}>
            {arr.length - 1 === index ? 
              <>
                <div
                  className="progressbar-filler"
                  style={{ width: `calc(100% / ${divideBy})`, backgroundColor: `${activeStep === item || this.state.activatedSteps.includes(item) ? '#A82222' : ''}` }}></div>
              </>
             : 
              <>
                <div
                  className="progressbar-filler"
                  style={{ width: `calc(100% / ${divideBy})`, backgroundColor: `${activeStep === item || this.state.activatedSteps.includes(item) ? '#A82222' : ''}` }}
                />
                <ProgressStep stepNumber={index + 1} stepDescription={item} activeStep={activeStep} item={item} activatedSteps={this.state.activatedSteps}/>
              </>
            }
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default ProgressBar;
