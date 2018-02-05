import * as types from './action-type.js';

export function addNote(item){
    return {
        type: types.ADD,
        item
    };
}

export function deleteNote(id){
    return {
        type: types.DELETE,
        item
    };
}

export function showNote(show){
    return {
        type: types.SHOW,
        item
    };
}
