import React from "react";
import './progress-bar.styles.scss'

class ProgressBar extends React.Component {

  render() {
  const { bgcolor, completed } = this.props;
  
    return (
      <div className="progressbar-container">
        <div className="progressbar-filler">
        </div>
      </div>
    );
  }

}

export default ProgressBar;