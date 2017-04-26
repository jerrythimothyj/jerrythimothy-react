import React from 'react';

const chartStyle = {
  height: '1000px'
}

export const TechnicalSkills = () =>
  <div className="panel panel-flat">
    <div className="panel-heading">
      <h5 className="panel-title">Technical Skills</h5>
    </div>

    <div className="panel-body">
      <div className="chart-container has-scroll">
        <div className="chart has-fixed-height has-minimum-width" id="multiple_donuts" style={chartStyle}></div>
      </div>
    </div>
  </div>;
