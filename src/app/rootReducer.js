import { combineReducers } from 'redux';
import appConfigReducer from '../modules/appConfig/reducer';

export default combineReducers({
  app: appConfigReducer,
});
