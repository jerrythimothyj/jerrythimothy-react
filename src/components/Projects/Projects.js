import React from 'react';
import {connect} from 'react-redux';

const cardStyle = {
  minHeight: '300px'
}

const Projects = ({profile}) =>
  <div>
    <div className="row">
      {profile.projects.map((project, i) =>
			<div className="col-lg-4 col-sm-6" key={i}>
				<div className="thumbnail">
					<div className="thumb">
						<img src={project.img_src} alt="" height="300" />
						<div className="caption-overflow">
							<span>
								<a href={project.img_src} data-popup="lightbox" className="btn border-white text-white btn-flat btn-icon btn-rounded"><i className="icon-plus3"></i></a>
							</span>
						</div>
					</div>

					<div className="caption" style={cardStyle}>
						<h6 className="no-margin-top text-semibold">
              {project.web_src &&
                <a href={project.web_src} className="text-default" target="_blank">
                  {project.name}
                </a>
              }

              {!project.web_src &&
                <a className="text-default" target="_blank"> 
                  {project.name}
                </a>
              }

            </h6>
						{project.description}
            <br />
            <ul>
              {project.technologies.map((tech, j) =>
                <li key={j}>{tech}</li>
              )}
            </ul>
					</div>
				</div>
			</div>
      )};
  	</div>
  </div>;

  const mapStateToProps = ({ profile }) => ({
    profile
  });

  export default connect(mapStateToProps)(Projects);
