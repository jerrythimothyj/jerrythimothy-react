import React from 'react';

export const Profile = () =>
  <div className="thumbnail">
    <div className="thumb thumb-rounded thumb-slide">
    	<img src="assets/images/userImages/avatar.jpg" alt="" />
    </div>

  	<div className="caption text-center">
  		<h6 className="text-semibold no-margin">Jerry Thimothy J <small className="display-block">Web Developer</small></h6>
  		<ul className="icons-list mt-15">
        <li><a href="https://github.com/jerrythimothyj" data-popup="tooltip" title="Github" target="_blank"><i className="icon-github"></i></a></li>
        <li><a href="https://www.linkedin.com/in/jerry-thimothy-j-0b095839/" data-popup="tooltip" title="LinkedIn" target="_blank"><i className="icon-linkedin"></i></a></li>
        <li><a href="https://www.facebook.com/jeremiahtimothy" data-popup="tooltip" title="Facebook" target="_blank"><i className="icon-facebook"></i></a></li>
        <li><a href="mailto:jerrythimothy@gmail.com" data-popup="tooltip" title="Mail" target="_blank"><i className="icon-envelope"></i></a></li>
        <li><a href="tel:+918754967829" data-popup="tooltip" title="Phone" target="_blank"><i className="icon-phone"></i></a></li>
    	</ul>
  	</div>
  </div>
