import { combineReducers } from 'redux';
import contact from './contact';
import profile from './profile';
import {
  Spinner, // The React component
  pendingTasksReducer, // The redux reducer
  pendingTask, // The action key for modifying loading state
  begin, // The action value if a "long" running task begun
  end // The action value if a "long" running task ended
} from 'react-redux-spinner';

export default combineReducers({
  contact,
  profile,
  pendingTasks: pendingTasksReducer
});
