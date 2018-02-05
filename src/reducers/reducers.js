import {combineReducers} from 'redux';
import notelist from './notelist';

var reducers=combineReducers({
    notetlist:notelist 
});

export default reducers;
