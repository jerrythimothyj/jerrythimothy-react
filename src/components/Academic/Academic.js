import React from 'react';
import {connect} from 'react-redux';

const Academic = ({profile}) =>
  <div className="panel panel-flat">
    <div className="panel-heading">
      <h6 className="panel-title">Academic</h6>
    </div>

    <ul className="media-list media-list-linked pb-5">
      {profile.academic.map((institution, i) =>
  			<li className="media" key={i}>
  				<a href={institution.link} className="media-link" target="_blank">
            {institution.logo_src &&
              <div className="media-left"><img src={institution.logo_src} className="img-circle" alt="" /></div>
            }
  					<div className="media-body">
  						<span className="media-heading text-semibold">{institution.institution_name}</span>
  						<span className="media-annotation">{institution.degree}</span>
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

  export default connect(mapStateToProps)(Academic);
