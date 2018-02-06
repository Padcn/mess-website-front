import {createStore} from 'redux';
import noteReducer from '../../reducers/note/';

export default function noteStore(initState){
    return createStore(noteReducer,initState);
}
