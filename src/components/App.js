import React from 'react';
import {CoverPhoto} from './CoverPhoto';
import {TechnicalSkills} from './TechnicalSkills';
import {Projects} from './Projects';
import {AboutMe} from './AboutMe';
import {UserVisits} from './UserVisits';
import {Employment} from './Employment';
import {Academic} from './Academic';
import {Strengths} from './Strengths';
import {Profile} from './Profile';
import {ContactMe} from './ContactMe';
import {Spinner} from 'react-redux-spinner';

const App = () =>
  <div>
    <div className="page-container">

      <div className="page-content">

        <div className="content-wrapper">
          <CoverPhoto />
          <br />
          <div className="row">
            <div className="col-lg-9">
              <Projects />
              <TechnicalSkills />
            </div>
            <div className="col-lg-3">
              <Profile />
              <ContactMe />
              <UserVisits />
              <AboutMe />
              <Employment />
              <Academic />
              <Strengths />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Spinner />
  </div>;

export default App;
