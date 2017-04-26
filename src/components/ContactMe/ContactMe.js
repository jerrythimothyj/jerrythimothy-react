import React from 'react';
import {connect} from 'react-redux';
import {setPingMeMessage} from '../../reducer/contact/actions';
import {toastr} from 'react-redux-toastr';

const ContactMe = ({pingMe}) =>
<div className="panel panel-flat">
  <div className="panel-heading">
    <h6 className="panel-title">Ping Me</h6>
  </div>

  <div className="panel-body">
    <form action="#">
      <div className="form-group">
        <textarea name="enter-message" id="enterMessage" className="form-control mb-15" rows="3" cols="1" placeholder="What's on your mind?"></textarea>
      </div>

      <div className="row">
          <div className="col-xs-6">
          </div>

          <div className="col-xs-6 text-right">
                <button type="button" className="btn btn-primary btn-labeled btn-labeled-right" onClick={pingMe()}>Ping <b><i className="icon-circle-right2"></i></b></button>
          </div>
        </div>
      </form>
    </div>
</div>

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  pingMe() {
    return () => {
      dispatch(setPingMeMessage(document.querySelector('#enterMessage').value))
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactMe);
