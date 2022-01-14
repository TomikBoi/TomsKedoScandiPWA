import React from "react";
import ProgressStep from "../progress-step/progress-step.component";
import './progress-bar.styles.scss'

class ProgressBar extends React.Component {

  render() {
  const { bgcolor, completed } = this.props;
  
    return (

      
      <div className="progressbar-container">
        <div className="progressbar-filler">
          
        </div>
        <ProgressStep />
      </div>
    );
  }

}

export default ProgressBar;