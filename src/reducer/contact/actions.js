import {API_URL} from '../../constants';
import axios from 'axios';

export const SET_PING_ME_MESSAGE = 'SET_PING_ME_MESSAGE';

export function setPingMeMessage(content) {
  let url = `${API_URL}pingMe`;
  return (dispatch) => {
    axios.post(`${API_URL}pingMe`,{
        content
    }).then((response) => {
        dispatch({
          type: SET_PING_ME_MESSAGE,
          pingMe: response.data
        })
        if(response.statusText === "OK") {
          dispatch(function () {
              new PNotify({
                  title: 'Message Sent',
                  addclass: 'bg-success'
              });
          });
        }
      }
      )

  }
}
