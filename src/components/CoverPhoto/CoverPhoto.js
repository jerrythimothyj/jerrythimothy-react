import React from 'react';

const profileCoverImgStyle = {
  backgroundImage: 'url(assets/images/userImages/cover.jpg)'
}

export const CoverPhoto = () =>
    <div className="profile-cover">
      <div className="profile-cover-img" style={profileCoverImgStyle}></div>
      <div className="media">
        <div className="media-left">
          <a href="#" className="profile-thumb">
            <img src="assets/images/userImages/jerry.jpg" className="img-circle" alt="" />
          </a>
        </div>

        <div className="media-body">
            <h1>Jerry Thimothy J <small className="display-block">Web Developer</small></h1>
        </div>
      </div>
    </div>;
