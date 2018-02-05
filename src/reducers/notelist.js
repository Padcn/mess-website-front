import * as types from '../actions/action-type.js';
import data from '../data/d.js';
const initialState={
    show:false,
    notelist:data
}

const noteReducer=function(state=initialState,action)=>{
    console.log(state);
    let list=state.notelist;
    switch(action.type){
        case types.ADD:
            list.push(action.item);
            return Object.assign({},state,{notelist:list});
        case types.DELETE:
            let newState=list.filter((item)=>item.id!=action.id);
            return Object.assign({},state,{notelist:newState});
        case types.SHOW:
            return Object.assign({},state,{show:action.show});
    }
    return state;
}

export default notelist;
