import React from 'react';
import {connect} from 'react-redux';

const AboutMe = ({profile}) =>
  <div className="panel panel-flat">
    <div className="panel-heading">
      <h6 className="panel-title">About Me</h6>
    </div>
    <div className="list-group no-border no-padding-top">
      <span className="list-group-item">
        {profile.aboutMe.objective}
        <br /><br />
        {profile.aboutMe.about}
      </span>
    </div>
  </div>

const mapStateToProps = ({ profile }) => ({
  profile
});

export default connect(mapStateToProps)(AboutMe);
