import React, { Component } from 'react';

class ProjectElement extends Component {
  render (){
    return (
      <div className="col-lg-4 col-sm-6">
        <a className="portfolio-box" href="img/portfolio/fullsize/1.jpg">
          <img className="img-fluid" src="img/portfolio/thumbnails/1.jpg" alt="" />
          <div className="portfolio-box-caption">
            <div className="project-category text-white-50">
              Category
            </div>
            <div className="project-name">
              Project Name
            </div>
          </div>
        </a>
      </div>

    );
  }
}

export default ProjectElement;
