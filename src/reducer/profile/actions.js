import {DATA_URL} from '../../constants';
import axios from 'axios';

export const SET_ABOUT_ME = 'SET_ABOUT_ME';
export const SET_EMPLOYMENT = 'SET_EMPLOYMENT';
export const SET_ACADEMIC = 'SET_ACADEMIC';
export const SET_PROJECTS = 'SET_PROJECTS';

export function getAboutMe() {
  let url = `${DATA_URL}/aboutMe.json`;
  return (dispatch) => {
    axios.get(url)
      .then((res) => dispatch({
        type: SET_ABOUT_ME,
        aboutMe: res.data
      }))
  }
}


export function getEmployment() {
  let url = `${DATA_URL}/employment.json`;
  return (dispatch) => {
    axios.get(url)
      .then((res) => dispatch({
        type: SET_EMPLOYMENT,
        employment: res.data
      }))
  }
}


export function getAcademic() {
  let url = `${DATA_URL}/academic.json`;
  return (dispatch) => {
    axios.get(url)
      .then((res) => dispatch({
        type: SET_ACADEMIC,
        academic: res.data
      }))
  }
}


export function getProjects() {
  let url = `${DATA_URL}/projects.json`;
  return (dispatch) => {
    axios.get(url)
      .then((res) => dispatch({
        type: SET_PROJECTS,
        projects: res.data
      }))
  }
}
