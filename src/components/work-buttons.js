import React from "react"

class WorkButtons extends React.Component {
  render() {
    const thiser = this;
    return(
      <div className="work-buttons">

        {thiser.props.viewLink !== "" && <a href={thiser.props.viewLink} className="work-button" target="_blank" rel="noopener noreferrer">View Site</a>}

        {thiser.props.codeLink !== "" && <a href={thiser.props.codeLink} className="work-button code" target="_blank" rel="noopener noreferrer">See Code</a>}

        {thiser.props.storyLink !== "" && <a href={thiser.props.storyLink} className="work-button">Read Story</a>}
      </div>
    );
  }
}

export default WorkButtons