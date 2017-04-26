import React from 'react';

const mapVisitsStyle = {
  border:0
}

export const UserVisits = () =>
  <div className="panel panel-flat">
    <div className="panel-heading">
      <h6 className="panel-title">User Visits</h6>
    </div>

    <div className="list-group no-border no-padding-top">
      <span className="list-group-item">
        <div className="text-center">
          <a href="https://www.revolvermaps.com/?target=enlarge&amp;i=53j0oihh6q8" target="_blank">
            <img src="https://rf.revolvermaps.com/h/m/a/0/ff0000/128/0/53j0oihh6q8.png" width="256" height="128" alt="Map" style={mapVisitsStyle} />
          </a>
        </div>
      </span>
    </div>
  </div>
