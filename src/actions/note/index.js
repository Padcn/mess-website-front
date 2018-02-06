import * as notes from '../../constants/Notes.js';

export function addNote(item){
    return { type:notes.ADD_NOTE,item }   
}
export function deleteNote(id){
    return { type:notes.DELETE_NOTE,id }   
}
export function showNote(){
    return { type:notes.SHOW_NOTE }   
}
export function nextPageNote(){
    return { type:notes.NEXT_PAGE_NOTE }   
}
export function prevPageNote(){
    return { type:notes.PREV_PAGE_NOTE }   
}
