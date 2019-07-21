import React from "react"
import SEO from "../components/seo"
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import WorkButtons from '../components/work-buttons'


class WorkPage extends React.Component {

    render() {
      const projects = this.props.data.allWordpressWpWorks.nodes;
      return (
        <div>
          <SEO title="The Work of Sean Madrid" />
          <div className="project-index">
            <h1 className="header-l">My Work</h1>
            {projects && projects.map((project, n) => {

                let view_link;
                let code_link;
                let story_link;

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

                if(project.content.rendered !== "") {
                  story_link = "/work/" + project.slug;
                }else {
                  story_link = "";
                }

                return (
                  <div key={n} className="single-project">
                    <div className="image-wrapper">
                      <img className="featured-project-image" src={project.featured_media.source_url} alt={project.featured_media.alt_text}/>
                    </div>
                    <div className="title-box">
                      <h3 className="header-sm project-title">{project.title}</h3>
                      <span className="excerpt" dangerouslySetInnerHTML={{__html: project.excerpt}}></span>
                      <WorkButtons viewLink={view_link} codeLink={code_link} storyLink={story_link} />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      );
    }
}

WorkPage.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default WorkPage

export const pageQuery = graphql `
  query workQuery {
    allWordpressWpWorks {
      nodes {
        acf {
          code_url
          live_url
        }
        content
        excerpt
        featured_media {
          alt_text
          source_url
        }
        wordpress_id
        title
        slug
      }
    }
  }`