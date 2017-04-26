import React from 'react';
import {connect} from 'react-redux';

const Employment = ({profile}) =>
  <div className="panel panel-flat">
    <div className="panel-heading">
      <h6 className="panel-title">Employment</h6>
    </div>

    <ul className="media-list media-list-linked pb-5">
      {profile.employment.map((company, i) =>
  			<li className="media" key={i}>
  				<a href={company.link} className="media-link" target="_blank">
  					<div className="media-left"><img src={company.logo_src} className="img-circle" alt="" /></div>
  					<div className="media-body">
  						<span className="media-heading text-semibold">{company.company_name}</span>
  						<span className="media-annotation">{company.designation}</span>
  					</div>
  					<div className="media-right media-middle">
  						<span className="status-mark bg-success"></span>
  					</div>
  				</a>
  			</li>
      )}
		</ul>
  </div>

  const mapStateToProps = ({ profile }) => ({
    profile
  });

  export default connect(mapStateToProps)(Employment);
