import React from "react"
import PropTypes from 'prop-types'
import WorkButtons from '../components/work-buttons'

class SingleProject extends React.Component {
  render() {

    const project = this.props.data.wordpressWpWorks;

    let view_link;
    let code_link;

    if(project.acf.live_url){
      view_link = project.acf.live_url;
    }else{
      view_link = "";
    }

    if(project.acf.code_url){
      code_link = project.acf.code_url;
    }else{
      code_link = ""; 
    }

    return (
      <div className="single-project-wrap">
        <h1 className="header-l">{project.title}</h1>
        <WorkButtons viewLink={view_link} codeLink={code_link} storyLink="" />
        <div className="project-content" dangerouslySetInnerHTML={{__html: project.content}}></div>
        <WorkButtons viewLink={view_link} codeLink={code_link} storyLink="" />
      </div>
    );
  }
}

SingleProject.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default SingleProject

export const pageQuery = graphql `
  query currentProjectQuery($id: String!) {
    wordpressWpWorks(id: { eq: $id }) {
      id
      acf {
        code_url
        live_url
      }
      content
      title
    }
  }`