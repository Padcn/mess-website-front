import {ADD_NOTE,DELETE_NOTE,SHOW_NOTE,NEXT_PAGE_NOTE,PREV_PAGE_NOTE} from '../../constants/Notes';
import data from '../../data/db'

const initState={
    notelist:data   
}
export default function noteReducer(state=initState,action){
    let list=state.notelist;
    console.log(list);
    switch(action.type){
        case ADD_NOTE:
            list.push(action.item);
            return Object.assign({},state,{notelist:list});
        case DELETE_NOTE:
        let newState=list.filter((item)=>item.id!=action.id);
            return Object.assign({},state,{notelist:newState});
        case SHOW_NOTE:
            return state;
        case NEXT_PAGE_NOTE:
            return state;
        case PREV_PAGE_NOTE:
            return state;
        default:
            return state;
    }
}
