import React from "react"

class WorkButtons extends React.Component {
  render() {
    const thiser = this;
    return(
      <div className="work-buttons">
        {thiser.props.viewLink !== "" && <a href={thiser.props.viewLink} className="work-button link" target="_blank" rel="noopener noreferrer"><span className="hover-label">View Site</span></a>}

        {thiser.props.codeLink !== "" && <a href={thiser.props.codeLink} className="work-button code" target="_blank" rel="noopener noreferrer"><span className="hover-label">See Code</span></a>}

        {thiser.props.storyLink !== "" && <a href={thiser.props.storyLink} className="work-button story"><span className="hover-label">Read Story</span></a>}
      </div>
    );
  }
}

export default WorkButtons