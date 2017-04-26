import React from 'react';

const chartStyle = {
  height: '400px'
}

export const Strengths = () =>
  <div className="panel panel-flat">
    <div className="panel-heading">
      <h5 className="panel-title">Strengths</h5>
    </div>

    <div className="panel-body">
      <div className="chart-container has-scroll">
        <div className="chart has-fixed-height has-minimum-width" id="basic_donut" style={chartStyle}></div>
      </div>
    </div>
  </div>;
